import { Link } from "react-router-dom";
import logo_mini from  '../../img/logo_mini.svg';
import './menu.css';

interface props{
    menu?:string
}

export default function Menu({menu}:props) {
    return (
        <header className="containner-menu">
            <Link to="/">
                <img src={logo_mini} alt="Logo"/>
            </Link>
            <menu className="contain-menu">
                <div>
                <Link className={`menu-item ${menu === 'inicio' && 'menu-isselect'}`} to="/">Ínicio</Link>
                </div>
                <div>
                <Link className={`menu-item ${menu === 'sobre' && 'menu-isselect'}`} to="/sobre">Sobre</Link>
                </div>
                <div>
                <Link className={`menu-item ${menu === 'projetos' && 'menu-isselect'}`} to="/projetos">Projetos</Link>
                </div>
            </menu>
        </header>
    )
}