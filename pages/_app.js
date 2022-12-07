import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel="stylesheet" href="https://use.typekit.net/wdb3lae.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap" rel="stylesheet" /> 
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
