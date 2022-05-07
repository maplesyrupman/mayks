import Head from "next/head"

import Nav from "../Nav"
import Footer from "../Footer"

export default function Layout({ children, home}) {
    return (
        <div>
            <Head>
                <meta name="description" content="Tedesco Group restoration, renovation and design" />
            </Head>
            <header>
                <Nav />
            </header>
            <main>{children}</main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}