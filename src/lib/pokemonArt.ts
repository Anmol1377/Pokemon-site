/**
 * Official artwork URLs from the public PokéAPI sprite repo. These are
 * hosted on raw.githubusercontent.com which is CDN-backed, so we can hot-link
 * them directly without needing an API round-trip or proxy.
 */
export const POKEMON_ARTWORK_URL = (id: number): string =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

export interface ShowcaseMon {
  id: number;
  name: string;
  types: string[];
  /** Primary tint used for the card gradient + glow. */
  primary: string;
  /** Secondary tint for the second gradient stop. */
  secondary: string;
}

/**
 * Featured Pokémon gallery — 6 fan-favourites that span the most-loved type
 * families. Kept short so the section reads fast; the last two cards get a
 * "+ more in app" teaser overlay (handled in the FeaturedPokemon component).
 */
export const SHOWCASE: ShowcaseMon[] = [
  { id: 25,  name: "Pikachu",   types: ["Electric"],         primary: "#fad94a", secondary: "#a88306" },
  { id: 6,   name: "Charizard", types: ["Fire", "Flying"],   primary: "#ff7a52", secondary: "#7a2a10" },
  { id: 9,   name: "Blastoise", types: ["Water"],            primary: "#52a0ff", secondary: "#13345c" },
  { id: 3,   name: "Venusaur",  types: ["Grass", "Poison"],  primary: "#52d6a0", secondary: "#0f4a32" },
  { id: 150, name: "Mewtwo",    types: ["Psychic"],          primary: "#e094c2", secondary: "#4a1840" },
  { id: 151, name: "Mew",       types: ["Psychic"],          primary: "#fcb1d4", secondary: "#5a1a3c" },
];

/**
 * Auto-scrolling marquee strip showing a wider variety so the page feels
 * "full" of Pokémon. Kept separate from SHOWCASE to avoid duplicates.
 */
export const MARQUEE_MONS: { id: number; name: string }[] = [
  { id: 1,   name: "Bulbasaur" },
  { id: 4,   name: "Charmander" },
  { id: 7,   name: "Squirtle" },
  { id: 16,  name: "Pidgey" },
  { id: 19,  name: "Rattata" },
  { id: 35,  name: "Clefairy" },
  { id: 39,  name: "Jigglypuff" },
  { id: 54,  name: "Psyduck" },
  { id: 63,  name: "Abra" },
  { id: 74,  name: "Geodude" },
  { id: 81,  name: "Magnemite" },
  { id: 92,  name: "Gastly" },
  { id: 95,  name: "Onix" },
  { id: 104, name: "Cubone" },
  { id: 113, name: "Chansey" },
  { id: 122, name: "Mr. Mime" },
  { id: 128, name: "Tauros" },
  { id: 132, name: "Ditto" },
  { id: 133, name: "Eevee" },
  { id: 147, name: "Dratini" },
];

export interface EvolutionStep {
  id: number;
  name: string;
}

export interface EvolutionChain {
  family: string;
  steps: EvolutionStep[];
  /** Coin costs aligned to the game's evolutionCost(): stage 0→1 = 200, 1→2 = 500. */
  costs: number[];
  primary: string;
  secondary: string;
}

/**
 * Three canonical starter evolution chains. Costs mirror the game's
 * stage-based pricing so the landing page matches the in-game economy.
 */
export const EVOLUTION_CHAINS: EvolutionChain[] = [
  {
    family: "Grass starter",
    steps: [
      { id: 1, name: "Bulbasaur" },
      { id: 2, name: "Ivysaur" },
      { id: 3, name: "Venusaur" },
    ],
    costs: [200, 500],
    primary: "#52d6a0",
    secondary: "#0f4a32",
  },
  {
    family: "Fire starter",
    steps: [
      { id: 4, name: "Charmander" },
      { id: 5, name: "Charmeleon" },
      { id: 6, name: "Charizard" },
    ],
    costs: [200, 500],
    primary: "#ff7a52",
    secondary: "#7a2a10",
  },
  {
    family: "Water starter",
    steps: [
      { id: 7, name: "Squirtle" },
      { id: 8, name: "Wartortle" },
      { id: 9, name: "Blastoise" },
    ],
    costs: [200, 500],
    primary: "#52a0ff",
    secondary: "#13345c",
  },
];

/**
 * Sell-to-Oak rarity payout bands. Matches the in-game sellLogic.ts.
 */
export const OAK_PRICES: {
  rarity: string;
  range: string;
  color: string;
}[] = [
  { rarity: "Common",    range: "20 – 55",     color: "#e4e4e7" },
  { rarity: "Uncommon",  range: "55 – 130",    color: "#86efac" },
  { rarity: "Rare",      range: "130 – 300",   color: "#7dd3fc" },
  { rarity: "Epic",      range: "300 – 750",   color: "#d8b4fe" },
  { rarity: "Legendary", range: "750 – 2000",  color: "#fcd34d" },
];
