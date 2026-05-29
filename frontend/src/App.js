import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Dashboard from "./Dashboard";
import Clients from "./Clients";
import Produits from "./Produits";
import Ventes from "./Ventes";
import Login from "./Login";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/clients"
          element={<Clients />}
        />

        <Route
          path="/produits"
          element={<Produits />}
        />

        <Route
          path="/ventes"
          element={<Ventes />}
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;