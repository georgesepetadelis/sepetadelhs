import './css/HomeStyle.css';
import { isMobile } from 'react-device-detect';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Projects from './Components/pages/Projects';
import Home from './Components/pages/Home';
import AboutMe from './Components/pages/AboutMe';
import Contact from './Components/pages/Contact';
import PageNotFound from './Components/pages/PageNotFound';

import HomeMobile from './Components/mobile-pages/HomeMobile';
import ProjectsMobile from './Components/mobile-pages/ProjectsMobile'
import AboutMeMobile from './Components/mobile-pages/AboutMeMobile';
import ContactMobile from './Components/mobile-pages/ContactMobile'



function App() {

  if (isMobile) {

    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <HomeMobile/> }/>
          <Route exact path="/home" element={ <HomeMobile/> }/>
          <Route exact path="/projects" element={ <ProjectsMobile/> }/>
          <Route exact path='/about' element={ <AboutMeMobile/> } />
          <Route exact path='/contact' element={ <ContactMobile/> } />
          <Route exact path='/*' element={ <PageNotFound/> } />
        </Routes>
      </BrowserRouter>
    )

  } else {

    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <Home/> }/>
          <Route exact path="/home" element={ <Home/> }/>
          <Route exact path="/projects" element={ <Projects/> }/>
          <Route exact path='/about' element={ <AboutMe/> } />
          <Route exact path='/contact' element={ <Contact/> } />
          <Route exact path='/*' element={ <PageNotFound/> } />
        </Routes>
      </BrowserRouter>
    )

  }
  
}

export default App;