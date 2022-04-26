import '../css/LogoStyle.css'

const Logo = ({currentPageName}) => {
    return (
        <h1 className='logo'>{currentPageName}</h1>
    )
}

export default Logo;