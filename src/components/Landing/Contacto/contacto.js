// CSS:
import './contacto.css';

const Contacto = () => (
  <div>
    <section className="contact-form" id="contact">
      <div className="container">
        <form>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <h1>Contacto</h1>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 right">
              <div className="form-group">
                <input type="text" className="form-control form-control-lg" placeholder="Tu nombre" />
              </div>
              <div className="form-group">
                <input type="email" className="form-control form-control-lg" placeholder="tucorreo@gmail.com" />
              </div>
              <div className="form-group">
                <textarea className="form-control form-control-lg"/>
              </div>
              <input type="submit" className="btn btn-secondary btn-block" defaultValue="Enviar" />
            </div>
          </div>
        </form>
      </div>
    </section>
  </div>

);
export default Contacto;