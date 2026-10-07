// ─────────────────────────────────────────────────────────────
//  THE CHAT WALL — put screenshots in  public/chats/
//  then set `src`, e.g.  src: 'chats/one.png'
//
//  quote   : the line you want highlighted under the screenshot.
//            ⚠ These starting lines are just themes — replace each with the
//            REAL words from the screenshot so nothing is invented.
//  variant : 'polaroid' | 'pinned' | 'folded' | 'cutout' | 'card'
//  focus   : which part of the screenshot stays visible (crop), e.g. '50% 60%'
//  ratio   : crop shape, e.g. '4 / 5'. A tighter ratio crops away the header
//            (name / number / time) so only the meaningful messages show.
//  cover   : washi-tape patches over anything private still visible.
//            Each is { x, y, w, h } in % of the image, e.g. { x: 0, y: 0, w: 100, h: 14 }
// ─────────────────────────────────────────────────────────────
export const chats = [
  { src: null, variant: 'polaroid', ratio: '4 / 5', focus: '50% 60%', cover: [], quote: 'You are important to me.' },
  { src: null, variant: 'pinned', ratio: '1 / 1', focus: '50% 60%', cover: [], quote: 'I am always with you.' },
  { src: null, variant: 'folded', ratio: '4 / 5', focus: '50% 60%', cover: [], quote: 'I love you too.' },
  { src: null, variant: 'cutout', ratio: '5 / 4', focus: '50% 60%', cover: [], quote: 'You make me feel special.' },
  { src: null, variant: 'card', ratio: '4 / 5', focus: '50% 60%', cover: [], quote: 'I’m grateful for you.' },
]
