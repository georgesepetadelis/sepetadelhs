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
                <h3>Social Meme</h3>
                <p>An open source social media to share your favorite memes for free and get rewarded.</p>
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