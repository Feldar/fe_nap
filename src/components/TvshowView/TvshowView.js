// import "./PersonajeCompleto.css"

const TvshowView = (props) => (
        <div className="cc-contenido">
            <figure className="cc-ficha">
                <div>
                    <img className="cc-img" src={props.image} alt='Personaje'></img>
                    <p>Origen: <span className="cc-dato">{props.origen}</span></p>
                    <p>Localización: <span className="cc-dato">{props.localizacion}</span></p>
                    <p>Estado: <span className="cc-dato">{props.status}</span></p>
                    <p>Aparece en <span className="cc-dato">{props.episodes} Capítulos</span></p>
                </div>
            </figure>
        </div>
    );

export default TvshowView;