# Space Prince

*2026, in progress · Digital game*

*Space Prince* is a game a person plays as themselves, through their birth chart: the sky at the moment they were born.
The chart is the board and the save file.
The opening picture is a sample from the [browser demo](https://space-prince.vercel.app), which generated both the chart and its sky of 151 stars.

The game treats astrology as a symbolic system.
The aim is that playing teaches a person to read their own chart, with an astrologer’s intuition for it.
Most people know their sign.
The game gives them a Sun, a Moon, a Mars.

It is a roguelike: every run is generated fresh, and the player decides without knowing what comes next.
Against another person’s chart, the player sends a planet to press or to ease, and the effect travels along the lines between that chart’s planets.
The games *FTL* and *Slay the Spire* lend the structure: a board always on screen, and a call and response where the other side shows its move first.

Hermann Hesse’s *Siddhartha* lends the journey of a man changed by each life he tries.
The player gathers Light, the game’s score, by acting in alignment with their surroundings.
In the Eleventh House, friends have reserved a pool beneath a glass reef.
A short visit with them costs 24 Light and eases the planets lit up on the player’s chart.
The player can also leave the water for the others.

The craft is in devising rules that follow astrology closely enough to teach it.
Code draws the pictures, and 720 scenes cover every pairing of house and sign.
The target for the planned blockchain version is about a dollar a run.

As in *Identity Matrix*, color and form are worked out as a system.
The chart has the finish of jewelry and still reads as a board.

Every run leaves one star in the sky above the chart, bright or dim by the Light left.
The player keeps the picture: the save file turned art object.
A dim star is a memory too.

[Preview picture](../assets/space-prince/prince-151-stars.png) · [Playable demo](https://space-prince.vercel.app) · [Website](https://spaceprince.xyz) · [Source code](https://github.com/kronosapiens/SpacePrince)

<!--
Technical details, read from the game repository and the demo on 2026-11-23.

The demo is a React, Vite, and TypeScript client that draws everything as SVG and keeps its state in the browser.
Charts come from a real ephemeris.
The game is designed for Starknet: the chart-derivation contract exists, and the game contracts do not yet.
About a dollar a run is the intended price, not a measured cost.
A run crosses up to seven maps, each generated as the player reaches it.
The 720 scenes are five for each of the 144 pairings of house and sign.
The three sample Prince NFTs come from the demo’s /token screen, which draws a made-up Prince on each load.
The gameplay stills come from `img/screenshots/encounter.webp` and `img/screenshots/eleventh-house.webp` in the game repository.
Hesse’s Siddhartha is a Brahmin’s son, not a prince, so the page says “a man”.
-->
