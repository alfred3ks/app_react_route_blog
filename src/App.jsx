import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Inicio from "./components/Inicio";
import Blog from "./components/Blog";
import AcercaDe from "./components/AcercaDe";
import styled from "styled-components";
import Post from "./components/Post";
import Error404 from "./components/Error404";

const App = () => {
  return (
    <BrowserRouter>
      <ContenedorPrincipal>
        <Header />
        <Main>
          <Routes>
            <Route path={"/app_react_route_blog/inicio"} element={<Inicio />} />
            <Route path={"/blog"} element={<Blog />} />
            <Route path={"/post/:id"} element={<Post />} />
            <Route path={"*"} element={<Error404 />} />
            <Route path={"/acerca-de"} element={<AcercaDe />} />
          </Routes>
        </Main>
      </ContenedorPrincipal>
    </BrowserRouter>
  );
};

// Aqui creamos nuestros componentes con styled components:
const ContenedorPrincipal = styled.div`
  width: 90%;
  max-width: 700px;
  padding: 40px;
`;

const Main = styled.main`
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

export default App;
