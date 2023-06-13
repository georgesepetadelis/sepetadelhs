import '../../css-mobile/HomeStyle.css'
import TopNavBarMobileComponent from '../TopNavMobileComponent';
import my_picture from '../../assets/my_picture.jpeg'
import { useNavigate } from 'react-router-dom';

function HomeMobile() {
    const navigate = useNavigate();
    return (
        <div>
            <TopNavBarMobileComponent />
            <div className='title-div'>
                <img src={my_picture} />
                <h2>Hello, i'm</h2>
                <h1>George Sepetadelis</h1>
                <p>Mobile and game developer</p>
                <button onClick={ (event) => { navigate("/contact", { replace: true })} } >Contact Me</button>
            </div>
        </div>
    )
}

export default HomeMobile;