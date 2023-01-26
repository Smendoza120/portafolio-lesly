import Acerca from "../images/Acerca-de.svg";
import Aplicaciones from "../images/Aplicaciones.svg";
import Proyectos from "../images/Proyectos.svg";
import Contacto from "../images/Contacto.svg";
import "../style/general.scss";

function NavBar() {
  return (
    <ul className="nav__container">
      <a href="#acerca_de" className="nav__links">
        <li className="nav__list one">
          <img 
            className="nav__image first" 
            src={Acerca} 
            alt="Acerca de" />
          Acerca de
        </li>
      </a>

      <a href="#aplicaciones" className="nav__links">
        <li className="nav__list two">
          <img 
            className="nav__image second" 
            src={Aplicaciones} 
            alt="Aplicaciones" />
          Habilidades
        </li>
      </a>

      <a href="#proyectos" className="nav__links">
        <li className="nav__list three">
          <img 
            className="nav__image third" 
            src={Proyectos} 
            alt="Proyectos" />
          Proyectos
        </li>
      </a>

      <a href="#contacto" className="nav__links">
        <li className="nav__list four">
          <img 
            className="nav__image fourth" 
            src={Contacto} 
            alt="Contacto" />
          Contacto
        </li>
      </a>
    </ul>
  );
}

export default NavBar;
