# Design

Pen (pen.dev) is the design tool for the site.
`design.lib.pen`, at the repo root, mirrors the site's tokens and components; the code remains the source of truth.
A `.pen` file is JSON, so `git diff design.lib.pen` shows a design change.

The CLI (`@pen.dev/cli`, a dev dependency, run as `pnpm exec pen`) edits `.pen` files and exports them as images.
It runs as the pen.dev account `pnpm exec pen status` shows.
The skill at `.claude/skills/pen-design/SKILL.md` is copied verbatim from the package and covers prompt-driven generation only; refresh it by re-copying `node_modules/@pen.dev/cli/SKILL.md` when the CLI version changes.

## The library

The library holds components, not pages.
Its text is placeholder, except the site's name and "About", so no text from `materials/` lives in a design file.
A change to a mirrored token or component updates the library in the same commit.

Variables mirror the custom properties of `app/globals.css` by name: the property minus `--`, referenced as `$name`.
`large`, `gutter` and `measure` hold the value they take in a 1440px window.
Pen has no variable aliasing, so `link` holds a literal colour for every work, and follows `line` by hand in a block that leaves `--link` unset.

The per-work colours are the `work` theme.
Its values are the `data-work` slugs that set colours in `globals.css`, and `default` for the plain `:root`.
A frame carrying `theme: { work: "ronins-pact" }` draws its contents in that work's colours.

A reusable component is named after the code it mirrors, and its `context` field names the file.

| Component | Mirrors |
|---|---|
| `site-header`, `site-footer` | the markup in `app/layout.tsx`, styled in `app/globals.css` |
| `Meta` | `components/Meta.tsx` |
| `Picture` | `components/Picture.tsx` |
| `Link` | the `a` rule in `app/globals.css` |
| `Label` | the `Label` function in `components/Work.tsx` |
| `Prose` | the `.prose` rule in `app/globals.css` |

The `Components` frame holds the definitions, and the `Works` frame shows a header, a label and prose in each work's colours.

Width and height take literal numbers.
The editor refuses a variable reference there without an error, so `site-header` is 56 high and `Prose` 680 wide as literals.

## Pages

The site's pages are drawn in `design.pen`, at the repo root.
It is a local working file that git ignores, and it imports the library:

```json
{ "version": "2.25", "children": [], "imports": { "lib": "design.lib.pen" } }
```

The `version` is the library's, and the import path is relative to the page file.
In a page file a library component is `ref: "lib:<id>"`, a variable is `$lib:<name>`, and a work's colours are `theme: { "lib:work": "<slug>" }`.
An unprefixed `work` there is ignored without an error.

Each page is a frame named by its route, drawn as the site renders in a 1440×900 window; narrower widths are checked in the running site.
A page is instances of the library's components, with plain frames and text only where the code has plain markup.
Its text and pictures are the site's own, copied when the page was drawn.
A change to a component's structure in the library changes the ids that instance overrides are keyed by, so a page's overrides on that component are re-keyed after one.

## Design to code

Open the file in the Pen app (`open -a Pen design.lib.pen`), edit, and save.
Claude Code reads the diff and applies it: a variable change to `app/globals.css`, anything else to the components and their CSS.
Both sides are committed together.

- The change reaches the code through Claude Code, not the Pen app's chat, which doesn't know this repo.
- One editor at a time.
  The app neither watches the file for outside changes nor saves automatically, so a save from an open window overwrites a CLI run.
  Before a CLI run, save and close the file in the app; `open -a Pen` on a file that is already open only brings its window forward.
- The pencil MCP tools edit the app's open document, not the file, so tracked edits go through the CLI.

## Code to design

Scripted edits go through `pen interactive`, which reads one command per line on standard input:

```bash
pnpm exec pen interactive --in design.lib.pen --out design.lib.pen < commands.txt
```

A command file is `execute({"input": "<script>"})` lines, then `save()` and `exit()`.
The script API and the node schema are documented in the package, in `node_modules/@pen.dev/cli/dist/out/skills/pen-dev/execute.md` and `pen-schema.md`.
Give the run a time limit; macOS has no `timeout` command.

- `Export(["<node-id>"], "png", "<dir>", { scale: 1 })` exports a frame.
  It takes node ids only, so `pen interactive` has no whole-file export.
- Export before reading sizes or saving, since text is first measured before its font loads.
- Edits and `Export` go in separate `execute` calls: an export in the same call as an insert draws all text at zero height.
- A function defined in one `execute` call isn't available in the next.
- A document-wide `Get` on a page file also visits the library's nodes, whose ids contain `:`; skip them.
- After a save, read the JSON back and compare it with what was meant, since a refused write is silent.
- A save with no change leaves the file byte for byte.
- Compare the export with the running site (`pnpm dev`) in a 1440px window, by eye; a pixel or two is accepted.

## What Pen draws differently

- No inline text runs: a link or italics inside a paragraph isn't drawn.
- No text decoration: `underline: true` is in the schema but dropped on insert (CLI 0.3.18).
  The `Link` component draws its underline as a 1px rectangle filled `$link`, in a frame of zero height pulled up under the text by a negative `gap`.
- No margins: a margin in the code is padding on the frame that owns it.
- No interaction states: the header's links, underlined on hover, are drawn plain.
- Line height rounds to a whole pixel, so a text block runs about half a pixel per line taller than in Chrome.
- Text renders lighter than in Chrome at the same weight.
- Numbers are unit-free, and `fontWeight` is a string.
- An image fill's `url` is relative to the `.pen` file and is saved without a leading `./`.
- An SVG doesn't render as an image fill; JPG and PNG do.
- Text copied from a page's `textContent` carries the markdown's line breaks, which Pen draws; collapse the whitespace first.
- The CLI adds a `fileToken` field on a file's first save.
- The "Collapsed size" warning on `Link` and each of its instances is false: it renders at the width of its text.
