import Link from 'next/link';
import styles from '../styles/Projects.module.scss';
import Menu from './components/Menu';
import Head from 'next/head';


interface Project {
    id: number,
    name: String,
    description: String,
    technologies: [String],
    link: string,
}

export default function Projects() {
    var projecs = require('../list.json');
    console.log(projecs)
    return (
        <>
            <Head>
                <title>DevVentura | Projetos</title>
            </Head>
            <Menu menu="projetos" />
            <main className={styles.containnerProjects}>
                <div className={styles.contain}>
                    <div className={styles.containHeader}>
                        <img src="/avatar-eu.svg" alt="avatar eu" />
                        <header className={styles.headerProject}>
                            <h2>
                                Olá, vamos passear um pouco pelos meus projetos.
                        </h2>
                            <p>
                                Caso se interesse por algum projeto clique em visitar para ir até a página.
                        </p>
                        </header>
                    </div>
                    <section className={styles.cards_projects}>
                        {projecs.map((project: Project) => (
                            <div key={project.id} className={styles.card_project}>
                                <img src="https://i.imgur.com/zHGvk1q.png" alt="DS Delivery" />
                                <div className={styles.content}>

                                    <h2 className={styles.title}>{project.name}</h2>
                                    <p className={styles.description}>{project.description}</p>
                                    <h3>Tecnologias</h3>
                                    <div className={styles.technology}>
                                        {project.technologies.map((tecnologi: String, key: number) => (
                                            <span key={key}>{tecnologi + " "}</span>
                                        ))}
                                    </div>
                                    <Link href={project.link} >
                                        <a className={styles.btn}>
                                            VISITAR
                                    </a>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </section>
                </div>
            </main>
        </>
    )
}