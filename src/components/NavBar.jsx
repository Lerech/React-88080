import CartWidget from "./CartWidget"
import Logo from "./logo";
import './Logo.css'
function NavBar() {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li className="nav-item"><a href="Inicio">Inicio</a></li>
                <li className="nav-item"><a href="Productos">Productos</a></li>
                <li className="nav-item"><a href="Contacto">Contacto</a></li>
            </ul>
            <CartWidget />
            <Logo />
                </nav>
            );
        }
export default NavBar;