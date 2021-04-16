import './home.css';
import dev_svg from '../../img/dev.svg';
import projects_svg from '../../img/projetos.svg';
import logo_svg from '../../img/logo.svg';
import { Link } from 'react-router-dom';

// eslint-disable-next-line 
export default function Home() {
	return (
		<main>
			<section>
				<header className="contain">
					<h1>Hello!</h1>
					<p>Whats up, how are you?</p>
				</header>
				<p>Seja bem vindo ao meu web site.</p>
				<p>Abaixo você poderá ver meus projetos ou poderemos nos conhecer melhor.</p>
				<div className="cards">
					<div className="card">
						<img src={dev_svg} alt="Sobre o Dev"/>
						<h3>Sobre o Dev</h3>
						<Link className="card_button" to="/sobre">SAIBA MAIS</Link>
					</div>
					<div className="card">
						<img src={projects_svg} alt=""/>
						<h3>Projetos</h3>
						<Link className="card_button" to="/projects">SAIBA MAIS</Link>
					</div>
				</div>
			</section>
			<aside className="logo">
				<img src={logo_svg} alt="Logo"/>
			</aside>
		</main>
	)
}