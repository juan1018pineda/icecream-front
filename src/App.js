import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
// import axios from "axios";

import IcecreamList from "./components/IcecreamList";
import Menu from "./components/Menu";
import FormCreate from "./components/FormCreate";

// import { API_URL } from "./constants";
// import { getIcecreamAxios } from "./api/icecream";
import { getIcecreamFetch } from "./api/icecream";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [icecreams, setIcecreams] = useState([]);

  useEffect(() => {
    async function fetch() {
      const data = await getIcecreamFetch();
      setIcecreams(data);
    }
    fetch();
  }, []);

  return (
    <Container>
      <Router>
        <Menu />
        <Routes>
          <Route
            path="/icecreams"
            exact
            element={<IcecreamList list={icecreams} />}
          ></Route>
          <Route
            path="/icecreams/create"
            exact
            element={<FormCreate />}
          ></Route>
          <Route
            path="/icecreams/update"
            exact
            element={<h1>Actualizar Helados</h1>}
          ></Route>
          <Route
            path="/icecreams/delete"
            exact
            element={<h1>Eliminar Helado</h1>}
          ></Route>
        </Routes>
      </Router>
      {/* <IcecreamList list={icecreams} /> */}
    </Container>
  );
}

export default App;
