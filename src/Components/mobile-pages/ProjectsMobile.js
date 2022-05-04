import TopNavBarMobileComponent from "../TopNavMobileComponent";
import project_icon from '../../assets/project_icon.png'
import '../../css-mobile/ProjectsStyle.css'
import socialmeme_icon from '../../assets/social_meme.png'
import mhfa_icon from '../../assets/mhfa_icon.png'
import igrow_goals_icon from '../../assets/igrow_goals_icon.png'

function ProjectsMobile() {
    return (
        <div className="projects-bg">

            <TopNavBarMobileComponent />
            
            <div className='title-div-projects'>
                <img src={project_icon} />
                <h1>Some of my projects</h1>
                <p>Some of the projects i've worked on</p>
            </div>

            <div className='project-container-mobile'>
                <div className="logo-container">
                <img className="sm-logo" src={socialmeme_icon} height="100" />
                </div>
                <h3>Social Meme</h3>
                <p>An open source social media to upload, download or just see your favorite memes for free and get rewarded.</p>
                <button onClick={ (event) => { window.location.replace('https://play.google.com/store/apps/details?id=com.george.socialmeme') } } className="project-btn">Download now</button>
            </div>

            <div className='project-container-mobile'>
                <div className="logo-container">
                <img className="sm-logo" src={igrow_goals_icon} height="100" />
                </div>
                <h3>iGrow Goals</h3>
                <p>iGrow goals helps you to write, implement and achieve your professional and personal goals, to help make sure you achieve them.</p>
                <button onClick={ (event) => { window.location.replace('https://play.google.com/store/apps/details?id=com.george.igrow') } } className="project-btn">Download now</button>
            </div>

            <div className='project-container-mobile'>
                <div className="logo-container">
                <img className="sm-logo" src={mhfa_icon} height="100" />
                </div>
                <h3>iGrow MHFA</h3>
                <p>Using a simple, effective easy-to-use format the program takes the most common mental health concerns.</p>
                <button className="project-btn" onClick={ (event) => { window.location.replace('https://play.google.com/store/apps/details?id=com.igrow.mentalhealth.igrow_mental_health') } } >Download now</button>
            </div>
            
            <br /><br />

        </div>
    )
}

export default ProjectsMobile;