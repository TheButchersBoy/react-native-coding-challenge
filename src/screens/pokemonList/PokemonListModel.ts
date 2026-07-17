import type { PokemonListScreenStrings } from '../../context/types';
import type { Pokemon } from '../../store/pokemon/types';
import { createPokemonListStyles } from './PokemonListStyle';

export interface PokemonListViewModel {
  styles: ReturnType<typeof createPokemonListStyles>;
  content: PokemonListScreenStrings;
  pokemon: Pokemon[];
  loading: boolean;
  error: string | null;
  query: string;
  onChangeQuery: (text: string) => void;
  onRetry: () => void;
  onSelectPokemon: (id: number) => void;
  onOpenFavorites: () => void;
  favoritesCount: number;
}
