import '../css/TopBarStyle.css'
import PageTitle from './Logo'
import { Outlet, Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import React from 'react';

function getCurrentPageTitle(currentPath) {
    switch (currentPath) {
        case "/projects":
            return "My projects"
            break;
        case "/about":
            return "About me"
            break;
        case "/contact":
            return "Contact with me"
            break;
        default:
            return "Home"
            break;
    }
    return ""
}

function TopNavBar() {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <div className="container">
            
            <div className='logo-div'>
                <PageTitle currentPageName={getCurrentPageTitle(location.pathname)} />
            </div>

            <div className='navigation-buttons'>
                <button onClick={ (event) => { navigate("/", { replace: true })} }>Home</button>
                <button onClick={ (event) => { navigate("/projects", { replace: true })} }>My Projects</button>
                <button onClick={ (event) => { navigate("/about", { replace: true })} }>About me</button>
                <button onClick={ (event) => { navigate("/contact", { replace: true })} }>Contact</button>
            </div>
        
        </div>
    );
}

export default TopNavBar;