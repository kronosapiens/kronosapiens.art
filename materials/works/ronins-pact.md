# Ronin’s Pact

*2025 · Onchain game*

*Ronin’s Pact* is a website and a blockchain contract letting a player craft their own digital collectible.
It starts as a picture of an empty sword rack, with the player’s name under it.

Three trials, of technique, wisdom, and spirit, each place a sword on the rack.
The player acquires a token from another game, passes a short quiz, and takes a vow after a day of contemplation.

The picture is the record of the game, so the collectible is also the save file.
Another game can read it.

The drawings are by Alex Cohen, compressed to fit the contract.
The finished picture, drawn entirely onchain, weighs about 30 kilobytes.

Thirty-seven players started a Pact, and twenty finished.
It can be played anywhere.
One player asked to take their vow at a medieval shrine in Kyoto.

In *The Lost Temple Adventure*, the save file is a map.

[Picture](../assets/ronins-pact/pact.svg) · [Live game](https://ronin.cartridge.gg/) · [Source code](https://github.com/cartridge-gg/ronins-pact) · [Contract](https://starkscan.co/contract/0x235b9453d243abcea79c9838bfcf5dfcd3933ce23535722cffc3bf135eaa3b4)

<!--
Technical details, read from the contracts and the game repository on 2026-11-23.

Chain: Starknet mainnet.
Token contract: 0x235b9453d243abcea79c9838bfcf5dfcd3933ce23535722cffc3bf135eaa3b4 (`ronin_quest-ronin_pact` in `contracts/manifest_mainnet.json`).
Game contract: 0x2ced68eedbbb9776b25f23af3cfc5290a8a022b2eeb0f26f111c402a93adeff (`ronin_quest-actions`).
World: 0x138b3e977161e0aadf97398524d4d6ab144cb1e36d0b00db71c60d90ab8b3de (Dojo world “Ronin Quest”).
The contracts use Cairo 2.12.2 and Dojo 1.7.1, and the client is Vite and React.
38 Pacts were minted between 2025-10-27 and 2025-11-01.
Token 0 is a test, so the page counts 37 players.
20 Pacts have all three trials complete, and 9 have none.
The wait before the vow is 24 hours.
The technique trial checks for a token from Loot Survivor 2, Pistols at Dawn, or Blobert, not that the player played.
The contract draws the whole picture itself, about 30 kilobytes when complete.
The finished glow is magenta, not the gold in the spec.
The drawings were reduced in file size so the contract could be deployed.
The picture in `materials/assets/ronins-pact/pact.svg` is token 1, username kronosapiens, as the contract draws it.
-->
