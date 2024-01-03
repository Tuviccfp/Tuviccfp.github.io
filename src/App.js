import * as React from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useNavigate,
} from "react-router-dom";
import Home from "./components/Home";
import Projetos from "./components/Projetos";
import Contats from "./components/Contato";
import Articles from "./components/Article";
import ArticleID from "./components/Article/ArticleId";
import PrivateRoute from "./components/HOC";
import Coments from "./components/Article/Coments";

const links = ["home", "projetos", "artigo", "contato"];

const Layout = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const isOpen = isMenuOpen ? "open" : "";

  const onClick = (href) => {
    toggleMenu();
    navigate(href);
  };

  return (
    <>
      <button className={`burger ${isOpen}`} onClick={toggleMenu}></button>
      <div className={`background ${isOpen}`}></div>
      <div className={`menu ${isOpen}`}>
        <nav>
          {links.map((link, index) => (
            <a
              key={link}
              className={isMenuOpen ? "appear" : ""}
              style={{ animationDelay: `0.${index + 1}s` }}
              onClick={() => onClick(link)}
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
      <main className={`page ${isOpen}`}>
        <Outlet />
      </main>
    </>
  );
};

export const Menu = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="projetos" element={<Projetos />} />
          <Route path="artigo" element={<Articles />} />
          <Route path="contato" element={<Contats />} />
          <Route path="/article/:id" element={<ArticleID />} />
          <Route
            path="comments"
            element={<PrivateRoute element={<Coments />} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Menu;
