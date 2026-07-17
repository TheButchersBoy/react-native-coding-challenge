import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { useStringsContext } from '../../../imports';
import type { Pokemon } from '../../../store/pokemon/types';
import { typography } from '../../../ui/typography';
import { StatChipRow } from './StatChipRow';

export type InfoCardStatsProps = {
  pokemon: Pokemon;
};

// Layer 3 of the InfoCard tree.
export function InfoCardStats({ pokemon }: InfoCardStatsProps): React.JSX.Element {
  const content = useStringsContext().pokedexPlugin.screens.pokemonDetail;

  return (
    <View style={styles.section}>
      <Text style={[typography.labelLarge, styles.header]}>
        {content.typesLabel}
      </Text>
      <StatChipRow pokemon={pokemon} />
    </View>
  );
}

const styles = StyleSheet.create({
  section: { marginTop: 8 },
  header: { textTransform: 'uppercase', opacity: 0.6 },
});
