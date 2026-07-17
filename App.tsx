import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppContextProvider } from './src/context/AppContext';
import { RootNavigator } from './src/navigation/RootNavigator';
import { store } from './src/store';

export default function App(): React.JSX.Element {
  return (
    <ReduxProvider store={store}>
      <PaperProvider theme={DefaultTheme}>
        <AppContextProvider>
          <SafeAreaProvider>
            <RootNavigator />
          </SafeAreaProvider>
        </AppContextProvider>
      </PaperProvider>
    </ReduxProvider>
  );
}
