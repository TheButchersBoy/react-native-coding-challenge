export type Pokemon = {
  id: number;
  name: string;
  spriteColor: string;
  description: string;
};

export type PokemonState = {
  list: {
    data: Pokemon[];
    loading: boolean;
    error: string | null;
    query: string;
  };
  favorites: number[];
  // NOTE: this slot is intentionally empty in the starter.
  // Feature A asks the candidate to populate it via a new saga + reducer path.
  details: {
    byId: Record<number, PokemonDetail | undefined>;
    loadingId: number | null;
    error: string | null;
  };
};

export type PokemonDetail = {
  id: number;
  name: string;
  types: string[];
  stats: Array<{ name: string; base: number }>;
  height: number;
  weight: number;
};

export type SearchPokemonPayload = {
  query: string;
};

export type SearchPokemonSuccessPayload = {
  query: string;
  results: Pokemon[];
};
