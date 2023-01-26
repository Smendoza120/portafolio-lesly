import "./App.css";
import "./style/general.scss";
import Header from "./components/header.jsx";
import AcercaDe from "./components/acerca-de";
import Aplicaciones from "./components/aplicaciones";
import Proyectos from "./components/proyectos";
import Contacto from "./components/contacto";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="fondo">
        <AcercaDe />
        <Aplicaciones />
        <Proyectos />
        <Contacto />
      </div>
      <Footer />
    </div>
  );
}

export default App;
