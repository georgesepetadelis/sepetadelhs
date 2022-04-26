import '../css/LogoStyle.css'
import mylogo from '../assets/logo_icon.png'

const Logo = ({currentPageName}) => {
    return (
        <h1 className='logo'>{currentPageName}</h1>
    )
}

export default Logo;