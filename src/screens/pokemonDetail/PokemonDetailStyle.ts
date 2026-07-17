import { StyleSheet } from 'react-native';

export const createPokemonDetailStyles = () =>
  StyleSheet.create({
    container: { flex: 1 },
    body: { padding: 16 },
    heroSprite: {
      alignSelf: 'center',
      width: 140,
      height: 140,
      borderRadius: 70,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 20,
    },
    heroLetter: { color: '#fff' },
    empty: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 32 },
    favoriteButton: { marginTop: 24 },
  });
