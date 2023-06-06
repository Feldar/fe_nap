// CSS:
import './header.css';
import logo from 'images/22-7_Logo.png';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="header fixed-top" id="header">
    <div className="container">

      <ul className="navbar" id="lista">
        <img src={logo} alt="logo" className="logo" />
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <NavLink to="/dashboard/recipes">
          Recipes
        </NavLink>
        <a href="#contact">Contacto</a>
      </ul>
    </div>
    <div>
    </div>
  </header>
);
export default Header;