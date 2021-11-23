import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <Nav>
      <Nav.Item>
        <Link to="/icecreams" className="nav-link">Helados</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/icecreams/create" className="nav-link">Crear Helado</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/icecreams/update" className="nav-link">Actualizar Helado</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/icecreams/delete" className="nav-link">Eliminar Helado</Link>
      </Nav.Item>
    </Nav>
  );
};

export default Menu;
