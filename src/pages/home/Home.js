import Title from '../../components/home/title/Title'
import About from '../../components/home/about-us/About'
import Works from '../../components/home/how-works/Works'
// import StyleCard from '../../components/home/style-card/StyleCard'
// import Outfits from '../../components/home/outfits/Outfits'
import Partners from '../../components/home/partners/Partners'
import ShippingStep from '../../components/home/shipping-step/ShippingStep'
import HomeQuiz from '../../components/home/style-quiz/HomeQuiz'
import Subscription from '../../components/home/subscription/Subscription'
import React, {useEffect} from 'react'
import { Helmet } from 'react-helmet'

function Home() {
  useEffect(() => {
    const changePage = () => {
      window.scrollTo({top: 0});
    };
    changePage()
  }, []);
  return (
    <main id="home">
      <Helmet>
        <title>Fashion | Clother | Azerbaijan</title>
      </Helmet>
      <Title/>
      <About/>
      <Works/>
      {/* <StyleCard/> */}
      {/* <Outfits/> */}
      <Partners/>
      <ShippingStep/>
      <HomeQuiz/>
      <Subscription/>
    </main>
  )
}

export default Home