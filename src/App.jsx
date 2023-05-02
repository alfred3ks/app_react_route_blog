import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./components/Inicio";
import Blog from "./components/Blog";
import AcercaDe from "./components/AcercaDe";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path={"/"} element={<Inicio />} />
            <Route path={"/blog"} element={<Blog />} />
            <Route path={"/acerca-de"} element={<AcercaDe />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
