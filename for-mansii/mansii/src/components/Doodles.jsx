// Hand-drawn style SVG decorations. Everything uses currentColor / props so it can be tinted per chapter.

export const Decor = ({ speed = 0.06, rot = 0, className = '', style, live = false, children }) => (
  <div
    className={`decor ${live ? 'live' : ''} ${className}`}
    data-speed={speed}
    style={{ '--r': rot + 'deg', ...style }}
    aria-hidden={live ? undefined : true}
  >
    {children}
  </div>
)

export const Flower = ({ c1 = '#dcaab4', c2 = '#c98a95', center = '#e5c27a', leaf = '#8a9a78', size = 110, petals = 5, stem = true }) => (
  <svg viewBox="0 0 120 160" width={size} height={size * 1.33} fill="none" className="sway">
    {stem && (
      <>
        <path d="M60 78C58 110 64 135 58 158" stroke={leaf} strokeWidth="2.2" strokeLinecap="round" />
        <path d="M60 118C44 108 34 110 28 100C44 98 56 104 60 118Z" fill={leaf} opacity=".8" />
        <path d="M61 134C76 124 88 126 96 116C80 114 66 120 61 134Z" fill={leaf} opacity=".7" />
      </>
    )}
    <g transform="translate(60 52)">
      {Array.from({ length: petals }).map((_, i) => (
        <ellipse key={i} cx="0" cy="-22" rx="13" ry="24" fill={i % 2 ? c1 : c2} opacity=".84" transform={`rotate(${(i * 360) / petals})`} />
      ))}
      <circle r="9" fill={center} />
      <circle r="4" fill="#b98a3e" opacity=".5" />
    </g>
  </svg>
)

export const Sprig = ({ color = '#8a9a78', bud = '#d9a3ad', size = 130 }) => (
  <svg viewBox="0 0 100 170" width={size} height={size * 1.7} fill="none" className="sway">
    <path d="M52 168C48 130 56 90 46 40" stroke={color} strokeWidth="2" strokeLinecap="round" />
    {[
      [50, 140, -1],
      [51, 118, 1],
      [48, 96, -1],
      [50, 74, 1],
      [47, 54, -1],
    ].map(([x, y, d], i) => (
      <ellipse key={i} cx={x + d * 12} cy={y} rx="13" ry="5.5" fill={color} opacity={0.55 + (i % 3) * 0.12} transform={`rotate(${d * -28} ${x + d * 12} ${y})`} />
    ))}
    <circle cx="46" cy="34" r="6" fill={bud} opacity=".9" />
    <circle cx="36" cy="46" r="4" fill={bud} opacity=".7" />
    <circle cx="57" cy="44" r="4.5" fill={bud} opacity=".75" />
  </svg>
)

export const Butterfly = ({ c = '#b9a8d6', size = 70 }) => (
  <svg viewBox="0 0 80 70" width={size} height={size * 0.88} fill="none" className="flutter">
    <g className="wing-l">
      <path d="M40 36C28 8 6 8 8 28C9 40 28 44 40 36Z" fill={c} opacity=".8" />
      <path d="M40 38C30 52 14 62 18 48C20 42 30 38 40 38Z" fill={c} opacity=".6" />
    </g>
    <g className="wing-r">
      <path d="M40 36C52 8 74 8 72 28C71 40 52 44 40 36Z" fill={c} opacity=".8" />
      <path d="M40 38C50 52 66 62 62 48C60 42 50 38 40 38Z" fill={c} opacity=".6" />
    </g>
    <path d="M40 24V50" stroke="#5a4350" strokeWidth="2" strokeLinecap="round" />
    <path d="M40 24C37 16 34 14 32 12M40 24C43 16 46 14 48 12" stroke="#5a4350" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
)

export const Moon = ({ size = 120 }) => (
  <svg viewBox="0 0 120 120" width={size} height={size} fill="none">
    <defs>
      <radialGradient id="moonglow" cx="50%" cy="50%" r="50%">
        <stop offset="0" stopColor="#fff3d6" stopOpacity=".5" />
        <stop offset="1" stopColor="#fff3d6" stopOpacity="0" />
      </radialGradient>
      <mask id="moonmask">
        <rect width="120" height="120" fill="#fff" />
        <circle cx="76" cy="46" r="34" fill="#000" />
      </mask>
    </defs>
    <circle cx="60" cy="60" r="58" fill="url(#moonglow)" />
    <circle cx="56" cy="62" r="34" fill="#f6e7c4" mask="url(#moonmask)" />
  </svg>
)

