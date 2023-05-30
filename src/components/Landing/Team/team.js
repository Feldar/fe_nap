// CSS:
import './team.css';
import l1 from 'images/team-2.jpg';
import l2 from 'images/team-3.jpg';

const Team = () => (

  <section className="team" id="team">
    <div className="container">
      <h1 className="text-center">Equipo</h1>
      <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-12 item">
          <img src={l1} className="img-fluid" alt="team" />
          <div className="des">
            Sara
          </div>
          <span className="text-muted">Entrenadora</span>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12 item">
          <img src={l2} className="img-fluid" alt="team" />
          <div className="des">
            Chris
          </div>
          <span className="text-muted">Nutricionista deportivo</span>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12 item">
          <img src={l1} className="img-fluid" alt="team" />
          <div className="des">
            Layla
          </div>
          <span className="text-muted">Entrenadora de competición</span>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12 item">
          <img src={l2} className="img-fluid" alt="team" />
          <div className="des">
            J.Jirard
          </div>
          <span className="text-muted">Nutricionista clínico</span>
        </div>
      </div>
    </div>
  </section>

);
export default Team;