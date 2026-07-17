import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { useStringsContext } from '../../../imports';
import type { Pokemon } from '../../../store/pokemon/types';
import { typography } from '../../../ui/typography';
import { InfoCardStats } from './InfoCardStats';

export type InfoCardBodyProps = {
  pokemon: Pokemon;
};

// Layer 2 of the InfoCard tree.
export function InfoCardBody({ pokemon }: InfoCardBodyProps): React.JSX.Element {
  const content = useStringsContext().pokedexPlugin.screens.pokemonDetail;

  return (
    <View style={styles.container}>
      <Text style={[typography.labelLarge, styles.header]}>
        {content.overviewLabel}
      </Text>
      <Text style={[typography.bodyMedium, styles.description]}>
        {pokemon.description}
      </Text>
      <InfoCardStats pokemon={pokemon} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 16, paddingBottom: 16 },
  header: { textTransform: 'uppercase', opacity: 0.6 },
  description: { marginTop: 4 },
});
