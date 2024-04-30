import React, { createContext, useReducer } from 'react';
import { settings } from './reducers/settings';
import { settingsInitState } from './initStates/settingsInitState';

export const GlobalContext = createContext({});

const GlobalContextProvider = ({ children }) => {
  const [settingsState, settingsDispatch] = useReducer(
    settings,
    settingsInitState
  );

  return (
    <GlobalContext.Provider
      value={{
        settingsState,
        settingsDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
