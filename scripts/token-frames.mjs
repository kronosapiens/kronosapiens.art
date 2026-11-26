// Rebuilds pact.gif and map.gif: the Ronin's Pact and Lost Temple Adventure tokens
// at each stage of play, drawn as the games' contracts draw them.
//
// The artwork is read from the Cairo sources, and the assembly below follows
// `generate_svg` (ronins-pact) and `generate_adventure_map_svg` (adventure) line by line.
// The finished stages are checked against pact.svg and map.svg, the contracts' own
// output for token 1, before anything is drawn.
//
// Usage: node scripts/token-frames.mjs <directory holding the ronins-pact and adventure repositories>
// Needs Google Chrome and ffmpeg.
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const games = process.argv[2];
const assets = path.join(import.meta.dirname, "../materials/assets");

/** The string each `fn name() -> ByteArray { "..." }` in a Cairo file returns. */
function cairoStrings(file) {
  const src = fs.readFileSync(path.join(games, file), "utf8");
  const strings = {};
  for (const m of src.matchAll(/fn (\w+)\(\) -> ByteArray \{\s*"((?:[^"\\]|\\.)*)"\s*\}/g)) {
    const escapes = new Set(m[2].match(/\\./g));
    escapes.delete('\\"');
    if (escapes.size) throw new Error(`${m[1]}: unhandled escapes ${[...escapes]}`);
    strings[m[1]] = m[2].replaceAll('\\"', '"');
  }
  return strings;
}

// ---- Ronin's Pact: contracts/src/token/svg.cairo ----

const pactArt = cairoStrings("ronins-pact/contracts/src/token/svg.cairo");

function sword(y) {
  return (
    `<g transform="translate(135, ${y})">` + pactArt.get_sword_svg +
    `<g transform="translate(175, 100)">` + pactArt.get_occlusion_svg +
    `</g><g transform="translate(520, 90)">` + pactArt.get_occlusion_svg + `</g></g>`
  );
}

function pact({ waza, chi, shin }, username) {
  let svg = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1025 1024' width='100%' height='100%'>";
  svg += pactArt.get_bg_svg;
  if (waza && chi && shin) svg += pactArt.get_yellow_glow;
  svg += pactArt.get_rack_svg;
  if (waza) svg += sword(240);
  if (chi) svg += sword(360);
  if (shin) svg += sword(480);
  svg += `<text x="512" y="780" font-family="monospace" font-size="24" fill="#ff0000" text-anchor="middle" font-weight="bold">`;
  svg += username + "</text></svg>";
  return svg;
}

// ---- The Lost Temple Adventure: contracts/src/token/{geo,svg,art}.cairo ----

const mapArt = cairoStrings("adventure/contracts/src/token/art.cairo");

// geo.cairo: sine in thousandths for 0-90 degrees.
const SIN = [
  0, 17, 35, 52, 70, 87, 105, 122, 139, 156, 174, 191, 208, 225, 242, 259, 276, 292, 309, 326,
  342, 358, 375, 391, 407, 423, 438, 454, 469, 485, 500, 515, 530, 545, 559, 574, 588, 602, 616, 629,
  643, 656, 669, 682, 695, 707, 719, 731, 743, 755, 766, 777, 788, 799, 809, 819, 829, 839, 848, 857,
  866, 875, 883, 891, 899, 906, 914, 921, 927, 934, 940, 946, 951, 956, 961, 966, 970, 974, 978, 982,
  985, 988, 990, 993, 995, 996, 998, 999, 999, 1000, 1000,
];

function sinFixed(deg) {
  const a = deg % 360;
  if (a <= 90) return SIN[a];
  if (a <= 180) return SIN[180 - a];
  if (a <= 270) return -SIN[a - 180];
  return -SIN[360 - a];
}

const cosFixed = (deg) => sinFixed((deg + 90) % 360);

function vertexPosition(vertex, total, cx, cy, radius) {
  let angle = Math.floor((360 * vertex) / total) - 90;
  if (angle < 0) angle += 360;
  // Cairo's signed division truncates toward zero, as Math.trunc does.
  const dx = Math.trunc((radius * cosFixed(angle)) / 1000);
  const dy = Math.trunc((radius * sinFixed(angle)) / 1000);
  return [cx + dx, cy + dy];
}

