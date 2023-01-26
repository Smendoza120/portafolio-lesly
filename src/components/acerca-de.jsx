import Diseñador from "../images/disenador-grafico.png";

function AcercaDe() {
  return (
    <section id="acerca_de" className="acerca__container">
      <h2 className="acerca__tittle">Acerca de</h2>

      <div className="acerca__content">
        <p className="acerca__text">
        Soy una persona autónoma enfocada en la edición de contenidos digitales, desde directos en Twitch hasta videos de tiktok, con más de 2 años de experiencia y elaboración de ediciones simples y complejas.
        <br /><br />
        Especializada en cortes, transiciones y efectos, brindando un acompañamiento personalizado de acuerdo a los requerimientos de mi cliente.
        </p>

        <img className="acerca__image" src={Diseñador} alt="Diseñador imagen" />

        <div className="acerca__info">
          <ul className="acerca__list">
            <li className="acerca__description">
              <b>Nombre:</b> Lesly Cuchivaque
            </li>
            <li className="acerca__description">
              <b>Edad:</b> 22
            </li>
            <li className="acerca__description">
              <b>Teléfono:</b> (+57) 305 -857-9199
            </li>
            <li className="acerca__description">
              <b>Ubicación:</b> Bogotá - Colombia
            </li>
            <li className="acerca__description">
              <b>Correo:</b> leslyacuchivaquel(@)gmail.com
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AcercaDe;
