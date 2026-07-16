/**
 * Fetch the five discipline icons from the Flaticon API.
 *
 * SETUP (do this yourself — do not paste the key into chat):
 *   1. Get an API key: https://api.flaticon.com  (Flaticon account -> API)
 *   2. Create .env.local in the project root containing:
 *        FLATICON_API_KEY=your_key_here
 *      .env.local is already gitignored by Next, so the key stays out of git.
 *   3. node --env-file=.env.local scripts/fetch-flaticon-icons.mjs
 *
 * The script writes SVGs to public/icons/ and prints the attribution block
 * Flaticon's free licence legally requires you to publish.
 */

const KEY = process.env.FLATICON_API_KEY;
if (!KEY) {
  console.error(
    "FLATICON_API_KEY is not set.\n" +
      "Create .env.local with FLATICON_API_KEY=... then run:\n" +
      "  node --env-file=.env.local scripts/fetch-flaticon-icons.mjs",
  );
  process.exit(1);
}

// One search term per discipline, in card order.
const WANTED = [
  { slug: "01-ai-cybersecurity", q: "artificial intelligence security" },
  { slug: "02-vulnerability-discovery", q: "vulnerability scan" },
  { slug: "03-threat-detection", q: "threat radar detection" },
  { slug: "04-reputation-defense", q: "reputation shield" },
  { slug: "05-data-security", q: "data security lock" },
];

const API = "https://api.flaticon.com/v3";

async function getToken() {
  const r = await fetch(`${API}/app/authentication`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ apikey: KEY }),
  });
  if (!r.ok) throw new Error(`auth failed: ${r.status} ${await r.text()}`);
  const j = await r.json();
  return j?.data?.token;
}

async function searchIcon(token, q) {
  const url = new URL(`${API}/search/icons/priority`);
  url.searchParams.set("q", q);
  url.searchParams.set("limit", "1");
  // "outline" keeps the set stylistically closer to a single family. Icons on
  // Flaticon come from many different authors, so this is a hint, not a promise.
  url.searchParams.set("styleShape", "outline");
  const r = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
  if (!r.ok) throw new Error(`search "${q}" failed: ${r.status} ${await r.text()}`);
  const j = await r.json();
  return j?.data?.[0];
}

async function downloadSvg(token, id) {
  // SVG download is a premium-tier format on Flaticon. On a free key this
  // returns 403 and you get PNG only — which cannot carry the gradient stroke.
  const r = await fetch(`${API}/item/icon/download/${id}?format=svg`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!r.ok) return { ok: false, status: r.status, body: await r.text() };
  return { ok: true, svg: await r.text() };
}

const { mkdir, writeFile } = await import("node:fs/promises");

const token = await getToken();
console.log("authenticated\n");
await mkdir("public/icons", { recursive: true });

const credits = [];
for (const { slug, q } of WANTED) {
  const icon = await searchIcon(token, q);
  if (!icon) {
    console.log(`  ✗ ${slug}: no result for "${q}"`);
    continue;
  }
  const res = await downloadSvg(token, icon.id);
  if (!res.ok) {
    console.log(
      `  ✗ ${slug}: SVG download refused (${res.status}) — likely a free-tier key. ` +
        `Flaticon serves SVG to premium only.`,
    );
    continue;
  }
  await writeFile(`public/icons/${slug}.svg`, res.svg);
  credits.push({ slug, id: icon.id, author: icon.author?.name, url: icon.icon_url ?? icon.url });
  console.log(`  ✓ ${slug}  <- "${icon.description ?? q}" by ${icon.author?.name}`);
}

if (credits.length) {
  console.log("\n--- ATTRIBUTION REQUIRED by Flaticon's free licence ---");
  console.log("Publish this visibly on the page using these icons:\n");
  for (const c of credits) {
    console.log(`  ${c.slug}: icon by ${c.author} from www.flaticon.com`);
  }
  console.log(
    "\nWithout a paid Flaticon licence this credit is a legal condition of use.",
  );
}
