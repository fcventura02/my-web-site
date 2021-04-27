import Head from "next/head";
import Menu from "./components/Menu";

export default function Info() {
    return (
        <>
            <Head>
                <title>DevVentura | Sobre</title>
            </Head>
            <Menu menu="sobre" />
            <main>
                <h1>Sobre</h1>
            </main>
        </>
    )
}