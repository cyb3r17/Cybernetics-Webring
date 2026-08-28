// Cybernetics Webring — member registry
// Each member: { name, url, description }
// `url` is the canonical origin (no trailing slash) used to match ?from=
// and to compute prev/next neighbors in ring order.

const MEMBERS = [
  {
    name: "sachit",
    url: "https://sachitrame.sh",
    description: "Bleh =p", // TODO: replace with a real one-liner
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
  {
    name: "praneel",
    url: "https://praneelk.tech",
    description: "プラニール — AI infra & design eng. Sites that make noise.",
  },
];

// Export for both browser (global) and any module tooling.
if (typeof module !== "undefined" && module.exports) {
  module.exports = MEMBERS;
}
