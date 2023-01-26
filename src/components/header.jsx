import { useState } from "react";
import "../style/general.scss";
import Logo from "../images/logo.svg";
import Menu from "../images/menu.png";
import Foto from "../images/foto.jpg";
import NavBar from "./NavBar";
import NavMobile from "./navMobile";

function Header() {
  const [clicked, setClicked] = useState(false);

  const handleClick = ()=>{
    setClicked(!clicked);
  }

  return (
    <header className="header__container">
      <nav className="header__nav">
        <a className="header__link" href="/">
          <img className="header__logo" src={Logo} alt="Logo" />
        </a>

        <div className="header__links">
          <NavBar />
        </div>

        <div className={`header__mobile ${clicked ? 'active' : ''}`}>
          <NavMobile />
        </div>

        <img className="header__menu" src={Menu} alt="Menu" onClick={handleClick} />
      </nav>

      <h1>
        <img className="header__profile" src={Foto} alt="Foto" />
      </h1>
    </header>
  );
}

export default Header;
