import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import Head from 'next/head';


export default function Home() {
  return (
    <>
      <Head>
        <title>DevVentura | Home</title>
      </Head>
      <main className={styles.containnerHome}>
        <section>
          <header id="conteudo" className={styles.contain}>
            <h1>Hello!</h1>
            <p>Whats up, how are you?</p>
          </header>
          <p>Seja bem vindo ao meu web site.</p>
          <p>Abaixo você poderá ver meus projetos ou poderemos nos conhecer melhor.</p>
          <div className={styles.cards}>
            <div className={styles.card}>
              <img src="/dev.svg" alt="Sobre o Dev" />
              <h3>Sobre o Dev</h3>
              <Link href="/sobre">
                <a className={styles.card_button}>SAIBA MAIS</a>
              </Link>
            </div>
            <div className={styles.card}>
              <img src="/projetos.svg" alt="Meus projetos" />
              <h3>Projetos</h3>
              <Link href="/projetos">
                <a className={styles.card_button}>SAIBA MAIS</a>
              </Link>
            </div>
          </div>
        </section>
        <aside className={styles.logo}>
          <div className={styles.setaNext}>
            <a href="#conteudo">
              <img src="/arrow-icon.svg" alt="continuar" />
            </a>
          </div>
          <img src="/logo.svg" alt="Logo" />
        </aside>
      </main>
    </>
  )
}
