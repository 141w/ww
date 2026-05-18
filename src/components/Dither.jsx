/* eslint-disable react/no-unknown-property */
import { useRef, useEffect, useCallback } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { EffectComposer, wrapEffect } from '@react-three/postprocessing';
import { Effect } from 'postprocessing';
import * as THREE from 'three';

import './Dither.css';

const waveVertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const waveFragmentShader = `
precision highp float;
varying vec2 vUv;
uniform vec2 uResolution;
uniform float uTime;
uniform float uWaveSpeed;
uniform float uWaveFrequency;
uniform float uWaveAmplitude;
uniform vec3 uWaveColor;
uniform vec2 uMouse;
uniform int uEnableMouse;
uniform float uMouseRadius;

vec4 mod289(vec4 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
vec2 fade(vec2 t) { return t*t*t*(t*(t*6.0-15.0)+10.0); }

float cnoise(vec2 P) {
  vec4 Pi = floor(P.xyxy) + vec4(0.0,0.0,1.0,1.0);
  vec4 Pf = fract(P.xyxy) - vec4(0.0,0.0,1.0,1.0);
  Pi = mod289(Pi);
  vec4 ix = Pi.xzxz;
  vec4 iy = Pi.yyww;
  vec4 fx = Pf.xzxz;
  vec4 fy = Pf.yyww;
  vec4 i = permute(permute(ix) + iy);
  vec4 gx = fract(i * (1.0/41.0)) * 2.0 - 1.0;
  vec4 gy = abs(gx) - 0.5;
  vec4 tx = floor(gx + 0.5);
  gx = gx - tx;
  vec2 g00 = vec2(gx.x, gy.x);
  vec2 g10 = vec2(gx.y, gy.y);
  vec2 g01 = vec2(gx.z, gy.z);
  vec2 g11 = vec2(gx.w, gy.w);
  vec4 norm = taylorInvSqrt(vec4(dot(g00,g00), dot(g01,g01), dot(g10,g10), dot(g11,g11)));
  g00 *= norm.x; g01 *= norm.y; g10 *= norm.z; g11 *= norm.w;
  float n00 = dot(g00, vec2(fx.x, fy.x));
  float n10 = dot(g10, vec2(fx.y, fy.y));
  float n01 = dot(g01, vec2(fx.z, fy.z));
  float n11 = dot(g11, vec2(fx.w, fy.w));
  vec2 fade_xy = fade(Pf.xy);
  vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
  return 2.3 * mix(n_x.x, n_x.y, fade_xy.y);
}

float fbm(vec2 p) {
  float value = 0.0;
  float amp = 1.0;
  float freq = uWaveFrequency;
  for (int i = 0; i < 4; i++) {
    value += amp * abs(cnoise(p));
    p *= freq;
    amp *= uWaveAmplitude;
  }
  return value;
}

void main() {
  vec2 uv = vUv;
  uv -= 0.5;
  uv.x *= uResolution.x / uResolution.y;
  
  vec2 p = uv + uTime * uWaveSpeed;
  float f = fbm(p + fbm(uv - uTime * uWaveSpeed * 0.5));
  
  if (uEnableMouse == 1) {
    vec2 mouseNorm = uMouse / uResolution;
    vec2 mouseUv = mouseNorm - 0.5;
    mouseUv.x *= uResolution.x / uResolution.y;
    float dist = length(uv - mouseUv);
    float effect = 1.0 - smoothstep(0.0, uMouseRadius, dist);
    f -= 0.5 * effect;
  }
  
  vec3 col = mix(vec3(0.0), uWaveColor, f);
  gl_FragColor = vec4(col, 1.0);
}
`;

const ditherFragmentShader = `
precision highp float;
uniform float colorNum;
uniform float pixelSize;
uniform vec2 resolution;

const float bayerMatrix8x8[64] = float[64](
  0.0/64.0, 48.0/64.0, 12.0/64.0, 60.0/64.0,  3.0/64.0, 51.0/64.0, 15.0/64.0, 63.0/64.0,
  32.0/64.0,16.0/64.0, 44.0/64.0, 28.0/64.0, 35.0/64.0,19.0/64.0, 47.0/64.0, 31.0/64.0,
  8.0/64.0, 56.0/64.0,  4.0/64.0, 52.0/64.0, 11.0/64.0,59.0/64.0,  7.0/64.0, 55.0/64.0,
  40.0/64.0,24.0/64.0, 36.0/64.0, 20.0/64.0, 43.0/64.0,27.0/64.0, 39.0/64.0, 23.0/64.0,
  2.0/64.0, 50.0/64.0, 14.0/64.0, 62.0/64.0,  1.0/64.0,49.0/64.0, 13.0/64.0, 61.0/64.0,
  34.0/64.0,18.0/64.0, 46.0/64.0, 30.0/64.0, 33.0/64.0,17.0/64.0, 45.0/64.0, 29.0/64.0,
  10.0/64.0,58.0/64.0,  6.0/64.0, 54.0/64.0,  9.0/64.0,57.0/64.0,  5.0/64.0, 53.0/64.0,
  42.0/64.0,26.0/64.0, 38.0/64.0, 22.0/64.0, 41.0/64.0,25.0/64.0, 37.0/64.0, 21.0/64.0
);

vec3 dither(vec2 uv, vec3 color) {
  vec2 scaledCoord = floor(uv * resolution / pixelSize);
  int x = int(mod(scaledCoord.x, 8.0));
  int y = int(mod(scaledCoord.y, 8.0));
  float threshold = bayerMatrix8x8[y * 8 + x] - 0.25;
  float step = 1.0 / (colorNum - 1.0);
  color += threshold * step;
  float bias = 0.2;
  color = clamp(color - bias, 0.0, 1.0);
  return floor(color * (colorNum - 1.0) + 0.5) / (colorNum - 1.0);
}

void mainImage(in vec4 inputColor, in vec2 uv, out vec4 outputColor) {
  vec2 normalizedPixelSize = pixelSize / resolution;
  vec2 uvPixel = normalizedPixelSize * floor(uv / normalizedPixelSize);
  vec4 color = texture2D(inputBuffer, uvPixel);
  color.rgb = dither(uv, color.rgb);
  outputColor = color;
}
`;

