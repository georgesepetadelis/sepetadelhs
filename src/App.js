import './css/HomeStyle.css';
import Projects from './Components/pages/Projects';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/pages/Home';
import AboutMe from './Components/pages/AboutMe';
import Contact from './Components/pages/Contact';
import PageNotFound from './Components/pages/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/projects" element={<Projects/>}/>
        <Route exact path='/about' element={<AboutMe />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;