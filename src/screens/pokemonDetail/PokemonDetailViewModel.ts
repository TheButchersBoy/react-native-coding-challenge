import { useMemo } from 'react';
import { useStringsContext } from '../../imports';
import { useStackNavigation } from '../../navigation/NavigationViewModel';
import { useAppDispatch, useAppSelector } from '../../store';
import {
  getFavoriteIds,
  getPokemonById,
  toggleFavorite,
} from '../../store/pokemon/pokemonSlice';
import type { PokemonDetailProps, PokemonDetailViewModel } from './PokemonDetailModel';
import { createPokemonDetailStyles } from './PokemonDetailStyle';

export default function usePokemonDetailViewModel(
  props: PokemonDetailProps,
): PokemonDetailViewModel {
  const content = useStringsContext().pokedexPlugin.screens.pokemonDetail;
  const styles = useMemo(() => createPokemonDetailStyles(), []);
  const navigation = useStackNavigation();
  const dispatch = useAppDispatch();

  const pokemonId = props.route.params.pokemonId;
  const pokemon = useAppSelector(getPokemonById(pokemonId)) ?? null;
  const favorites = useAppSelector(getFavoriteIds);
  const isFavorite = favorites.includes(pokemonId);

  const onBackPress = () => navigation.goBack();
  const onToggleFavorite = () => dispatch(toggleFavorite(pokemonId));

  return {
    styles,
    content,
    pokemon,
    isFavorite,
    onBackPress,
    onToggleFavorite,
  };
}
