import Head from 'next/head'
import FeatureLogo from './components/FeatureLogo'
import HomeSlider from './components/HomeSlider'
import Navbar  from './components/Navbar'

let number = "+1 (202) 588-6500"

export default function Home() {
  return (
    <>
      <Head>
        <title>The Anaesthesia Solutions</title>
        <meta name="deScription" content="The Anaesthesia Solutions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar number={number}/>
        <HomeSlider />
        <FeatureLogo />
        
      </main>
    </>
  )
}
