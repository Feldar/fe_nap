import Home from './Home/home';
import About from './About/about';
import Header from './Header/header';
import Footer from './Footer/footer';
import Developers from './Developers/Developers';

const Landing = function () {
  // JSX:
  return (
    <main>
      <Header />
      <Home></Home>
      <About></About>
      <Developers></Developers>
      <Footer />
    </main>
  );
};
export default Landing;
