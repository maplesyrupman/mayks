import Head from 'next/head'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_reCAP_SITE_KEY}
      scriptProps={{
        async: false,
        defer: true,
        appendTo: "body",
        nonce: undefined
      }}
    >
      <Head>
        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel="stylesheet" href="https://use.typekit.net/wdb3lae.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap" rel="stylesheet" /> 
      </Head>
      <Component {...pageProps} />
    </GoogleReCaptchaProvider>
  )
}

export default MyApp
