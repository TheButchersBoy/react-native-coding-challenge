import type { PokemonDetailScreenStrings } from '../../context/types';
import type { Pokemon } from '../../store/pokemon/types';
import { createPokemonDetailStyles } from './PokemonDetailStyle';

export interface PokemonDetailProps {
  route: {
    params: {
      pokemonId: number;
    };
  };
}

export interface PokemonDetailViewModel {
  styles: ReturnType<typeof createPokemonDetailStyles>;
  content: PokemonDetailScreenStrings;
  pokemon: Pokemon | null;
  isFavorite: boolean;
  onBackPress: () => void;
  onToggleFavorite: () => void;
}
