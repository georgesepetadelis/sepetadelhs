import TopNavBar from '../TopBarComponent';
import programmer_icon from '../../assets/programmer_icon.png';
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  document.title = "George Sepetadelis | Home"
    return (
      <div className="App">
        <TopNavBar />
        <div className='content-container'>

          <div className='title'>
            <p className='hello-title' >Hello, i'm </p>
            <h1 className='name-title'>George Sepetadelis</h1>
            <p className='desc-title' >Mobile and game developer</p>
            <button className='action-button-home' onClick={ (event) => { navigate("/contact", { replace: true })} }>Contact me</button>
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