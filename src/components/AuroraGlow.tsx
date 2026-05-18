export default function AuroraGlow() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-accent-blue/5 rounded-full blur-[120px]" />
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent-purple/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[40%] bg-accent-cyan/5 rounded-full blur-[120px]" />
    </div>
  )
}
