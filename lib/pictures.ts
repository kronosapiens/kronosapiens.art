import type { StaticImageData } from "next/image";
import identityMatrix from "@/materials/assets/identity-matrix/identity-matrix.jpg";
import knotAca from "@/materials/assets/endless-knot/knot-aca.jpg";
import knot from "@/materials/assets/endless-knot/knot-caz-lg.jpg";
import knotOriginal from "@/materials/assets/endless-knot/knot-caz.jpg";
import knotUry from "@/materials/assets/endless-knot/knot-ury.jpg";
import pactGif from "@/materials/assets/ronins-pact/pact.gif";
import pact from "@/materials/assets/ronins-pact/pact.png";
import prince from "@/materials/assets/space-prince/prince-preview.png";
import players from "@/materials/assets/the-lost-temple-adventure/jenga-puzzle.jpg";
import mapGif from "@/materials/assets/the-lost-temple-adventure/map.gif";
import map from "@/materials/assets/the-lost-temple-adventure/map.png";
import puzzle from "@/materials/assets/the-lost-temple-adventure/type-puzzle.jpg";

export type Picture = {
  image: StaticImageData;
  /** The same file under materials/assets, for code that needs its bytes. */
  file: string;
  alt: string;
  /** Markdown shown beneath the picture when it is opened in a modal. */
  caption: string;
  /**
   * For a picture that moves, the still shown in its place:
   * in a link preview, and to a visitor who asks for less motion.
   */
  still?: Picture;
};

/** The two works shown side by side at the top of the home page. */
export const hero = ["identity-matrix", "space-prince"];

/** The finished tokens: each stands in for its animation, and follows it in the gallery. */
const finishedMap: Picture = {
  image: map,
  file: "the-lost-temple-adventure/map.png",
  alt: "A parchment map with a temple between mountains at the top. A dashed route joins five numbered waypoints, each checked off, and the name kronosapiens is written in the corner.",
  caption: "A finished map: all five waypoints reached, drawn by the contract.",
};

const finishedPact: Picture = {
  image: pact,
  file: "ronins-pact/pact.png",
  alt: "Three pale blue swords on a red sword rack, on a ground that runs from black to indigo, with the name kronosapiens beneath.",
  caption: "A finished Pact: all three swords on the rack, drawn by the contract.",
};

/** Each work's pictures by slug. The first is the one shown on the home page. */
export const pictures: Record<string, Picture[]> = {
  "space-prince": [
    {
      image: prince,
      file: "space-prince/prince-preview.png",
      alt: "A birth chart on a black ground: seven colored planets inside a gold ring of zodiac signs, joined by red and green lines, with a field of stars above.",
      caption: "A sample Prince NFT, generated from a random chart and game state.",
    },
  ],
  "the-lost-temple-adventure": [
    {
      image: mapGif,
      file: "the-lost-temple-adventure/map.gif",
      alt: "An animated parchment map with a temple between mountains at the top and the name kronosapiens in the corner. Five numbered waypoints are checked off one at a time, a dashed route joins each to the last, and the temple glows when all five are reached.",
      caption: "A map from start to finish, drawn by the contract: each waypoint reached adds to the route.",
      still: finishedMap,
    },
    finishedMap,
    {
      image: puzzle,
      file: "the-lost-temple-adventure/type-puzzle.jpg",
      alt: "A white cabinet against a brick wall. Pokémon cards and an apple sit on top, and a chart of Pokémon types hangs on the door beside two flyers that ask, “Can you find the Lost Temple?”",
      caption: "One of the three puzzles in the venue: Pokémon cards and a chart of types, beside the flyers that started the hunt. To solve the puzzle, players had to use the type chart to rank the cards in order of strength, with the codeword being the type of the strongest card: FIGHTING.",
    },
    {
      image: players,
      file: "the-lost-temple-adventure/jenga-puzzle.jpg",
      alt: "Three players standing at a purple table with a game of Jenga on it, two of them holding up phones. Their faces are pixelated.",
      caption: "Three friends who finished the adventure together, at the last of the three puzzles: a game of Jenga against someone nearby. The winner asked the hub organizer for the codeword: COLLAPSE.",
    },
  ],
  "ronins-pact": [
    {
      image: pactGif,
      file: "ronins-pact/pact.gif",
      alt: "An animated picture of a red sword rack on a ground that runs from black to indigo, with the name kronosapiens beneath. Three pale blue swords appear on it one at a time, and the base of the rack glows magenta once the third is in place.",
      caption: "A Pact from start to finish, drawn by the contract: each trial places a sword on the rack.",
      still: finishedPact,
    },
    finishedPact,
  ],
  "identity-matrix": [
    {
      image: identityMatrix,
      file: "identity-matrix/identity-matrix.jpg",
      alt: "A three-by-three grid of stenciled figures in orange, fuchsia, and teal on a white wall, between barred windows and a line of laundry.",
      caption: "The wall of a shared rooftop in Jaffa, 2019.",
    },
  ],
  "endless-knot": [
    {
      image: knot,
      file: "endless-knot/knot-caz-lg.jpg",
      alt: "An AI-enhanced photograph of an endless knot painted in blue bands on a yellow wall beside a door, in dim light.",
      caption: "The first knot, painted at [Casa Zimbabwe](https://en.wikipedia.org/wiki/Casa_Zimbabwe) in Fall 2009. This picture is an AI enhancement of the original photograph, which is in the gallery.",
    },
    {
      image: knotOriginal,
      file: "endless-knot/knot-caz.jpg",
      alt: "The original, unenhanced photograph of the blue endless knot on a yellow wall beside a door, darker and less sharp.",
      caption: "Original photograph of the Casa Zimbabwe knot, taken Fall 2009.",
    },
    {
      image: knotAca,
      file: "endless-knot/knot-aca.jpg",
      alt: "A person in a black coat and patterned tie stands in a co-op kitchen set with trays of empanadas. A small blue endless knot is painted high on the wall behind them. Their face is pixelated.",
      caption: "Special Dinner at the [Andres Castro Arms](https://www.youtube.com/watch?v=--B0uBXskZ0) co-op, Spring 2011. The endless knot is visible above the kitchen entryway.",
    },
    {
      image: knotUry,
      file: "endless-knot/knot-ury.jpg",
      alt: "Two people crouch at a white brick wall beside some steps, painting an endless knot in green.",
      caption: "A knot from the same years, painted outside the co-ops: at a school in Montevideo, Uruguay, in January 2011. It was made with Nicholas, a local boy, during a day of mural painting on a winter service trip.",
    },
  ],
};