/** Which corner of the polygon each level sits on: the contract's shuffle, seeded by token id. */
function levelAssignments(tokenId, total) {
  const vertices = Array.from({ length: total }, (_, i) => i);
  let seed = BigInt(tokenId);
  for (let i = total - 1; i >= 1; i--) {
    seed = (1103515245n * seed + 12345n) % 2147483648n;
    const j = Number(seed % BigInt(i + 1));
    [vertices[i], vertices[j]] = [vertices[j], vertices[i]];
  }
  return vertices;
}

const levelComplete = (progress, level) => (progress & (1 << level)) !== 0;
const mapComplete = (progress, total) => progress === (1 << (total + 1)) - 2;

function waypoint(level, complete, x, y) {
  const icon = complete ? "#5a8a5a" : "#8b6f47";
  let svg = `<g transform="translate(${x},${y})">`;
  svg += `<g fill="${icon}" opacity="0.4">`;
  svg += `<svg x="-25" y="-25" width="50" height="50" viewBox="0 0 319 325">` + mapArt.get_circle_svg + "</svg></g>";
  svg += `<g fill="${icon}">`;
  svg += complete
    ? `<svg x="-18" y="-40" width="50" height="50" viewBox="0 0 62 63">` + mapArt.get_check_svg
    : `<svg x="-25" y="-40" width="50" height="50" viewBox="0 0 253 376">` + mapArt.get_question_mark_svg;
  svg += "</svg></g>";
  svg += `<g transform="translate(20, -20)">`;
  svg += `<circle r="10" fill="${complete ? "#15803d" : "#78350f"}" stroke="#fff" stroke-width="2"/>`;
  svg += `<text text-anchor="middle" y="3.5" fill="#fff" font-size="10" font-weight="bold">${level}</text></g>`;
  return svg + "</g>";
}

function map(progress, username, assignments) {
  const total = assignments.length;
  let svg = "<svg viewBox='0 0 400 500' xmlns='http://www.w3.org/2000/svg'>";
  svg += "<defs><pattern id='paper-texture' x='0' y='0' width='100' height='100' patternUnits='userSpaceOnUse'>";
  svg += "<rect width='100' height='100' fill='#fef3c7'/>";
  svg += "<circle cx='10' cy='10' r='1' fill='#d97706' opacity='0.1'/>";
  svg += "<circle cx='50' cy='50' r='1' fill='#d97706' opacity='0.1'/>";
  svg += "<circle cx='90' cy='30' r='1' fill='#d97706' opacity='0.1'/>";
  svg += "</pattern></defs>";
  svg += "<rect width='400' height='500' fill='url(#paper-texture)'/>";
  svg += "<rect x='10' y='10' width='380' height='480' fill='none' stroke='#92400e' stroke-width='3'/>";
  svg += "<g opacity='0.2'><svg x='50' y='150' width='300' height='300' viewBox='0 0 326 448'>" + mapArt.get_river_svg + "</svg></g>";
  if (mapComplete(progress, total)) {
    svg += "<svg x='120' y='-10' width='160' height='160' viewBox='0 0 160 160'>" + mapArt.get_glow_svg + "</svg>";
  }
  svg += "<g transform='translate(150, 20)'><svg width='100' height='100' viewBox='0 0 370 418'>" + mapArt.get_dojo_svg + "</svg></g>";
  const mountain = mapArt.get_mountain_svg + "</svg>";
  svg += "<svg x='20' y='10' width='150' height='150' viewBox='0 0 405 180'>" + mountain;
  svg += "<g opacity='0.2'><svg x='80' y='20' width='100' height='100' viewBox='0 0 405 180'>" + mountain + "</g>";
  svg += "<g transform='scale(-1, 1)'><svg x='-380' y='10' width='150' height='150' viewBox='0 0 405 180'>" + mountain + "</g>";
  svg += "<g transform='scale(-1, 1)' opacity='0.2'><svg x='-320' y='20' width='100' height='100' viewBox='0 0 405 180'>" + mountain + "</g>";
  svg += "<g transform='translate(330, 20)'><svg width='50' height='50' viewBox='0 0 309 385'>" + mapArt.get_compass_svg + "</svg></g>";

  const at = (level) => vertexPosition(assignments[level], total, 200, 310, 130);
  for (let level = 1; level < total; level++) {
    if (levelComplete(progress, level) && levelComplete(progress, level + 1)) {
      const [x1, y1] = at(level - 1);
      const [x2, y2] = at(level);
      svg += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#8B4513" stroke-width="3" stroke-dasharray="5,5" opacity="0.7"/>`;
    }
  }
  for (let level = 0; level < total; level++) {
    svg += waypoint(level + 1, levelComplete(progress, level + 1), ...at(level));
  }
  svg += `<text x='375' y='475' text-anchor='end' fill='#92400e' font-size='14' font-family='serif' font-style='italic'>${username}</text>`;
  return svg + "</svg>";
}

