import { Link } from 'react-router-dom';
import './projects.css';
interface Project {
    id: number,
    name: String,
    description: String,
    technologies: [String],
    link: string,
}

export default function Projects() {
    var projecs = require('../../list.json');
    console.log(projecs)
    return (
        <main className="containner-projects">
            <div className="contain">
                <header className="header-project">
                    <h2>
                        Olá, vamos passear um pouco pelos meus projetos.
                </h2>
                    <p>
                        Caso se interesse por algum projeto clique em visitar para ir até a página.
                </p>
                </header>
                <section className="cards_projects">
                    {projecs.map((project: Project) => (
                        <div key={project.id} className="card_project">
                            <img src="https://i.imgur.com/zHGvk1q.png" alt="DS Delivery" />
                            <div className="card_project-content" >

                                <h2 className="card_projects-title">{project.name}</h2>
                                <p className="card_project-description">{project.description}</p>
                                <h3>Tecnologias</h3>
                                <div className="card_project-technology">
                                    {project.technologies.map((tecnologi: String, key: number) => (
                                        <span key={key}>{tecnologi + " "}</span>
                                    ))}
                                </div>
                                <Link className="card_project-btn" to={project.link} >VISITAR</Link>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </main>
    )
}