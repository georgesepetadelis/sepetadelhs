import '../css-mobile/TopNavBarStyle.css';
import { useLocation, useNavigate } from "react-router-dom";

function getCurrentPageTitle(currentPath) {
    switch (currentPath) {
        case "/projects":
            document.title = "George Sepetadelis | My projects"
            return "My projects"
        case "/about":
            document.title = "George Sepetadelis | About me"
            return "About me"
        case "/contact":
            document.title = "George Sepetadelis | Contact"
            return "Contact me"
        default:
            document.title = "George Sepetadelis | Home"
            return "Home"
    }
}

function TopNavBarMobileComponent() {

    const location = useLocation();
    const navigate = useNavigate();
    
    return (
        <div>
            <nav>
                <div class="navbar">
                    <div class="container nav-container">
                        <input class="checkbox" type="checkbox" name="" id="" />
                        <div class="hamburger-lines">
                        <span class="line line1"></span>
                        <span class="line line2"></span>
                        <span class="line line3"></span>
                        </div>
                        
                        <div class="logo">
                            <h1>{getCurrentPageTitle(location.pathname)}</h1>
                        </div>

                        <div class="menu-items">
                            <li><a style={ location.pathname == "/" ? { fontWeight: 'bold' } : { fontWeight: 'normal' } } onClick={ (event) => { navigate("/", { replace: true })} } >Home</a></li>
                            <li><a style={ location.pathname == "/projects" ? { fontWeight: 'bold' } : { fontWeight: 'normal' } } onClick={  (event) => { navigate("/projects", { replace: true })} } >My projects</a></li>
                            <li><a style={ location.pathname == "/about" ? { fontWeight: 'bold' } : { fontWeight: 'normal' } } onClick={ (event) => { navigate("/about", { replace: true })} } >About me</a></li>
                            <li><a style={ location.pathname == "/contact" ? { fontWeight: 'bold' } : { fontWeight: 'normal' } } onClick={ (event) => { navigate("/contact", { replace: true })} } >Contact</a></li>
                        </div>
                        </div>
                    </div>
                </nav>
        </div>
    )
}

export default TopNavBarMobileComponent;