// CSS:
import './projects.css';
import s1 from 'images/servicio1.jpg';
import s2 from 'images/servicio2.jpg';

const Projects = () => (
  <section className="servicios" id="servicios">
    <div className="container">
      <h1 className="text-center">Te ofrecemos</h1>
      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">Entrenamiento en línea</h2>
          <h4>Entrenadores con experiencia certificada</h4>
          <p className="lead">La mayoría de los servicios de entrenamiento en línea
            (y la mayoría de los expertos en fitness) utilizan plantillas genéricas de ejercicios y dietas.
            Es decir, el mismo programa para todos, independientemente de la edad, la experiencia o los objetivos.
            Pero en FitChallenge todo, desde el plan de nutrición hasta el programa de ejercicios,
            se adapta al horario, estilo de vida y preferencias personales de nuestros clientes.
          </p>
        </div>
        <div className="col-md-5">
          <img className="featurette-image img-fluid rounded mx-auto servicio" src={s1} alt="servicio1" />
        </div>
      </div>
      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading">Planes de alimentación</h2>
          <h4>Proporcionados por un Nutricionista</h4>
          <p className="lead">No importa si tu objetivo es ganar masa, perder peso o simplemente mantenerte sano,
            el entrenamiento es sólo una parte del plan. Para obtener los mejores resultados para tu cuerpo,
            combina tu régimen de entrenamiento con planes de comidas que potencien tus entrenamientos más duros
            y te acerquen a tus objetivos personales.</p>
        </div>
        <div className="col-md-5 order-md-1">
          <img className="featurette-image img-fluid rounded mx-auto servicio" src={s2} alt="servicio2" />
        </div>
      </div>
    </div>
  </section>
);
export default Projects;