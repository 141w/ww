type RAFCallback = (time: number) => void

let rafId: number | null = null
const callbacks = new Map<string, RAFCallback>()
let isRunning = false

export function registerRAF(id: string, callback: RAFCallback) {
  callbacks.set(id, callback)
  if (!isRunning) {
    isRunning = true
    startLoop()
  }
}

export function unregisterRAF(id: string) {
  callbacks.delete(id)
  if (callbacks.size === 0) {
    isRunning = false
    if (rafId !== null) {
      cancelAnimationFrame(rafId)
      rafId = null
    }
  }
}

function startLoop() {
  const loop = (time: number) => {
    for (const callback of callbacks.values()) {
      callback(time)
    }
    rafId = requestAnimationFrame(loop)
  }
  rafId = requestAnimationFrame(loop)
}
