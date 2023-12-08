import * as React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Outlet, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import Projetos from './components/Projetos';
import Contats from './components/Contato';
import AnimationBanner from './components/AnimationBanner';

const links = ['home', 'projetos', 'contato', ]

const Layout = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const isOpen = isMenuOpen ? "open" : "";

  const onClick = (href) => {
    toggleMenu();
    navigate(href);
  }

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
              style={{animationDelay: `0.${index+1}s`}}
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
  )
}

export const Menu = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={< Layout />}>
          <Route index element={<Home />} />
          <Route path='home' element={< Home />}/>
          <Route path='projetos' element={<Projetos />}/>
          <Route path='contato' element={<Contats />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

// function App() {
//   const [currentComponent, setCurrentComponent] = React.useState('Home');

//   const dataNav = [
//     'Home',
//     'Projetos',
//     'Contato'
//   ]

//   const renderComponents = () => {
//     switch (currentComponent) {
//       case 'Home':
//         return <Home />;
      
//       case 'Projetos':
//         return <Projetos />

//       case 'Contato':
//         return <Contats />
//         default: 
//         return null
//     }
//   }

//   return (
//     <div className="App">
//       <div className='main'>
//         <Nav data={dataNav} setCurrentComponent={setCurrentComponent}/>
//         {renderComponents()}
//       </div>
//     </div>
//   );
// }

export default Menu;
