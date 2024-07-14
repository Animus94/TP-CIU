import { navbarLinks } from "../utils/menu";
import "../styles/navbar.css"; // Acá se importan los estilos que tiene el navbar en la pagina principal

function Navbar() {
  return (
    <header>
      <nav className="navbar">
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
