// CSS:
import foto from 'images/Yagami_Toa_by_Teli_Profile.png';
const Developers = () => (

  //about section -->

  <section className="about" id="about">
    <div className="container">
      <h1 className="text-center">Developers</h1>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12">
          <img src={foto} alt="imagen" className="img-fluid" />
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12 desc">
          <h3>Nananiji Archive Project</h3>
          <p className="text-justify">
            DAW Final Project developed by Duban Felipe Gómez Chacón
          </p>
        </div>
      </div>
    </div>
  </section>

);
export default Developers;