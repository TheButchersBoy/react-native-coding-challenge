import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Chip, Text } from 'react-native-paper';
import type { Pokemon } from '../../../store/pokemon/types';
import { typography } from '../../../ui/typography';

export type StatChipRowProps = {
  pokemon: Pokemon;
};

/**
 * Leaf component in the InfoCard tree.
 *
 *   PokemonDetailView
 *     └─ InfoCard
 *          └─ InfoCardBody
 *               └─ InfoCardStats
 *                    └─ StatChipRow   ← you are here
 *
 * FEATURE A LIVES HERE:
 * The current chip is a placeholder — replace it so the real "types" for this
 * pokemon are rendered as chips (fire, water, poison, etc). Types come from the
 * PokeAPI detail endpoint: fetchPokemonDetail(pokemon.id).
 *
 * Think about *how* the types get here from the API. The obvious path is to
 * pass them as a prop, but this component is 4 layers below the screen. Is
 * that the right shape for this codebase?
 */
export function StatChipRow({ pokemon }: StatChipRowProps): React.JSX.Element {
  return (
    <View style={styles.row}>
      <Text style={[typography.labelMedium, styles.label]}>
        #{String(pokemon.id).padStart(3, '0')}
      </Text>
      <View style={styles.chips}>
        <Chip mode="outlined" style={styles.chip}>
          types coming soon
        </Chip>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    flexWrap: 'wrap',
  },
  label: { marginRight: 8 },
  chips: { flexDirection: 'row', flexWrap: 'wrap' },
  chip: { marginRight: 6, marginBottom: 6 },
});