class DitherEffectImpl extends Effect {
  constructor() {
    const uniforms = new Map([
      ['colorNum', new THREE.Uniform(4.0)],
      ['pixelSize', new THREE.Uniform(2.0)],
      ['resolution', new THREE.Uniform(new THREE.Vector2(1920, 1080))]
    ]);
    super('DitherEffect', ditherFragmentShader, { uniforms });
    this.uniforms = uniforms;
  }
  set colorNum(v) { this.uniforms.get('colorNum').value = v; }
  get colorNum() { return this.uniforms.get('colorNum').value; }
  set pixelSize(v) { this.uniforms.get('pixelSize').value = v; }
  get pixelSize() { return this.uniforms.get('pixelSize').value; }
  set resolution(v) { this.uniforms.get('resolution').value.copy(v); }
  get resolution() { return this.uniforms.get('resolution').value; }
}

const WrappedDither = wrapEffect(DitherEffectImpl);

const DitherEffect = forwardRef((props, ref) => {
  const { colorNum, pixelSize, resolution } = props;
  return <WrappedDither ref={ref} colorNum={colorNum} pixelSize={pixelSize} resolution={resolution} />;
});
DitherEffect.displayName = 'DitherEffect';

function WaveScene({
  waveSpeed,
  waveFrequency,
  waveAmplitude,
  waveColor,
  colorNum,
  pixelSize,
  disableAnimation,
  enableMouseInteraction,
  mouseRadius
}) {
  const meshRef = useRef(null);
  const { size, gl } = useThree();
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  
  const uniformsRef = useRef({
    uTime: { value: 0 },
    uResolution: { value: new THREE.Vector2(size.width, size.height) },
    uWaveSpeed: { value: waveSpeed },
    uWaveFrequency: { value: waveFrequency },
    uWaveAmplitude: { value: waveAmplitude },
    uWaveColor: { value: new THREE.Color(...waveColor) },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    uEnableMouse: { value: enableMouseInteraction ? 1 : 0 },
    uMouseRadius: { value: mouseRadius }
  });

  useEffect(() => {
    uniformsRef.current.uResolution.value.set(size.width, size.height);
  }, [size]);

  useFrame((state) => {
    const u = uniformsRef.current;
    if (!disableAnimation) {
      u.uTime.value = state.clock.getElapsedTime();
    }
    u.uWaveSpeed.value = waveSpeed;
    u.uWaveFrequency.value = waveFrequency;
    u.uWaveAmplitude.value = waveAmplitude;
    u.uWaveColor.value.set(...waveColor);
    u.uEnableMouse.value = enableMouseInteraction ? 1 : 0;
    u.uMouseRadius.value = mouseRadius;
    if (enableMouseInteraction) {
      u.uMouse.value.set(mouseRef.current.x, mouseRef.current.y);
    }
  });

  const handlePointerMove = useCallback((e) => {
    if (!enableMouseInteraction) return;
    const rect = gl.domElement.getBoundingClientRect();
    mouseRef.current.x = e.clientX - rect.left;
    mouseRef.current.y = rect.height - (e.clientY - rect.top);
  }, [enableMouseInteraction, gl]);

  return (
    <>
      <mesh ref={meshRef} onPointerMove={handlePointerMove}>
        <planeGeometry args={[2, 2]} />
        <shaderMaterial
          vertexShader={waveVertexShader}
          fragmentShader={waveFragmentShader}
          uniforms={uniformsRef.current}
          depthWrite={false}
          depthTest={false}
        />
      </mesh>
      <EffectComposer>
        <DitherEffect colorNum={colorNum} pixelSize={pixelSize} resolution={new THREE.Vector2(size.width, size.height)} />
      </EffectComposer>
    </>
  );
}

export default function Dither({
  waveSpeed = 0.05,
  waveFrequency = 3,
  waveAmplitude = 0.3,
  waveColor = [0.5, 0.5, 0.5],
  colorNum = 4,
  pixelSize = 2,
  disableAnimation = false,
  enableMouseInteraction = true,
  mouseRadius = 0.3
}) {
  return (
    <Canvas
      className="dither-container"
      orthographic
      camera={{ position: [0, 0, 1], zoom: 1, near: 0, far: 2 }}
      dpr={1}
      style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0 }}
      gl={{ antialias: false, alpha: false }}
    >
      <WaveScene
        waveSpeed={waveSpeed}
        waveFrequency={waveFrequency}
        waveAmplitude={waveAmplitude}
        waveColor={waveColor}
        colorNum={colorNum}
        pixelSize={pixelSize}
        disableAnimation={disableAnimation}
        enableMouseInteraction={enableMouseInteraction}
        mouseRadius={mouseRadius}
      />
    </Canvas>
  );
}
