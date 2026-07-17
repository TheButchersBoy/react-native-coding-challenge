import { useNavigation, type NavigationProp } from '@react-navigation/native';
import { ROUTE_NAMES } from '../constants/routeNames';

export type RootStackParamList = {
  [ROUTE_NAMES.POKEMON_LIST]: undefined;
  [ROUTE_NAMES.POKEMON_DETAIL]: { pokemonId: number };
  [ROUTE_NAMES.FAVORITES]: undefined;
};

export const useStackNavigation = () => useNavigation<NavigationProp<RootStackParamList>>();
