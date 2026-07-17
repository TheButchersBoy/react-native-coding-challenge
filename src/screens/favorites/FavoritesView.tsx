import React from 'react';
import { FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Appbar, Divider, Text, TouchableRipple } from 'react-native-paper';
import type { Pokemon } from '../../store/pokemon/types';
import { typography } from '../../ui/typography';
import useFavoritesViewModel from './FavoritesViewModel';

export function FavoritesView(): React.JSX.Element {
  const { styles, content, favorites, onBackPress, onSelectPokemon } = useFavoritesViewModel();

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={onBackPress} />
        <Appbar.Content title={content.title} />
      </Appbar.Header>
      <FlatList<Pokemon>
        data={favorites}
        keyExtractor={item => String(item.id)}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={Divider}
        ListEmptyComponent={
          <View style={styles.empty}>
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
                <Text style={typography.labelSmall}>#{String(item.id).padStart(3, '0')}</Text>
              </View>
            </View>
          </TouchableRipple>
        )}
      />
    </SafeAreaView>
  );
}

export default FavoritesView;
