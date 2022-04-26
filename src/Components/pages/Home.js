import TopNavBar from '../TopBarComponent';
import programmer_icon from '../../assets/programmer_icon.png';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
    return (
      <div className="App">
        <TopNavBar />
        <div className='content-container'>

          <div className='title'>
            <p className='hello-title' >Hello, i'm </p>
            <h1 className='name-title'>George Sepetadelis</h1>
            <p className='desc-title' >Mobile and game developer</p>
            <button className='action-button-home' onClick={ (event) => { navigate("/contact", { replace: true })} }>Contact with me</button>
          </div>

          <div className='programmer-logo-container'>
            <div className='programmer-logo-div'>
              <img className='programmer-logo' src={programmer_icon} />
            </div>
          </div>

        </div>
      </div>
    )
}

export default Home;