export const Sparkle = ({ size = 22, color = '#c9a15e' }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M12 1C12.8 8 16 11.2 23 12C16 12.8 12.8 16 12 23C11.2 16 8 12.8 1 12C8 11.2 11.2 8 12 1Z" />
  </svg>
)

export const Heart = ({ size = 18, color = '#c98a95' }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill={color} style={{ display: 'inline-block', verticalAlign: '-2px' }}>
    <path d="M12 21C3 14.5 2 8.5 6 6.2C8.5 4.8 11 6 12 8.4C13 6 15.5 4.8 18 6.2C22 8.5 21 14.5 12 21Z" />
  </svg>
)

export const Clip = ({ size = 28, color = '#a9a3ad' }) => (
  <svg viewBox="0 0 24 60" width={size} height={size * 2.5} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
    <path d="M8 18V46C8 53 18 53 18 46V10C18 3 6 3 6 10V44" />
  </svg>
)

export const Cloud = ({ size = 90, color = '#f3e9f1' }) => (
  <svg viewBox="0 0 100 50" width={size} height={size / 2} fill={color} opacity=".85">
    <path d="M24 44C8 44 4 28 18 24C18 10 38 6 46 18C54 8 74 12 74 26C90 24 96 44 78 44Z" />
  </svg>
)

export const Camera = ({ size = 70, color = '#8d6e7c' }) => (
  <svg viewBox="0 0 80 60" width={size} height={size * 0.75} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 18H22L27 10H53L58 18H72V50H8Z" />
    <circle cx="40" cy="33" r="11" />
    <circle cx="40" cy="33" r="5" />
    <path d="M62 24H67" />
  </svg>
)

export const Pin = ({ size = 26 }) => (
  <svg viewBox="0 0 30 40" width={size} height={size * 1.33} fill="none">
    <ellipse cx="15" cy="30" rx="4" ry="1.6" fill="#000" opacity=".15" />
    <path d="M15 28V36" stroke="#8c8c93" strokeWidth="1.6" strokeLinecap="round" />
    <circle cx="15" cy="12" r="9" fill="#8a3a4c" />
    <circle cx="12" cy="9" r="3" fill="#fff" opacity=".35" />
  </svg>
)

export const Envelope = ({ size = 60, color = '#e9d5cf' }) => (
  <svg viewBox="0 0 80 56" width={size} height={size * 0.7} fill="none" stroke="#8d6e7c" strokeWidth="1.6" strokeLinejoin="round">
    <rect x="4" y="6" width="72" height="44" rx="2" fill={color} />
    <path d="M4 8L40 32L76 8" />
  </svg>
)

function stampPath(w, h, r = 3.6, step = 13) {
  const nx = Math.round(w / step),
    ny = Math.round(h / step),
    sx = w / nx,
    sy = h / ny
  let d = 'M0 0'
  for (let i = 0; i < nx; i++) {
    const x = i * sx
    d += `L${x + sx / 2 - r} 0A${r} ${r} 0 0 0 ${x + sx / 2 + r} 0`
  }
  d += `L${w} 0`
  for (let i = 0; i < ny; i++) {
    const y = i * sy
    d += `L${w} ${y + sy / 2 - r}A${r} ${r} 0 0 0 ${w} ${y + sy / 2 + r}`
  }
  d += `L${w} ${h}`
  for (let i = nx - 1; i >= 0; i--) {
    const x = i * sx
    d += `L${x + sx / 2 + r} ${h}A${r} ${r} 0 0 0 ${x + sx / 2 - r} ${h}`
  }
  d += `L0 ${h}`
  for (let i = ny - 1; i >= 0; i--) {
    const y = i * sy
    d += `L0 ${y + sy / 2 + r}A${r} ${r} 0 0 0 0 ${y + sy / 2 - r}`
  }
  return d + 'Z'
}

/** perforated postage-stamp frame */
export const Stamp = ({ w = 150, h = 190, fill = '#f4e6df', children, className = '' }) => (
  <div className={`stamp ${className}`} style={{ width: w, height: h }}>
    <svg viewBox={`0 0 ${w} ${h}`} width={w} height={h} className="stamp-bg">
      <path d={stampPath(w, h)} fill={fill} />
    </svg>
    <div className="stamp-in">{children}</div>
  </div>
)

export const Tape = ({ color = 'blush', style, className = '' }) => (
  <i className={`tape tape-${color} ${className}`} style={style} aria-hidden="true" />
)
