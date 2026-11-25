import type { StaticImageData } from "next/image";
import identityMatrix from "@/materials/assets/identity-matrix/identity-matrix.jpg";
import knot from "@/materials/assets/infinite-knot/cz-knot.jpg";
import pact from "@/materials/assets/ronins-pact/pact.png";
import prince from "@/materials/assets/space-prince/prince-preview.png";
import players from "@/materials/assets/the-lost-temple-adventure/jenga-puzzle.jpg";
import map from "@/materials/assets/the-lost-temple-adventure/map.png";
import puzzle from "@/materials/assets/the-lost-temple-adventure/type-puzzle.jpg";

export type Picture = {
  image: StaticImageData;
  /** The same file under materials/assets, for code that needs its bytes. */
  file: string;
  alt: string;
};

/** The two works shown side by side at the top of the home page. */
export const hero = ["identity-matrix", "space-prince"];

/** Each work's pictures by slug. The first is the one shown on the home page. */
export const pictures: Record<string, Picture[]> = {
  "space-prince": [
    {
      image: prince,
      file: "space-prince/prince-preview.png",
      alt: "A birth chart on a black ground: seven colored planets inside a gold ring of zodiac signs, joined by red and green lines, with a field of stars above.",
    },
  ],
  "the-lost-temple-adventure": [
    {
      image: map,
      file: "the-lost-temple-adventure/map.png",
      alt: "A parchment map with a temple between mountains at the top. A dashed route joins five numbered waypoints, each checked off, and the name kronosapiens is written in the corner.",
    },
    {
      image: puzzle,
      file: "the-lost-temple-adventure/type-puzzle.jpg",
      alt: "A white cabinet against a brick wall. Pokémon cards and an apple sit on top, and a chart of Pokémon types hangs on the door beside two flyers that ask, “Can you find the Lost Temple?”",
    },
    {
      image: players,
      file: "the-lost-temple-adventure/jenga-puzzle.jpg",
      alt: "Three players standing at a purple table with a game of Jenga on it, two of them holding up phones. Their faces are pixelated.",
    },
  ],
  "ronins-pact": [
    {
      image: pact,
      file: "ronins-pact/pact.png",
      alt: "Three pale blue swords on a red sword rack, on a ground that runs from black to indigo, with the name kronosapiens beneath.",
    },
  ],
  "identity-matrix": [
    {
      image: identityMatrix,
      file: "identity-matrix/identity-matrix.jpg",
      alt: "A three-by-three grid of stenciled figures in orange, fuchsia, and teal on a white wall, between barred windows and a line of laundry.",
    },
  ],
  "infinite-knot": [
    {
      image: knot,
      file: "infinite-knot/cz-knot.jpg",
      alt: "An endless knot painted in blue bands on a yellow wall beside a door, in dim light.",
    },
  ],
};
