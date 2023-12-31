import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { List } from "./pages/list/List";
import { New } from "./pages/new/New";
import { Single } from "./pages/single/Single";
import { userInputs, productInputs } from "./formsdata";
import "./style/darkmode.scss";
import { useDarkMode } from "./context/DarkModeContext";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const { darkMode } = useDarkMode();
  const { currentUser } = useAuthContext();

  function RequireAuth({ children }) {
    return currentUser ? children : <Navigate to="/login" />;
  }
  console.log(currentUser);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route
              index
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route path="users">
              <Route
                index
                element={
                  <RequireAuth>
                    <List />
                  </RequireAuth>
                }
              />
              <Route
                path=":userID"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <New inputs={userInputs} title="Add New User" />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="products">
              <Route
                index
                element={
                  <RequireAuth>
                    <List />
                  </RequireAuth>
                }
              />
              <Route
                path=":productID"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <New inputs={productInputs} title="Add New Product" />
                  </RequireAuth>
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
