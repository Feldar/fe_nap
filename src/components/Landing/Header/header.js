// CSS:
import './header.css';
import logo from 'images/22-7_Logo.png';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="header sticky-top" id="header">
    <div className="container">
      <ul className="navbar" id="lista">
        <img src={logo} alt="logo" className="logo" />
        <NavLink to="/">Home</NavLink>
        <NavLink to="/tvshows">Tv shows</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </ul>
    </div>
    <div>
    </div>
  </header>
);
export default Header;