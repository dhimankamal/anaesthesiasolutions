
import Script from 'next/Script'                         

function MyApp({ Component, pageProps }) {
  return(
    <>
     


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
