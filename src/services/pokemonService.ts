import type { Pokemon, PokemonDetail } from '../store/pokemon/types';

// Local catalog used for the list view. Small, deterministic, no network.
// The detail view (Feature A) should pull real data from PokeAPI.
const CATALOG: Pokemon[] = [
  { id: 1, name: 'bulbasaur', spriteColor: '#78C850', description: 'A strange seed was planted on its back at birth.' },
  { id: 4, name: 'charmander', spriteColor: '#F08030', description: 'It has a preference for hot things.' },
  { id: 7, name: 'squirtle', spriteColor: '#6890F0', description: 'It shelters itself in its shell.' },
  { id: 25, name: 'pikachu', spriteColor: '#F8D030', description: 'When it releases pent-up energy, it lets loose lightning.' },
  { id: 39, name: 'jigglypuff', spriteColor: '#EE99AC', description: 'It rolls its large eyes and sings a soothing melody.' },
  { id: 52, name: 'meowth', spriteColor: '#A8A878', description: 'It loves things that sparkle.' },
  { id: 54, name: 'psyduck', spriteColor: '#F8D030', description: 'It is constantly beset by headaches.' },
  { id: 94, name: 'gengar', spriteColor: '#705898', description: 'It hides in the shadows on moonlit nights.' },
  { id: 130, name: 'gyarados', spriteColor: '#6890F0', description: 'Once it appears, its rage never settles.' },
  { id: 133, name: 'eevee', spriteColor: '#A8A878', description: 'It has the ability to alter the composition of its body.' },
  { id: 143, name: 'snorlax', spriteColor: '#A8A878', description: 'It is not satisfied unless it eats over 880 pounds a day.' },
  { id: 150, name: 'mewtwo', spriteColor: '#F85888', description: 'A pokemon whose DNA was recombined to make it more powerful.' },
];

// Simulated latency varies by query length. This is deliberate — it lets the
// race-condition bug (see moviesSaga... err, pokemonSaga) surface visibly.
function delayFor(query: string): number {
  return 300 + (query.length % 3) * 220;
}

export function fetchPokemonList(payload: { query: string }): Promise<Pokemon[]> {
  const q = payload.query.trim().toLowerCase();
  return new Promise(resolve => {
    setTimeout(() => {
      if (!q) {
        resolve(CATALOG);
        return;
      }
      resolve(CATALOG.filter(p => p.name.includes(q)));
    }, delayFor(q));
  });
}

// Real HTTP call to PokeAPI (no key, CORS-open).
// Feature A wires this into a saga + reducer path so the detail screen can render types + stats.
export async function fetchPokemonDetail(id: number): Promise<PokemonDetail> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (!response.ok) {
    throw new Error(`PokeAPI returned ${response.status}`);
  }
  const raw = await response.json();
  return {
    id: raw.id,
    name: raw.name,
    types: (raw.types ?? []).map((t: any) => t?.type?.name).filter(Boolean),
    stats: (raw.stats ?? []).map((s: any) => ({ name: s.stat?.name ?? '', base: s.base_stat ?? 0 })),
    height: raw.height ?? 0,
    weight: raw.weight ?? 0,
  };
}

export const __CATALOG__ = CATALOG;
