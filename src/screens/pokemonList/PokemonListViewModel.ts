import { useEffect, useMemo, useState } from 'react';
import { ROUTE_NAMES } from '../../constants/routeNames';
import { useStringsContext } from '../../imports';
import { useStackNavigation } from '../../navigation/NavigationViewModel';
import { useAppDispatch, useAppSelector } from '../../store';
import {
  getFavoriteIds,
  getPokemonList,
  searchPokemonRequest,
} from '../../store/pokemon/pokemonSlice';
import type { PokemonListViewModel } from './PokemonListModel';
import { createPokemonListStyles } from './PokemonListStyle';

const DEBOUNCE_MS = 220;

export default function usePokemonListViewModel(): PokemonListViewModel {
  const content = useStringsContext().pokedexPlugin.screens.pokemonList;
  const styles = useMemo(() => createPokemonListStyles(), []);

  const dispatch = useAppDispatch();
  const navigation = useStackNavigation();
  const { data, loading, error } = useAppSelector(getPokemonList);
  const favoriteIds = useAppSelector(getFavoriteIds);

  const [query, setQuery] = useState('');

  useEffect(() => {
    dispatch(searchPokemonRequest({ query: '' }));
  }, [dispatch]);

  // Debounced search — fires the request some time after typing stops.
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(searchPokemonRequest({ query }));
    }, DEBOUNCE_MS);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const onChangeQuery = (text: string) => setQuery(text);
  const onRetry = () => dispatch(searchPokemonRequest({ query }));

  const onSelectPokemon = (id: number) =>
    navigation.navigate(ROUTE_NAMES.POKEMON_DETAIL, { pokemonId: id });

  const onOpenFavorites = () => navigation.navigate(ROUTE_NAMES.FAVORITES);

  const pokemon = data.slice().sort((a, b) => a.id - b.id);

  return {
    styles,
    content,
    pokemon,
    loading,
    error,
    query,
    onChangeQuery,
    onRetry,
    onSelectPokemon,
    onOpenFavorites,
    favoritesCount: favoriteIds.length,
  };
}
