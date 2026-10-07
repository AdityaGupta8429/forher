import { useState } from 'react'
import { asset } from '../hooks'
import { Flower } from './Doodles'

/**
 * Lazy-loaded image with a graceful pressed-flower fallback when no file is set yet.
 * `focus` is the object-position, i.e. which part of the picture stays visible when cropped.
 */
export default function Photo({ src, alt = '', focus = '50% 50%', ratio = '4 / 5', label }) {
  const [bad, setBad] = useState(false)
  const url = asset(src)
  if (!url || bad) {
    return (
      <span className="ph" style={{ aspectRatio: ratio }}>
        <Flower size={70} />
        {import.meta.env.DEV && <small>{label || 'your photo goes here'}</small>}
      </span>
    )
  }
  return (
    <img
      src={url}
      alt={alt}
      loading="lazy"
      decoding="async"
      draggable="false"
      style={{ aspectRatio: ratio, objectPosition: focus }}
      onError={() => setBad(true)}
    />
  )
}
