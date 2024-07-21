import { navbarLinks } from "../utils/data";
import "../styles/navbar.css"; // Acá se importan los estilos que tiene el navbar en la pagina principal

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <div className="contenedor-logo">
          <img src="logo.png" alt="Logo" className="logo" />
          <span className="title">Cafe Otoñal</span>
        </div>
        <ul>
          {navbarLinks.map((item) => (
            <li>
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
