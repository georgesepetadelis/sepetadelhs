import TopNavBar from '../TopBarComponent';
import programmer_icon from '../../assets/programmer_icon.png';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function Home() {
    return (
        <div className="App">
        <TopNavBar />
        <div className='title'>
          <p className='hello-title' >Hello, i'm </p>
          <h1 className='name-title'>George Sepetadelhs</h1>
          <p className='desc-title' >Mobile and game developer</p>
        </div>
        <div className='programmer-logo-div'>
          <img className='programmer-logo' src={programmer_icon} />
        </div>
    </div>
    )
}

export default Home;