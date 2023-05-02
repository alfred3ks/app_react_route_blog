import { NavLink } from "react-router-dom";
import styled from "styled-components";
styled;

const Header = () => {
  return (
    <ContenedorHeader>
      <Titulo>Mi blog personal!</Titulo>
      <Menu>
        <NavLink to={"app_react_route_blog/inicio"}>Inicio</NavLink>
        <NavLink to={"blog"}>Blog</NavLink>
        <NavLink to={"acerca-de"}>Acerca de</NavLink>
      </Menu>
    </ContenedorHeader>
  );
};

// Aqui creamos los estilos para el header:
const ContenedorHeader = styled.header`
  text-align: center;
  margin-bottom: 40px;
`;

const Titulo = styled.h1`
  margin-bottom: 10px;
  font-size: 26px;
  text-transform: uppercase;
`;

const Menu = styled.nav`
  a {
    text-decoration: none;
    color: #165168;
    margin: 0 10px;
  }

  a:hover {
    color: #191688;
  }

  a.active {
    border-bottom: 2px solid #165168;
    padding-bottom: 3px;
  }
`;

export default Header;
