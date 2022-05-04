import '../css/LogoStyle.css'

const Logo = ({currentPageName}) => {
    return (
        <h1 className='logo-desktop'>{currentPageName}</h1>
    )
}

export default Logo;