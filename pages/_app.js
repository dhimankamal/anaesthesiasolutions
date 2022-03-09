import Head from 'next/head'     
import Script from 'next/Script'                         

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Head>
          <link rel="stylesheet" href="assets/css/all.min.css" />
          <link rel="stylesheet" href="assets/css/flaticon.css" />
          <link rel="stylesheet" href="assets/css/animate.min.css" />
          <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
          <link rel="stylesheet" href="assets/css/jquery.fancybox.min.css" />
          <link rel="stylesheet" href="assets/css/perfect-scrollbar.css" />
          <link rel="stylesheet" href="assets/css/slick.css" />
          <link rel="stylesheet" href="assets/css/style.css" />
          <link rel="stylesheet" href="assets/css/responsive.css" />
          <link rel="stylesheet" href="assets/css/color3.css" />

      </Head>


    <Component {...pageProps} />

    <Script src="assets/js/jquery.min.js"></Script>
    <Script src="assets/js/popper.min.js"></Script>
    <Script src="assets/js/bootstrap.min.js"></Script>
    <Script src="assets/js/wow.min.js"></Script>
    <Script src="assets/js/perfect-scrollbar.min.js"></Script>

    
    </>


  ) 
}

export default MyApp
