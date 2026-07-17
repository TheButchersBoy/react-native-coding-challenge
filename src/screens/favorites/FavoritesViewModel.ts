import { useMemo } from 'react';
import { ROUTE_NAMES } from '../../constants/routeNames';
import { useStringsContext } from '../../imports';
import { useStackNavigation } from '../../navigation/NavigationViewModel';
import { useAppSelector } from '../../store';
import { getFavoriteIds, getPokemonList } from '../../store/pokemon/pokemonSlice';
import type { Pokemon } from '../../store/pokemon/types';
import type { FavoritesViewModel } from './FavoritesModel';
import { createFavoritesStyles } from './FavoritesStyle';

export default function useFavoritesViewModel(): FavoritesViewModel {
  const content = useStringsContext().pokedexPlugin.screens.favorites;
  const styles = useMemo(() => createFavoritesStyles(), []);
  const navigation = useStackNavigation();

  const favoriteIds = useAppSelector(getFavoriteIds);
  const { data } = useAppSelector(getPokemonList);

  const favorites: Pokemon[] = favoriteIds
    .map(id => data.find(p => p.id === id))
    .filter((p): p is Pokemon => !!p);

  const onBackPress = () => navigation.goBack();
  const onSelectPokemon = (id: number) =>
    navigation.navigate(ROUTE_NAMES.POKEMON_DETAIL, { pokemonId: id });

  return { styles, content, favorites, onBackPress, onSelectPokemon };
}
