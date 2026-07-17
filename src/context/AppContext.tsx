import React, { createContext, useContext } from 'react';
import { defaultStrings } from './strings';
import type { Strings } from './types';

type AppContextValue = {
  strings: Strings;
};

const AppContext = createContext<AppContextValue>({ strings: defaultStrings });

export function AppContextProvider({ children }: { children: React.ReactNode }): React.JSX.Element {
  return <AppContext.Provider value={{ strings: defaultStrings }}>{children}</AppContext.Provider>;
}

export const useStringsContext = () => useContext(AppContext).strings;
