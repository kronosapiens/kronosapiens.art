# The Lost Temple Adventure

*2025 · Onchain game and in-person treasure hunt*

*The Lost Temple Adventure* is a treasure hunt that ran for a week at the [Devconnect](https://devconnect.org/) conference in Buenos Aires.
Flyers asked, “Can you find the Lost Temple?”
Scanning one put a map on the player’s phone, with five waypoints below a temple.

Two waypoints led to games by other makers.
The other three sent players looking for a Super Nintendo, Pokémon cards, and someone to play Jenga with.
At the Jenga table, the winner asked the organizer for the codeword, COLLAPSE.

Each solution drew another stretch of the route.
The map doubled as the save file, so when the hunt was over, players kept a picture of the route they had taken.

The design draws on treasure hunts by [Social Dist0rtion Protocol](https://www.dist0rtion.com/) and [Daedalus Industries](https://daedalus.industries/).
A blockchain contract draws the map from [Alex Cohen](https://studiomacon.co/)’s artwork, shuffling the waypoints for each player.

Of 106 players who started a map, 26 solved a puzzle and 4 reached the temple.

In *Space Prince*, the save file becomes a sky full of stars.

[Map](../assets/the-lost-temple-adventure/map.svg) · [Puzzle](../assets/the-lost-temple-adventure/type-puzzle.jpg) · [Players](../assets/the-lost-temple-adventure/jenga-puzzle.jpg) · [Live game](https://adventure.cartridge.gg/) · [Source code](https://github.com/cartridge-gg/adventure) · [Gameplay video](https://www.dropbox.com/scl/fi/13p1rf6j225kacf64u5ed/Lost_Temple_demo.MOV?rlkey=5hdq7lfprevt3ibux014hhujc&dl=0) · [Retrospective](https://github.com/cartridge-gg/adventure/blob/main/retro/RETRO.md) · [Contract](https://starkscan.co/contract/0x1aec82a183d97504e8ee6c3cf1f7c3f7b9aad291b5f467df33441493884ac4b)

<!--
Technical details, read from the contracts, the mint data, and the retrospective on 2026-11-23.

Chain: Starknet mainnet.
Map contract: 0x1aec82a183d97504e8ee6c3cf1f7c3f7b9aad291b5f467df33441493884ac4b (`adventure-adventure_map` in `contracts/manifest_mainnet.json`).
Game contract: 0x62595f9d17d45c0aface59491e692ce07eabaf77f4ec99ba9962b556da04d0d (`adventure-actions`).
World: 0x21c812d1851c3d0ac07a8537d6e9ca300eae5762ad4c34fa42110bdfc501642 (Dojo world “Adventure”).
The contracts use Cairo 2.12.2 and Dojo 1.8.0, and the client is Vite and React.
118 maps were minted between 2025-11-18 and 2025-11-24 (`retro/nft_data.csv`).
The retrospective sets aside 12 as tests or as minted outside the game window, leaving 106.
Six maps reached the temple; the 4 on the page leave out the artist’s own map and a teammate’s.
There were five levels, solved in order: three puzzles in the venue, and two onchain games, Nums and Loot Survivor 2.
The first level is the Super Nintendo puzzle.
The five waypoints sit on the corners of a pentagon, and each map shuffles which level goes on which corner.
The shuffle reaches 60 orderings, so the page says the waypoints are shuffled, not that every map differs.
The stored drawings are about 45 kilobytes and a finished map is about 100, because the contract draws some of them more than once.
The map in `materials/assets/the-lost-temple-adventure/map.svg` is token 1, username kronosapiens, with all five levels complete.
It was taken from the game’s leaderboard page, which shows each map as the contract returns it, because Starkscan refuses a result that large.
`type-puzzle.jpg` is a copy from the game repository’s `retro/` folder with its Exif data removed, and `jenga-puzzle.jpg` has its faces pixelated.
-->
