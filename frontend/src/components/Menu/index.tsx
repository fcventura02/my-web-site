import { Link } from "react-router-dom";
import './menu.css';
export default function Menu() {
    return (
        <header className="containner-menu">
            <menu className="contain-menu">
                <Link className="menu-item" to="/">Ínicio</Link>
                <Link className="menu-item" to="/sobre">Sobre</Link>
                <Link className="menu-item" to="/projetos">Projetos</Link>
            </menu>
        </header>
    )
}