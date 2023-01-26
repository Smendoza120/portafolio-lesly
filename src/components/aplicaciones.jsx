import "../style/general.scss";
import Apps from "../images/aplicaciones.png";

function Aplicaciones() {
  return (
    <section id="aplicaciones" className="aplicaciones__container">
      <h2 className="aplicaciones__tittle">Habilidades</h2>
      <div className="aplicaciones__content">
        <div>
        <p className="aplicaciones__text">
        Me especializo en lograr un progreso constante para mis clientes a través de compromisos de diseño de productos multidisciplinarios.         
        </p>
        
        <p className="aplicaciones__text">
        Esto incluye investigación de mercado y de clientes, diseño, desarrollo y redacción. 
        Teniendo creatividad, comunicación asertiva, atención al detalle y organización.
        </p>
        </div>
        <img className="aplicaciones__image" src={Apps} alt="Aplicaciones" />
      </div>
    </section>
  );
}

export default Aplicaciones;
