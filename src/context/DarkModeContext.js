import { createContext, useContext, useReducer } from "react";

const DarkModeContext = createContext();

const initialState = {
  darkMode: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "light":
      return {
        darkMode: false,
      };
    case "dark":
      return {
        darkMode: true,
      };

    case "toggle":
      return {
        darkMode: !state.darkMode,
      };

    default:
      throw new Error("Unknown action");
  }
}

function DarkModeProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined) throw new Error("DarkModeContext was use otuside DarkModeProvider");
  return context;
}

export { useDarkMode, DarkModeProvider };
