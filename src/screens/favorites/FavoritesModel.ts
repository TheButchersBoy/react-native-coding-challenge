import type { FavoritesScreenStrings } from '../../context/types';
import type { Pokemon } from '../../store/pokemon/types';
import { createFavoritesStyles } from './FavoritesStyle';

export interface FavoritesViewModel {
  styles: ReturnType<typeof createFavoritesStyles>;
  content: FavoritesScreenStrings;
  favorites: Pokemon[];
  onBackPress: () => void;
  onSelectPokemon: (id: number) => void;
}
