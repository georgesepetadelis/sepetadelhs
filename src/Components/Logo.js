import '../css/LogoStyle.css'
import mylogo from '../assets/logo_icon.png'

const Logo = ({currentPageName}) => {
    return (
        <p className='logo'>{currentPageName}</p>
    )
}

export default Logo;