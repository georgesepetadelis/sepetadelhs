import '../css/TopBarStyle.css'
import PageTitle from './PageNameComponent'
import { useLocation, useNavigate } from "react-router-dom";
import React, { useState } from 'react';

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

function TopNavBar() {
    
    const navigate = useNavigate();
    const location = useLocation();
    
    return (
        <div className="container">
            
            <div className='logo-div'>
                <PageTitle currentPageName={ getCurrentPageTitle(location.pathname) } />
            </div>

            <div className='navigation-buttons'>
                <button id='homeNavButton' className='nav-button' onClick={ (event) => { navigate("/", { replace: true })} }>Home</button>
                <button id='myProjectsNavButton' className='nav-button' onClick={ (event) => { navigate("/projects", { replace: true })} }>My Projects</button>
                <button id='aboutMeNavButton' className='nav-button' onClick={ (event) => { navigate("/about", { replace: true })} }>About me</button>
                <button id='contactNavButton' className='nav-button' onClick={ (event) => { navigate("/contact", { replace: true })} }>Contact</button>
            </div>
        
        </div>
    );
}

export default TopNavBar;