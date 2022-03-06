import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from './components/Header'
import Script from 'next/Script'




export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Anaesthesia Solutions</title>
        <meta name="deScription" content="The Anaesthesia Solutions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
           <Header />
      </main>

      <Script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></Script>

      <Script src="http://localhost:3000/scripts/jquery.min.js"></Script>
      <Script src="http://localhost:3000/scripts/popper.min.js"></Script>
      <Script src="http://localhost:3000/scripts/bootstrap.min.js"></Script>
      <Script src="http://localhost:3000/scripts/wow.min.js"></Script>
      <Script src="http://localhost:3000/scripts/counterup.min.js"></Script>
      <Script src="http://localhost:3000/scripts/jquery.fancybox.min.js"></Script>
      <Script src="http://localhost:3000/scripts/perfect-scrollbar.min.js"></Script>
      <Script src="http://localhost:3000/scripts/slick.min.js"></Script>
      <Script src="http://localhost:3000/scripts/custom-Scripts.js"></Script>
     
    </div>
  )
}
