import Home from './Home/home';
import About from './About/about';
import Header from './Header/header';
import Contacto from './Contacto/contacto';
import Footer from './Footer/footer';

const Landing = function () {
  // JSX:
  return (
    <main>
      <Header />
      <Home></Home>
      <About></About>
      <Footer />
    </main>
  );
};
export default Landing;
