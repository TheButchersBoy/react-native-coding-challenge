import React from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Appbar, Button, Text } from 'react-native-paper';
import { typography } from '../../ui/typography';
import { InfoCard } from './components/InfoCard';
import type { PokemonDetailProps } from './PokemonDetailModel';
import usePokemonDetailViewModel from './PokemonDetailViewModel';

export function PokemonDetailView(props: PokemonDetailProps): React.JSX.Element {
  const {
    styles,
    content,
    pokemon,
    isFavorite,
    onBackPress,
    onToggleFavorite,
  } = usePokemonDetailViewModel(props);

  if (!pokemon) {
    return (
      <SafeAreaView edges={['top']} style={styles.container}>
        <Appbar.Header>
          <Appbar.BackAction onPress={onBackPress} />
          <Appbar.Content title="" />
        </Appbar.Header>
        <View style={styles.empty}>
          <Text style={typography.titleMedium}>Pokemon not found</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={onBackPress} />
        <Appbar.Content title={pokemon.name} titleStyle={{ textTransform: 'capitalize' }} />
      </Appbar.Header>
      <ScrollView contentContainerStyle={styles.body}>
        <View style={[styles.heroSprite, { backgroundColor: pokemon.spriteColor }]}>
          <Text style={[typography.displayLarge, styles.heroLetter]}>
            {pokemon.name[0].toUpperCase()}
          </Text>
        </View>

        <InfoCard pokemon={pokemon} />

        <Button
          mode={isFavorite ? 'outlined' : 'contained'}
          icon={isFavorite ? 'heart' : 'heart-outline'}
          onPress={onToggleFavorite}
          style={styles.favoriteButton}
        >
          {isFavorite ? content.removeFavorite : content.addFavorite}
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
}

export default PokemonDetailView;
