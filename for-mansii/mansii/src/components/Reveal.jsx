import { useInView } from '../hooks'

/** Scroll-triggered reveal. The wrapper owns rotation via --rot so cards can be tilted AND animated. */
export default function Reveal({ as: Tag = 'div', variant = 'up', delay = 0, rot = 0, className = '', style, threshold = 0.15, children, ...rest }) {
  const [ref, seen] = useInView({ threshold })
  return (
    <Tag
      ref={ref}
      className={`rv rv-${variant} ${seen ? 'in' : ''} ${className}`}
      style={{ '--d': delay + 'ms', '--rot': rot + 'deg', ...style }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export function ChapterMark({ n, title, dark = false }) {
  return (
    <Reveal className={`chapter-mark ${dark ? 'dark' : ''}`} variant="fade">
      <span>{n}</span>
      <i />
      <span>{title}</span>
    </Reveal>
  )
}
