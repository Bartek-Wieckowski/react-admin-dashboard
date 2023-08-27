import { createContext, useContext, useEffect, useReducer } from "react";

const AuthContext = createContext();

const initialState = {
  currentUser: JSON.parse(localStorage.getItem("user") || null),
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return {
        currentUser: action.payload,
      };
    case "logout":
      return {
        currentUser: null,
      };
    default:
      throw new Error("Unknown action");
  }
}

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.currentUser));
  }, [state.currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser: state.currentUser, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuthContext() {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error("AuthContext was use otuside AuthProvider");
  return context;
}

export { useAuthContext, AuthProvider };
