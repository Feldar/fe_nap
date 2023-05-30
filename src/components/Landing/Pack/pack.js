// CSS:
import './pack.css';

const Pack = () => (
  <section className="pack">
    <div className="container">
      <div className="card-deck mb-3 text-center">
        <div className="card mb-4 sombra">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Gratis</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">$0 <small className="text-muted">/ mes</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li> vídeos de rutinas </li>
              <li> vídeos de recetas </li>
              <li> restaurantes y gimnasios cercanos a ti </li>
              <li className="line"> rutina de entrenamiento personal</li>
              <li className="line"> plan nutricional</li>
              <li className="line"> sorteos y descuentos </li>
            </ul>
            <button type="button" className="btn btn-lg btn-block colorboton"><span>Regístrate gratis</span></button>
          </div>
        </div>
        <div className="card mb-4 sombra">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Básico</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">$15 <small className="text-muted">/ mes</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li> vídeos de rutinas </li>
              <li> vídeos de recetas </li>
              <li> restaurantes y gimnasios cercanos a ti </li>
              <li> entrenamiento personal o plan nutricional</li>
              <li> descuentos </li>
              <li className="line"> sorteos</li>
            </ul>
            <button type="button" className="btn btn-lg btn-block colorboton"><span>Suscríbete</span></button>
          </div>
        </div>
        <div className="card mb-4 sombra">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Premium</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">$26 <small className="text-muted">/ mes</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li> vídeos de rutinas </li>
              <li> vídeos de recetas </li>
              <li> restaurantes y gimnasios cercanos a ti </li>
              <li> rutina de entrenamiento personal</li>
              <li> plan nutricional</li>
              <li> sorteos y descuentos</li>
            </ul>
            <button type="button" className="btn btn-lg btn-block colorboton"><span>Suscríbete</span></button>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default Pack;