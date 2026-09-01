// Cybernetics Webring — member registry
// Each member: { name, url, description }
// `url` is the canonical origin (no trailing slash) used to match ?from=
// and to compute prev/next neighbors in ring order.

const MEMBERS = [
  {
    name: "sachit",
    url: "https://sachitrame.sh",
    description: "world's best computer vision engineer =p", // TODO: replace with a real one-liner
  },
  {
    name: "lena",
    url: "https://lenaphobic.tech",
    description: "personal site on a fake desktop (silicon inside)", 
  },
  {
    name: "pradheep",
    url: "https://www.pradheep.dev",
    description: "CS undergrad, curious by default.",
  },
 /* {
    name: "praneel",
    url: "https://praneelk.tech",
    description: "プラニール — AI infra & design eng. Sites that make noise.",
  }, webring broken because of no wdiget!!*/
  {
    name: "haley",
    url: "https://haleyher.github.io/haleyher-website/",
    description: "cassette-themed personal website.",
  },
  {
    name: "john",
    url: "https://johntanaristy.com/",
    description: "personal site :)",
  },
];

// Export for both browser (global) and any module tooling.
if (typeof module !== "undefined" && module.exports) {
  module.exports = MEMBERS;
}
