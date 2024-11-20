import React from "react";
import { database } from "../../utils/faker-db-generation";
import { AppContext } from "./AppContext";
import { appReducer } from "./appReducer";

export function AppProvider({ children }) {
  const [appState, dispatch] = React.useReducer(appReducer, { ...database });

  return (
    <AppContext.Provider
      value={{
        appState,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
