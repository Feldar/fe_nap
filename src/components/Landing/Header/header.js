// CSS:
import './header.css';
import logo from 'images/NAP_logo.png';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="header sticky-top" id="header">
    <div className="container">
      <ul className="navbar" id="lista">
        <NavLink to="/">
        <img src={logo} alt="logo" className="logo" />
        </NavLink>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/artists">Artists</NavLink>
        <NavLink to="/characters">Characters</NavLink>
        <NavLink to="/tvshows">Tv shows</NavLink>
        <NavLink to="/albums">Albums</NavLink>
      </ul>
    </div>
    <div>
    </div>
  </header>
);
export default Header;