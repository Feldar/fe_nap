import Header from './Header/header';
import Home from './Home/home';
import About from './About/about';
import Team from './Team/team';
import Footer from './Footer/footer';
import Contacto from './Contacto/contacto';
import Lugares from './Lugares/lugares';
import Pack from './Pack/pack';
import Projects from './Projects/projects';

const Landing = function () {
  // JSX:
  return (
    <main>
      <Header></Header>
      <Home></Home>
      <About></About>
      <Team></Team>
      <Projects></Projects>
      <Pack></Pack>
      <Lugares></Lugares>
      <Contacto></Contacto>
      <Footer></Footer>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" />
      <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.1/dist/jquery.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
      <script src='https://cdnjs.cloudflare.com/ajax/libs/alpinejs/3.10.2/cdn.js'></script>
      <script src="images/script.js"></script>
    </main>

  );
};
export default Landing;
