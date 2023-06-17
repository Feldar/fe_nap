// CSS:
import './footer.css';
import { NavLink } from 'react-router-dom';

const Footer = () => (

  <footer className="py-3">
    <div className="container">
      <div className="row">
        <div className="col-6 text-left">
          <p className="vertical-center">Nananiji Archive Project</p>
        </div>
        <div className="col-6 text-right">
          <p><NavLink to="/dashboard">Dashboard</NavLink></p>
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;