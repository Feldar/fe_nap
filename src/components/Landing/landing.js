import Header from './Header/header';
import Home from './Home/home';
import About from './About/about';
import Footer from './Footer/footer';
import Contacto from './Contacto/contacto';

import useTvshows from 'hooks/useTvshows';

const Landing = function () {
  // JSX:
  return (
    <main>
      <Home></Home>
      <About></About>
      <Contacto></Contacto>
      <Footer></Footer>

    </main>

  );
};
export default Landing;
