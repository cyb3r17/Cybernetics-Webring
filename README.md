# CYBERNETICS WEBRING

A hand-linked webring of personal sites, art projects, zines, and machines
that feel like a place. No trackers, no framework, no build step — three
static files served straight off GitHub Pages.

**Ring hub:** https://cyb3r17.github.io/Cybernetics-Webring/

## How to join

Open an issue with your **name**, **url**, and a **one-line description**:

- https://github.com/cyb3r17/Cybernetics-Webring/issues/new

Once you're added to the ring, paste the badge below onto your site so the
ring stays whole. Replace `YOURSITE` with the exact url you registered.

```html
<a href="https://cyb3r17.github.io/Cybernetics-Webring/?nav=prev&from=YOURSITE">←</a>
<a href="https://cyb3r17.github.io/Cybernetics-Webring/">CYBERNETICS WEBRING</a>
<a href="https://cyb3r17.github.io/Cybernetics-Webring/?nav=next&from=YOURSITE">→</a>
```

The hub also shows this snippet with a one-click copy button.

## How it works

| File | Role |
|------|------|
| `index.html` | The hub page — member list, join info, badge, nav bar. |
| `members.js` | The ring registry: an array of `{ name, url, description }`. |
| `nav.js`     | Reads `?nav=next\|prev\|random&from=SITE` and redirects to a neighbor. |

Navigation is entirely client-side. When a visitor hits
`…/?nav=next&from=theirsite.com`, `nav.js` finds their site in the ring and
sends them to the next one (wrapping around at the ends). `random` avoids
handing a visitor back the site they came from. The `?from=` match is
forgiving about `https://`, `www.`, trailing slashes, and case.

## Adding a member

Edit `members.js` and append an object. Order in the array **is** the ring
order (prev/next follow it), so insert intentionally:

```js
{
  name: "their handle",
  url: "https://their-site.example",   // canonical origin, no trailing slash
  description: "one line about the site.",
}
```

Commit to the default branch; GitHub Pages redeploys automatically.

## Deploying

Settings → Pages → Build and deployment → **Deploy from a branch** →
`main` / `root`. The `.nojekyll` file keeps Pages from running the files
through Jekyll. Give it a minute and the hub is live at the URL above.
