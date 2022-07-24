import { Helmet } from 'react-helmet'
import AboutUs from '../../components/about/about-us/AboutUs'
import OurMission from '../../components/about/our-mission/OurMission'
import OurTeam from '../../components/about/our-team/OurTeam'
import AboutQuestion from '../../components/about/about-question/AboutQuestion'
import React, {useEffect} from 'react'

function About() {
  useEffect(() => {
    const changePage = () => {
      window.scrollTo({top: 0});
    };
    changePage()
  }, []);
  return (
    <main id="about">
      <Helmet>
        <title>About Us | Clother</title>
      </Helmet>
      <AboutUs/>
      <OurMission/>
      <OurTeam/>
      <AboutQuestion/>
    </main>
  )
}

export default About