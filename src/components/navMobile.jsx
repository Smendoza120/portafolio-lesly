import Acerca from "../images/Acerca-de.svg";
import Aplicaciones from "../images/Aplicaciones.svg";
import Proyectos from "../images/Proyectos.svg";
import Contacto from "../images/Contacto.svg";

function NavMobile() {
  return (
    <ul className="mobile__container">
      <a href="#acerca_de" className="mobile__links">
        <li className="mobile__list one">
          <img className="mobile__image first" src={Acerca} alt="Acerca de" />
          Acerca de
        </li>
      </a>

      <a href="#aplicaciones" className="mobile__links">
        <li className="mobile__list two">
          <img
            className="mobile__image second"
            src={Aplicaciones}
            alt="Aplicaciones"
          />
          Habilidades
        </li>
      </a>

      <a href="#proyectos" className="mobile__links">
        <li className="mobile__list three">
          <img className="mobile__image third" src={Proyectos} alt="Proyectos" />
          Proyectos
        </li>
      </a>

      <a href="#contacto" className="mobile__links">
        <li className="mobile__list four">
          <img className="mobile__image fourth" src={Contacto} alt="Contacto" />
          Contacto
        </li>
      </a>
    </ul>
  );
}

export default NavMobile;
