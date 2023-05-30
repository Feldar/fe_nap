// CSS:
import './lugares.css';
import r1 from 'images/receta1.jpg';
import r2 from 'images/receta2.jpg';
import r3 from 'images/receta3.jpg';
import r4 from 'images/quo.jpg';
import r5 from 'images/vivagym.jpg';
import r6 from 'images/yuko.jpg';
const Lugares = () => (

  <section className="recetas-lugares" id="recetas-lugares">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <h1 className="text-center">Recetas</h1>
          <div className="slider" x-data="{start: true, end: false}">
            <div className="slider__content" x-ref="slider">
              <div className="slider__item">
                <img className="slider__image" src={r1} alt="Image1" />
                <div className="slider__info">
                  <h2>Salmón en salsa</h2>
                </div>
              </div>
              <div className="slider__item">
                <img className="slider__image" src={r2} alt="Image2" />
                <div className="slider__info">
                  <h2>Ensalada ibérica</h2>
                </div>
              </div>
              <div className="slider__item">
                <img className="slider__image" src={r3} alt="Image3" />
                <div className="slider__info">
                  <h2>Tostadas con huevo</h2>
                </div>
              </div>
            </div>
            <div className="slider__nav">

            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <h1 className="text-center">Lugares</h1>
          <div className="slider" x-data="{start: true, end: false}">
            <div className="slider__content" x-ref="slider">
              <div className="slider__item">
                <img className="slider__image" src={r4} alt="Image1" />
                <div className="slider__info">
                  <h2>QUO Fitnesss</h2>
                </div>
              </div>
              <div className="slider__item">
                <img className="slider__image" src={r5} alt="Image2" />
                <div className="slider__info">
                  <h2>Viva Gym</h2>
                </div>
              </div>
              <div className="slider__item">
                <img className="slider__image" src={r6} alt="Image3" />
                <div className="slider__info">
                  <h2>YUKO</h2>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default Lugares;