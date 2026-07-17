import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import type { Pokemon } from '../../../store/pokemon/types';
import { typography } from '../../../ui/typography';
import { InfoCardBody } from './InfoCardBody';

export type InfoCardProps = {
  pokemon: Pokemon;
};

// Layer 1 of the InfoCard tree — the outer Paper Card.
export function InfoCard({ pokemon }: InfoCardProps): React.JSX.Element {
  return (
    <Card style={styles.card}>
      <View style={styles.title}>
        <Text style={[typography.headlineMedium, styles.name]}>
          {pokemon.name}
        </Text>
      </View>
      <InfoCardBody pokemon={pokemon} />
    </Card>
  );
}

const styles = StyleSheet.create({
  card: { marginTop: 12 },
  title: { paddingHorizontal: 16, paddingTop: 16 },
  name: { textTransform: 'capitalize' },
});
