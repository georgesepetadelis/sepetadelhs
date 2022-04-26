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
            
            <div className='p1-container'>
                <img className="sm-logo" src={socialmeme} height="100" />
                <p>social Meme: An open source social media to share your favorite memes and get rewarded.</p>
            </div>

            <div className='p2-container'>
                <img className="sm-logo" src={socialmeme} height="100" />
                <p>social Meme: An open source social media to share your favorite memes and get rewarded.</p>
            </div>

            <div className='p3-container'>
                <img className="sm-logo" src={socialmeme} height="100" />
                <p>social Meme: An open source social media to share your favorite memes and get rewarded.</p>
            </div>

        </div>
      </div>
    )
}

export default Projects;