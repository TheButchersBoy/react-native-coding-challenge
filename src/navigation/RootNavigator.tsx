import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ROUTE_NAMES } from '../constants/routeNames';
import { FavoritesView } from '../screens/favorites/FavoritesView';
import { PokemonDetailView } from '../screens/pokemonDetail/PokemonDetailView';
import { PokemonListView } from '../screens/pokemonList/PokemonListView';
import type { RootStackParamList } from './NavigationViewModel';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ROUTE_NAMES.POKEMON_LIST}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name={ROUTE_NAMES.POKEMON_LIST} component={PokemonListView} />
        <Stack.Screen name={ROUTE_NAMES.POKEMON_DETAIL} component={PokemonDetailView} />
        <Stack.Screen name={ROUTE_NAMES.FAVORITES} component={FavoritesView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
