import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'motion/react'

interface TerminalEntry {
  type: 'input' | 'output' | 'error' | 'success'
  content: string
}

const COMMANDS: Record<string, string> = {
  help: `可用命令:
  help          显示此帮助信息
  ls            列出所有项目
  open <name>   滚动到指定项目 (dawn, phoenix, unsafe-miner, study-copilot)
  cat stack     显示技术栈
  whoami        显示个人简介
  contact       显示联系方式
  clear         清空终端
  theme         切换终端主题色`,
}

const PROJECT_MAP: Record<string, string> = {
  dawn: 'Dawn — AI 浏览器运行时',
  phoenix: 'Phoenix IDS — 智能入侵检测',
  'unsafe-miner': 'Rust Unsafe Ecosystem Miner — 安全静态分析',
  'study-copilot': 'Study Copilot — RAG 学习助手',
}

interface InteractiveTerminalProps {
  onCommand: (cmd: string) => void
}

export default function InteractiveTerminal({ onCommand }: InteractiveTerminalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<TerminalEntry[]>([])
  const [cmdHistory, setCmdHistory] = useState<string[]>([])
  const [historyIdx, setHistoryIdx] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const outputRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight
    }
  }, [history])

  const scrollToSection = useCallback((id: string) => {
    const el = document.querySelector(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  const processCommand = useCallback((raw: string) => {
    const trimmed = raw.trim().toLowerCase()
    if (!trimmed) return

    setCmdHistory(prev => [...prev, raw])
    setHistoryIdx(-1)
    setHistory(prev => [...prev, { type: 'input', content: raw }])

    const parts = trimmed.split(/\s+/)
    const cmd = parts[0]
    const arg = parts[1]

    switch (cmd) {
      case 'help':
        setHistory(prev => [...prev, { type: 'output', content: COMMANDS.help }])
        break

      case 'ls':
        const list = Object.entries(PROJECT_MAP)
          .map(([id, desc]) => `  ${id}/  ${desc}`)
          .join('\n')
        setHistory(prev => [...prev, { type: 'output', content: `projects/\n${list}` }])
        break

      case 'open':
        if (arg && PROJECT_MAP[arg]) {
          setHistory(prev => [...prev, { type: 'success', content: `→ opening ${arg}...` }])
          scrollToSection(`#project-${arg}`)
          onCommand(`open ${arg}`)
        } else if (arg) {
          setHistory(prev => [...prev, { type: 'error', content: `project not found: ${arg}` }])
        } else {
          setHistory(prev => [...prev, { type: 'error', content: 'usage: open <project-name>' }])
        }
        break

      case 'cat':
        if (arg === 'stack') {
          scrollToSection('#stack')
          setHistory(prev => [...prev, { type: 'output', content: '→ navigating to stack...' }])
          onCommand('cat stack')
        } else if (arg === 'about') {
          scrollToSection('#about')
          setHistory(prev => [...prev, { type: 'output', content: '→ navigating to about...' }])
          onCommand('cat about')
        } else if (arg === 'mission') {
          setHistory(prev => [...prev, { type: 'output', content: '我构建在浏览器里运行的 AI Agent——\n让安全分析、自动化和学习工具真正可用。' }])
        } else {
          setHistory(prev => [...prev, { type: 'error', content: `file not found: ${arg || '(empty)'}` }])
        }
        break

      case 'whoami':
        setHistory(prev => [...prev, { type: 'output', content: 'AI 系统构建者\n从赋予 Agent 视觉能力的浏览器运行时，\n到狩猎零日漏洞的入侵检测引擎，\n我关注延迟、可靠性，以及交付有思考能力的产品。' }])
        break

      case 'contact':
        setHistory(prev => [...prev, { type: 'output', content: 'email: wweiqi77@163.com\ngithub: https://github.com/141w' }])
        break

      case 'clear':
        setHistory([])
        break

      case 'theme':
        setHistory(prev => [...prev, { type: 'success', content: 'terminal theme toggled (visual effect only)' }])
        break

      default:
        setHistory(prev => [...prev, { type: 'error', content: `command not found: ${cmd}. type 'help' for available commands.` }])
    }
  }, [scrollToSection, onCommand])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    processCommand(input)
    setInput('')
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (cmdHistory.length > 0) {
        const newIdx = historyIdx === -1 ? cmdHistory.length - 1 : Math.max(0, historyIdx - 1)
        setHistoryIdx(newIdx)
        setInput(cmdHistory[newIdx])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIdx !== -1) {
        const newIdx = historyIdx + 1
        if (newIdx >= cmdHistory.length) {
          setHistoryIdx(-1)
          setInput('')
        } else {
          setHistoryIdx(newIdx)
          setInput(cmdHistory[newIdx])
        }
      }
    } else if (e.key === 'Tab') {
      e.preventDefault()
      const partial = input.toLowerCase()
      const allCmds = ['help', 'ls', 'open', 'cat', 'whoami', 'contact', 'clear', 'theme']
      const matches = allCmds.filter(c => c.startsWith(partial))
      if (matches.length === 1) {
        setInput(matches[0])
      }
    }
  }

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="terminal-prompt"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 200,
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          padding: '8px 14px',
          borderRadius: '6px',
          border: '1px solid var(--border)',
          background: isOpen ? 'rgba(74, 222, 128, 0.1)' : 'rgba(0,0,0,0.8)',
          fontSize: '0.75rem',
          cursor: 'pointer',
          fontFamily: 'var(--mono)',
          color: 'var(--green)',
          transition: 'all 0.2s',
          backdropFilter: 'blur(8px)',
        }}
      >
        <span style={{ fontSize: '0.875rem' }}>{isOpen ? '✕' : '>'}</span>
        {isOpen ? 'close' : 'terminal'}
      </button>

      {/* Terminal panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              bottom: '64px',
              right: '20px',
              zIndex: 200,
              width: 'min(480px, calc(100vw - 40px))',
              maxHeight: '60vh',
            }}
          >
            <div className="terminal-window" style={{ overflow: 'hidden' }}>
              <div className="terminal-bar">
                <div className="terminal-dot" style={{ background: '#ff5f57' }} />
                <div className="terminal-dot" style={{ background: '#febc2e' }} />
                <div className="terminal-dot" style={{ background: '#28c840' }} />
                <span className="terminal-comment" style={{ marginLeft: '8px', fontSize: '0.75rem' }}>
                  interactive terminal — type 'help'
                </span>
              </div>

              <div
                ref={outputRef}
                style={{
                  padding: '12px 16px',
                  maxHeight: 'calc(60vh - 80px)',
                  overflowY: 'auto',
                  fontFamily: 'var(--mono)',
                  fontSize: '0.75rem',
                  lineHeight: 1.6,
                }}
              >
                {history.length === 0 && (
                  <div className="terminal-comment" style={{ marginBottom: '8px' }}>
                    输入 'help' 查看可用命令
                  </div>
                )}

                {history.map((entry, i) => (
                  <div key={i} style={{ marginBottom: '4px' }}>
                    {entry.type === 'input' && (
                      <div>
                        <span className="terminal-prompt">$</span>{' '}
                        <span className="terminal-cmd">{entry.content}</span>
                      </div>
                    )}
                    {entry.type === 'output' && (
                      <pre
                        className="terminal-output"
                        style={{
                          margin: '4px 0 4px 16px',
                          whiteSpace: 'pre-wrap',
                          fontSize: '0.6875rem',
                        }}
                      >
                        {entry.content}
                      </pre>
                    )}
                    {entry.type === 'success' && (
                      <pre
                        style={{
                          margin: '4px 0 4px 16px',
                          whiteSpace: 'pre-wrap',
                          fontSize: '0.6875rem',
                          color: 'var(--green)',
                          fontFamily: 'var(--mono)',
                        }}
                      >
                        {entry.content}
                      </pre>
                    )}
                    {entry.type === 'error' && (
                      <pre
                        style={{
                          margin: '4px 0 4px 16px',
                          whiteSpace: 'pre-wrap',
                          fontSize: '0.6875rem',
                          color: '#f87171',
                          fontFamily: 'var(--mono)',
                        }}
                      >
                        {entry.content}
                      </pre>
                    )}
                  </div>
                ))}
              </div>

              <form
                onSubmit={handleSubmit}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '8px 16px',
                  borderTop: '1px solid var(--border)',
                  background: 'rgba(255,255,255,0.02)',
                }}
              >
                <span className="terminal-prompt" style={{ marginRight: '8px', fontSize: '0.8125rem' }}>
                  $
                </span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="terminal-cmd"
                  style={{
                    flex: 1,
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: 'var(--text-h)',
                    fontFamily: 'var(--mono)',
                    fontSize: '0.8125rem',
                    caretColor: 'var(--green)',
                  }}
                  placeholder="输入命令..."
                  autoComplete="off"
                  spellCheck={false}
                />
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
