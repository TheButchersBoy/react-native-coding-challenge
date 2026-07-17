import { StyleSheet } from 'react-native';

export const createPokemonListStyles = () =>
  StyleSheet.create({
    container: { flex: 1 },
    searchBar: { paddingHorizontal: 16, paddingTop: 8, paddingBottom: 12 },
    listContent: { paddingHorizontal: 16, paddingBottom: 32 },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
    },
    sprite: {
      width: 44,
      height: 44,
      borderRadius: 22,
      marginRight: 12,
      alignItems: 'center',
      justifyContent: 'center',
    },
    id: { minWidth: 40, textAlign: 'right', marginLeft: 8 },
    center: { padding: 32, alignItems: 'center' },
  });
