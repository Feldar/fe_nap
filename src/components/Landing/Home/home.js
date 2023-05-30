import './home.css';
const Home = () => (
  <section className="home" id="home">
    <div className="container">
      <div className="row">
        <div className="description">
          <h1>Bienvenido</h1>
          <p className="text-justify">
            En FitChallenge apostamos por la salud, por ello ofrecemos fitness para todos
            cuando y donde sea, mediante el deporte o la alimentación. ¿Te atreves a cambiar tu vida?
          </p>
          <a type="button" className="btn btn-outline-light btn-lg" href='dashboard'>Dashboard</a>
          <a type="button" className="btn btn-outline-light btn-lg" href='/register'>Regístrate</a>
          <a type="button" className="btn btn-outline-light btn-lg" href='dashboard/login'>Login</a>
        </div>
      </div>
    </div>
  </section>
);
export default Home;