import TopNavBar from "../TopBarComponent";
import socialmeme from '../../assets/social_meme.png'
import '../../css/ProjectsStyle.css'

function Projects() {
    return (
        <div className="App">
        
        <TopNavBar />

        <div className='title'>
          <h1 className='name-title'>Some of my projects</h1>
          <p className='desc-title'>Some of the projects i've worked on</p>
        </div>
        
        <div className="projects-div">
            
            <div className='p2-container'>
                <div className="logo-container">
                <img className="sm-logo" src={socialmeme} height="100" />
                </div>
                <h3>iGrow MHFA</h3>
                <p>Mental Health First Aid is for leaders who need to manage mental health in the workplace as part of their role, and also for individuals who need support to manage a mental health concern themselves.</p>
                <button className="project-btn">Download now</button>
            </div>

            <div className='p2-container'>
                <div className="logo-container">
                <img className="sm-logo" src={socialmeme} height="100" />
                </div>
                <h3>iGrow Goals</h3>
                <p>iGrow goals helps you to write, implement and achieve your professional and personal goals, to help make sure you achieve them.</p>
                <button className="project-btn">Download now</button>
            </div>

            <div className='p2-container'>
                <div className="logo-container">
                <img className="sm-logo" src={socialmeme} height="100" />
                </div>
                <h3>Social Meme</h3>
                <p>An open source social media to share your favorite memes for free and get rewarded.</p>
                <button className="project-btn">Download now</button>
            </div>

        </div>
      </div>
    )
}

export default Projects;