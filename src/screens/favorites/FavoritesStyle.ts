import { StyleSheet } from 'react-native';

export const createFavoritesStyles = () =>
  StyleSheet.create({
    container: { flex: 1 },
    listContent: { paddingHorizontal: 16, paddingBottom: 32 },
    row: { flexDirection: 'row', alignItems: 'center', paddingVertical: 10 },
    sprite: {
      width: 36,
      height: 36,
      borderRadius: 18,
      marginRight: 12,
      alignItems: 'center',
      justifyContent: 'center',
    },
    empty: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 32 },
  });
