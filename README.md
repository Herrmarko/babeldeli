# Babel Deli

Design prototype for Babel Deli — Libanesisk mezebar & catering i Vasastan.

Static SPA: in-browser React + Babel standalone, no build step. Open `index.html` directly or serve the directory.

## Live demo

GitHub Pages: https://herrmarko.github.io/babeldeli/

## Pages

- Startsida — `startsida.jsx`
- Meny — `meny.jsx`
- Catering — `catering.jsx` (+ `foretagscatering.jsx`, `privatcatering.jsx`, `frukostcatering.jsx`)
- Event — `event.jsx`
- Kontakt — `kontakt.jsx`
- Order forms — `order-forms.jsx`
- Shared components — `components.jsx`

Routing is hash-based (`#meny`, `#catering`, etc).

## Stack

- React 18 (UMD)
- Babel Standalone (compiles JSX in-browser)
- Plain CSS (`styles.css`)

## Notes

Images were downsized from the original handoff bundle (~560 MB) to web-friendly sizes (~18 MB total, max 2000 px wide, JPEG q82) for faster loading.
