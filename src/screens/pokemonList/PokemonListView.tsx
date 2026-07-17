import React from 'react';
import { FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ActivityIndicator,
  Appbar,
  Badge,
  Divider,
  IconButton,
  Searchbar,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import type { Pokemon } from '../../store/pokemon/types';
import { typography } from '../../ui/typography';
import usePokemonListViewModel from './PokemonListViewModel';

export function PokemonListView(): React.JSX.Element {
  const {
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
    favoritesCount,
  } = usePokemonListViewModel();

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title={content.title} />
        <View>
          <IconButton
            icon="heart"
            onPress={onOpenFavorites}
            accessibilityLabel={content.favoritesAction}
          />
          {favoritesCount > 0 && (
            <Badge style={{ position: 'absolute', top: 4, right: 4 }}>{favoritesCount}</Badge>
          )}
        </View>
      </Appbar.Header>

      <View style={styles.searchBar}>
        <Searchbar
          placeholder={content.searchPlaceholder}
          value={query}
          onChangeText={onChangeQuery}
          autoCorrect={false}
          autoCapitalize="none"
        />
      </View>

      {loading && (
        <View style={styles.center}>
          <ActivityIndicator />
        </View>
      )}

      {!!error && !loading && (
        <TouchableRipple onPress={onRetry} style={styles.center}>
          <View>
            <Text style={typography.titleMedium}>{content.errorTitle}</Text>
            <Text style={typography.bodyMedium}>{content.errorRetry}</Text>
          </View>
        </TouchableRipple>
      )}

      {!loading && !error && (
        <FlatList<Pokemon>
          data={pokemon}
          keyExtractor={item => String(item.id)}
          contentContainerStyle={styles.listContent}
          ItemSeparatorComponent={Divider}
          ListEmptyComponent={
            <View style={styles.center}>
              <Text style={typography.bodyMedium}>{content.emptyState}</Text>
            </View>
          }
          renderItem={({ item }) => (
            <TouchableRipple onPress={() => onSelectPokemon(item.id)}>
              <View style={styles.row}>
                <View style={[styles.sprite, { backgroundColor: item.spriteColor }]}>
                  <Text style={[typography.titleMedium, { color: '#fff' }]}>
                    {item.name[0].toUpperCase()}
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={[typography.titleMedium, { textTransform: 'capitalize' }]}>
                    {item.name}
                  </Text>
                </View>
                <Text style={[typography.labelMedium, styles.id]}>
                  #{String(item.id).padStart(3, '0')}
                </Text>
              </View>
            </TouchableRipple>
          )}
        />
      )}
    </SafeAreaView>
  );
}

export default PokemonListView;
