# Personal website — Duy Nguyen

A static, no-build personal academic site. Styled to match
[datvo06.github.io](https://datvo06.github.io/) exactly: same stylesheet, same
typography, same component markup.

## Files

```
index.html              all page content
assets/css/main.css     vendored from the reference site (al-folio theme, MIT) — do not edit
assets/css/extra.css    the only site-specific CSS; overrides nothing in the base theme
assets/js/theme.js      light/dark switch, adapted from al-folio
assets/js/common.js     theme toggle wiring, photo fallback, navbar collapse, footer year
assets/img/profile.png  portrait
assets/img/*.png        project cover figures
assets/DuyNguyen_CV.pdf linked as "Resume" in the nav
```

Bootstrap 4.6.1, MDBootstrap, Font Awesome 5, Academicons and the IBM Plex
fonts load from jsDelivr / Google Fonts, exactly as the reference site loads
them. **The page needs network access to look right** — opened offline it falls
back to system fonts and loses the icons.

## Preview

```sh
cd ~/Documents/Projects/personal-website
python3 -m http.server 8000
# http://localhost:8000
```

## Editing

**Portrait** — `assets/img/profile.png`. Replace the file to change it; it is
cropped to a circle, so keep it square.

**Project thumbnails** — all four are real figures now. Any aspect ratio works;
the cell is 35% wide and the image scales to fit. Source images are downscaled
to 1200px wide before being committed — the originals were 16–21MB each, far too
large to serve.

**Adding a project** — new entries go at the *top* of the project table, so the
latest work leads.

**News** — add a `<li class="news-item">` at the top of `<ol class="news-list">`.
The list scrolls internally past ~22rem, which is the reference's behaviour.
Icon classes in use: `fa-file-alt` (preprint), `fa-briefcase` (role),
`fa-bookmark` (accepted), `fa-award` (award), `fa-graduation-cap` (degree),
`fa-chalkboard-teacher` (talk).

**Publications** — add an `<li>` to `<ol class="bibliography">`. The venue badge
is `<span class="bib-venue"><abbr>TMLR '25</abbr></span>`; wrap your own name in
`<em>` inside `.bib-author` to get the underline treatment.

**Colors** — the palette lives in the `:root` block at the top of
`assets/css/main.css` (`--global-theme-color` is the `#1e3a8a` blue).

## Deploying to GitHub Pages

```sh
git init && git add -A && git commit -m "Personal website"
git branch -M main
git remote add origin git@github.com:Duy-Nguyen-Duc/Duy-Nguyen-Duc.github.io.git
git push -u origin main
```

Enable Pages on `main` in the repo settings; the site lands at
`https://duy-nguyen-duc.github.io/`.

## To verify before publishing

- The CAIR link (`https://cair.vinuni.edu.vn/`)
- News dates — the ICLR submission date (Sep 24, 2026) and the TMLR acceptance
  month were inferred, not taken from the CV
- The VirDA OpenReview and GitHub links were taken from your co-author's site
- The R2A code link is an anonymous-preprint URL; swap it for the real repo
  once the paper is de-anonymized

## Attribution

`assets/css/main.css` is the compiled stylesheet of the
[al-folio](https://github.com/alshedivat/al-folio) Jekyll theme (MIT License),
as customized on datvo06.github.io, vendored verbatim so the two sites match.
