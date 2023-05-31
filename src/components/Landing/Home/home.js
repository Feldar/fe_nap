import './home.css';
const Home = () => (
  <section className="home" id="home">
    <div className="container">
      <div className="row">
        <div className="description">
          <h1>Nananiji Archive Project</h1>
          <p className="text-justify">
            Nananiji Archive Project
          </p>
          <a type="button" className="btn btn-dark btn-lg" href='dashboard'>Dashboard</a>
          <a type="button" className="btn btn-dark btn-lg" href='/register'>Regístrate</a>
          <a type="button" className="btn btn-dark btn-lg" href='dashboard/login'>Login</a>
        </div>
      </div>
    </div>
  </section>
);
export default Home;