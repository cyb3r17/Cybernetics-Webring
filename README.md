# CYBERNETICS WEBRING

A webring for artists, electronic musicians, and engineers.

**Hub:** https://cyb3r17.github.io/Cybernetics-Webring/

## Join

Some criteria for joining the webring:
- all websites MUST be personal websites!
- no illegal, nsfw, or gory content is allowed
- proof of building cool shit (music, software, electronics, art, etc) on your website!
- be 16+ (there's no way to enforce this but yeah)
- be interesting! (subjective, admitted at maintainer discretion)
- no overt politics/activism content (we're trying to maintain a curated list of creators, there's plenty of other webrings for this!)
- site must be actively maintained (updated within the last year or so)


Open an [issue](https://github.com/cyb3r17/Cybernetics-Webring/issues/new), or PR yourself into `members.js`:

```js
{ name: "handle", url: "https://your-site", description: "one line." }
```

## Badge

```html
<a href="https://cyb3r17.github.io/Cybernetics-Webring/?nav=prev&from=YOURSITE">←</a>
<a href="https://cyb3r17.github.io/Cybernetics-Webring/">CYBERNETICS WEBRING</a>
<a href="https://cyb3r17.github.io/Cybernetics-Webring/?nav=next&from=YOURSITE">→</a>
```

## Files

- `index.html` : hub
- `members.js` : the ring, in order
- `nav.js` : `?nav=next|prev|random&from=` routing