// ---- The stages of token 1, checked against the contracts' output and joined into GIFs ----

function check(drawn, file) {
  const real = fs.readFileSync(path.join(assets, file), "utf8").trimEnd();
  if (drawn === real) return;
  let i = 0;
  while (drawn[i] === real[i]) i++;
  throw new Error(`differs from ${file} at byte ${i}: drew "${drawn.slice(i, i + 60)}", real "${real.slice(i, i + 60)}"`);
}

/**
 * Renders each stage in Chrome, `scale` pixels to the unit, and joins them into a GIF:
 * 1.5 seconds a stage and 5 on the last.
 * The art is `width` by `height` units and starts `inset` units into its canvas.
 */
function gif(file, stages, { width, height, inset = 0, scale }) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "token-frames-"));
  stages.forEach((svg, i) => {
    const page = path.join(dir, `${i}.html`);
    fs.writeFileSync(
      page,
      `<!doctype html><meta charset="utf-8"><style>html,body{margin:0;overflow:hidden}` +
        `div{position:absolute;top:0;left:${-inset}px;width:${width + 2 * inset}px;height:${height}px}` +
        `svg{display:block}</style><div>${svg}</div>`,
    );
    execFileSync(
      CHROME,
      [
        "--headless",
        "--disable-gpu",
        "--hide-scrollbars",
        "--no-first-run",
        `--user-data-dir=${path.join(dir, "chrome")}`,
        `--force-device-scale-factor=${scale}`,
        `--window-size=${width},${height}`,
        `--screenshot=${path.join(dir, `${i}.png`)}`,
        `file://${page}`,
      ],
      { stdio: "ignore" },
    );
  });
  execFileSync("ffmpeg", [
    "-loglevel", "error", "-y",
    "-framerate", "2/3", "-i", path.join(dir, "%d.png"),
    "-fps_mode", "vfr",
    "-vf", "split[a][b];[a]palettegen=stats_mode=full[p];[b][p]paletteuse=dither=sierra2_4a",
    "-loop", "0", "-final_delay", "500",
    path.join(assets, file),
  ]);
  fs.rmSync(dir, { recursive: true });
  console.log(`wrote ${file}: ${stages.length} stages`);
}

const USERNAME = "kronosapiens";
const TOKEN_ID = 1;

// The contract takes the trials in any order; the vow waits a day, so it comes last.
const pactStages = [
  { waza: false, chi: false, shin: false },
  { waza: true, chi: false, shin: false },
  { waza: true, chi: true, shin: false },
  { waza: true, chi: true, shin: true },
].map((progress) => pact(progress, USERNAME));

// Level N sets bit N, and the levels are solved in order.
const assignments = levelAssignments(TOKEN_ID, 5);
const mapStages = [0, 2, 6, 14, 30, 62].map((progress) => map(progress, USERNAME, assignments));

check(pactStages.at(-1), "ronins-pact/pact.svg");
check(mapStages.at(-1), "the-lost-temple-adventure/map.svg");

// The pact's canvas is 1025 units wide and painted from 0.5 to 1024.5.
gif("ronins-pact/pact.gif", pactStages, { width: 1024, height: 1024, inset: 0.5, scale: 2 });
gif("the-lost-temple-adventure/map.gif", mapStages, { width: 400, height: 500, scale: 4 });
