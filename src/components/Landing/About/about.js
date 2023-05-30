// CSS:
import './about.css';
import foto from 'images/class2.png';
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
          <h3>Fit Challenge</h3>
          <p className="text-justify">
            En FitChallenge apostamos por la salud, por ello ofrecemos fitness para todos
            cuando y donde sea, mediante el deporte o la alimentación, tú eliges. Somos una pequeña
            empresa, creada por un grupo de estudiantes con el fin de mejorar y facilitar la vida
            a aquellas personas que no encuentran el tiempo o el lugar indicado. Esta web será una joya
            para aquellos que se preocupen por el deporte y la salud.
          </p>
        </div>
      </div>
    </div>
  </section>

);
export default About;