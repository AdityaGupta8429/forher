import { useEffect, useRef, useState } from 'react'
import { Heart } from './Doodles'

const LINKS = [
  ['name', 'Her name'],
  ['little', 'Little things'],
  ['memories', 'Memories'],
  ['chats', 'Messages'],
  ['letter', 'Letter'],
  ['reasons', 'Reasons'],
  ['night', 'Night'],
  ['question', 'The question'],
  ['final', 'The end'],
]

export default function FloatingNav({ visible }) {
  const [open, setOpen] = useState(false)
  const box = useRef(null)

  useEffect(() => {
    if (!open) return
    const off = (e) => box.current && !box.current.contains(e.target) && setOpen(false)
    const esc = (e) => e.key === 'Escape' && setOpen(false)
    addEventListener('pointerdown', off)
    addEventListener('keydown', esc)
    return () => {
      removeEventListener('pointerdown', off)
      removeEventListener('keydown', esc)
    }
  }, [open])

  const go = (id) => {
    setOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' })
  }

  return (
    <nav ref={box} className={`fnav ${visible ? 'show' : ''} ${open ? 'open' : ''}`} aria-label="Chapters">
      <button type="button" className="fnav-btn" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-label="Open chapter menu">
        <Heart size={18} color="currentColor" />
      </button>
      <ul>
        {LINKS.map(([id, label]) => (
          <li key={id}>
            <button type="button" onClick={() => go(id)}>{label}</button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
