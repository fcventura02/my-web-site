import Link from "next/link";
import styles from './Menu.module.scss';

interface props {
    menu?: string
}

export default function Menu({ menu }: props) {
    return (
        <header className={styles.containnerMenu}>
            <Link href="/">
                <img src="/logo_mini.svg" alt="Logo" />
            </Link>
            <menu className={styles.contain}>
                <div className={styles.item}>
                    <Link href="/">
                        <a className={`${ (menu === 'inicio') && styles.isselect}`}>
                            Ínicio
                        </a>
                    </Link>
                </div>
                <div className={styles.item}>
                    <Link href="/sobre">
                        <a className={`${styles.item, menu === 'sobre' && styles.isselect}`}>
                            Sobre
                        </a>
                    </Link>
                </div>
                <div className={styles.item}> 
                    <Link href="/projetos">
                        <a className={`${styles.item, menu === 'projetos' && styles.isselect}`} >
                            Projetos
                        </a>
                    </Link>
                </div>
            </menu>
        </header>
    )
}