# For Mansii ♡

A scrapbook-style love-letter website. React + Vite, no animation libraries.

## Run it

```bash
npm install
npm run dev        # preview at http://localhost:5173
npm run build      # production files land in dist/
```

Upload `dist/` to any static host (Netlify Drop, Vercel, GitHub Pages, Cloudflare Pages).
It is built with `base: './'`, so it works from a sub-folder too. The page has `noindex`
set, so search engines won't list it.

## Add the personal parts (this is what makes it hers)

| What | Where | Edit |
| --- | --- | --- |
| Photos (chapter 04) | `public/photos/` | `src/data/photos.js` |
| Chat screenshots (chapter 05) | `public/chats/` | `src/data/chats.js` |
| Song (optional) | `public/music/song.mp3` | nothing to edit |

Until a photo or screenshot is added, its slot shows a soft pressed-flower placeholder.
In `npm run dev` the placeholder also says "your photo goes here".

### Chat screenshots — keep them private

- Replace each starting `quote` in `chats.js` with the **real words** from that screenshot.
  The lines I put there are only themes from your brief.
- Crop with `ratio` + `focus` so the contact name, number and timestamps fall outside the frame.
- Anything still visible: add a `cover` patch (washi tape) over it, e.g. `{ x: 0, y: 0, w: 100, h: 12 }`.
- Check each one on a phone before sharing the link.

### Music

Only use a song you have the rights to (your own recording, or royalty-free).
It never autoplays — she taps "a little song for you".

## Make it more yours

- `src/data/reasons.js` — the 100 reasons (keep exactly 100). Swap in inside jokes and real moments.
- Chapter text lives in each file in `src/components/`.
- Colors and fonts are at the top of `src/styles.css`.

## Easter eggs (so you know where they are)

A small flower in "little things", a note hidden behind the second photo, a paper scrap
under the letter, a tiny star in the night sky, and a sparkle in the footer.
