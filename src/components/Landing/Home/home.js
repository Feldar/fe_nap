import './home.css';
import imageHome from 'images/22-7_Kamisama_Datte_Kimerarenai.jpg'

const Home = () => (
  <section className="home" id="home">
    <div className="container">
      <div className="row">
        <div className="description">
          <h1 className="text-center">Nananiji Archive Project</h1>
          <img src={imageHome} />
          <p className="text-justify">
          </p>
        </div>
      </div>
    </div>
  </section>
);
export default Home;