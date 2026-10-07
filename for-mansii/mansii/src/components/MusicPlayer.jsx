import { useEffect, useRef, useState } from 'react'
import { asset } from '../hooks'

// Drop a song you have the rights to use at  public/music/song.mp3
// (royalty-free / your own recording). Nothing plays until she taps the button.
const SONG = 'music/song.mp3'

export default function MusicPlayer({ visible }) {
  const audio = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [missing, setMissing] = useState(false)
  const [hint, setHint] = useState(false)

  useEffect(() => {
    const a = audio.current
    if (!a) return
    const on = () => setPlaying(true)
    const off = () => setPlaying(false)
    a.addEventListener('play', on)
    a.addEventListener('pause', off)
    a.addEventListener('error', () => setMissing(true))
    return () => {
      a.removeEventListener('play', on)
      a.removeEventListener('pause', off)
    }
  }, [])

  const toggle = async () => {
    const a = audio.current
    if (missing) {
      setHint(true)
      setTimeout(() => setHint(false), 3500)
      return
    }
    try {
      if (a.paused) await a.play()
      else a.pause()
    } catch {
      setMissing(true)
    }
  }

  return (
    <div className={`music ${visible ? 'show' : ''} ${playing ? 'playing' : ''}`}>
      <audio ref={audio} src={asset(SONG)} loop preload="none" />
      <button type="button" onClick={toggle} aria-pressed={playing} aria-label={playing ? 'Pause the song' : 'Play a little song'}>
        <span className="bars" aria-hidden="true"><i /><i /><i /></span>
        <span className="music-t">{playing ? 'a little song for you' : '♪ a little song for you'}</span>
      </button>
      {hint && <span className="music-hint">add public/music/song.mp3 to play a song</span>}
    </div>
  )
}
