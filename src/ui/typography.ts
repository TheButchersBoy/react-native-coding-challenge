import { TextStyle } from 'react-native';

// Paper 4.x has no `variant` prop on Text, so we pass these style objects
// through `style={typography.titleMedium}` instead.
export const typography: Record<string, TextStyle> = {
  displayLarge: { fontSize: 48, fontWeight: '700' },
  headlineMedium: { fontSize: 24, fontWeight: '600' },
  titleMedium: { fontSize: 16, fontWeight: '600' },
  bodyMedium: { fontSize: 14, fontWeight: '400' },
  labelLarge: { fontSize: 14, fontWeight: '500' },
  labelMedium: { fontSize: 12, fontWeight: '500' },
  labelSmall: { fontSize: 11, fontWeight: '500' },
};
