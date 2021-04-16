import React from 'react';
import './home.css';
import dev_svg from '../../img/dev.svg';
import projects_svg from '../../img/projetos.svg';
import logo_svg from '../../img/logo.svg';

export default function Home() {
	return (
		<main>
			<section>
				<header>
					<h1>Hello!</h1>
					<p>Whats up, how are you?</p>
				</header>
				<p>Seja bem vindo ao meu web site.</p>
				<p>Abaixo você poderá ver meus projetos ou poderemos nos conhecer melhor.</p>
				<div className="cards">
					<div className="card">
						<img src={dev_svg} alt="Sobre o Dev"/>
						<h3>Sobre o Dev</h3>
						<a className="card_button" href="/#">SAIBA MAIS</a>
					</div>
					<div className="card">
						<img src={projects_svg} alt=""/>
						<h3>Sobre o Dev</h3>
						<a className="card_button" href="/#">SAIBA MAIS</a>
					</div>
				</div>
			</section>
			<aside className="logo">
				<img src={logo_svg} alt="Logo"/>
			</aside>
		</main>
	)
}