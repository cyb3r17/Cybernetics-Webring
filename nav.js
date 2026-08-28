// Cybernetics Webring — navigation router
// Reads ?nav=next|prev|random&from=SITE and redirects to a neighbor.
//
// Usage on the hub page:
//   <script src="members.js"></script>
//   <script src="nav.js"></script>
// If the URL carries a ?nav= param, the visitor is redirected immediately.
// Otherwise the script does nothing and the hub renders normally.

(function () {
  "use strict";

  var params = new URLSearchParams(window.location.search);
  var nav = params.get("nav");
  if (!nav) return; // no navigation requested — let the hub render

  // Normalize an origin/url for comparison: strip protocol, "www.",
  // trailing slashes, and lowercase. This makes ?from= forgiving so
  // members don't have to match the registry byte-for-byte.
  function normalize(u) {
    if (!u) return "";
    return String(u)
      .trim()
      .replace(/^https?:\/\//i, "")
      .replace(/^www\./i, "")
      .replace(/\/+$/, "")
      .toLowerCase();
  }

  var members = (typeof MEMBERS !== "undefined" && MEMBERS) || [];
  if (!members.length) return;

  var from = normalize(params.get("from"));

  // Find the index of the referring site in the ring.
  var current = -1;
  for (var i = 0; i < members.length; i++) {
    if (normalize(members[i].url) === from) {
      current = i;
      break;
    }
  }

  var n = members.length;
  var target;

  function pick(idx) {
    return members[((idx % n) + n) % n];
  }

  switch (nav) {
    case "next":
      // Unknown referrer -> start at the top of the ring.
      target = current === -1 ? pick(0) : pick(current + 1);
      break;
    case "prev":
      target = current === -1 ? pick(n - 1) : pick(current - 1);
      break;
    case "random":
      if (n === 1) {
        target = pick(0);
      } else {
        // Avoid handing the visitor back the site they came from.
        var r;
        do {
          r = Math.floor(Math.random() * n);
        } while (r === current);
        target = pick(r);
      }
      break;
    default:
      return; // unknown nav value — leave the page alone
  }

  if (target && target.url) {
    window.location.replace(target.url);
  }
})();
