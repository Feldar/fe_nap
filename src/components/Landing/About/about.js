// CSS:
import './about.css';
import foto from 'images/59070.jpg';
const About = () => (

  //about section -->

  <section className="about" id="about">
    <div className="container">
      <h1 className="text-center">About</h1>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12">
          <img src={foto} alt="imagen" className="img-fluid" />
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12 desc">
          <h3>Nananiji Archive Project</h3>
          <p className="text-justify">
            Nananiji Archive Project has been created to centralize the content archived by the entire 22/7 community 
            and in addition to preserving the history of the group
          </p>
        </div>
      </div>
    </div>
  </section>

);
export default About;