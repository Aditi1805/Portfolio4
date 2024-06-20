import React from 'react'
import TopBar from './Top'
import NavbarComponent from './Nav'
import CarouselComponent from './Caroudel'
import Smallcard from './Smallcard'
import Abot from './Abot '
import Feature from './feature'
import Casestudy from './Casestudy'
import Memorial from './Memorial'
import Contactus from './Contactus'
import Qualifid from './Qualifid'
import ContactSection from './Contactform'
import Latestblog from './Latestblog'
import Footer from './Footer'
const Firstsection = () => {
  return (
        <>
            {/* <NavbarComponent /> */}
            <CarouselComponent />  
            <Smallcard/>
            <Abot/>
            <Feature/>
            <Casestudy/>
            <Memorial/>
            <Contactus/>
            <Qualifid/>
            <ContactSection/>
            <Latestblog/>
            {/* <Footer/> */}
        </>
    )
}

export default Firstsection