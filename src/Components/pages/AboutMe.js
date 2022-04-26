import TopNavBar from "../TopBarComponent";
import '../../css/AboutMeStyle.css'

function AboutMe() {
    return(
        <div>
            
            <TopNavBar />

            <div className='title'>
                <h1 className='name-title'>More about me</h1>
                <p className='desc-title'>See some informations about me</p>
            </div>

            <div className="info-card-container">

            <aside class="profile-card">

                <div class="mask-shadow"></div>
                <header>
                    <a href="https://tutsplus.com">
                    <img src="https://en.gravatar.com/userimage/42992842/b8e8ff24d6f1cb84bbe5c839903086bb.png?size=200" />
                    </a>
                    <h1 className="name">GEORGE SEPETADELIS</h1>
                    <h2>Software engineer</h2>
                </header>

                <div class="profile-bio">
                    <p>"Terence is an avid reader of science fiction, especially anything to do with aliens and tweed jackets. Most weekends, he can be found cataloguing his collection of rodent skeletons."</p>
                </div>

                <ul class="profile-social-links">
                    <li>
                    <a href="https://twitter.com/tutsplus">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-twitter.svg" />
                    </a>
                    </li>
                    
                    <li>
                    <a href="https://envato.com">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-envato.svg" />
                    </a>
                    </li>

                    <li>
                    <a href="https://codepen.io/tutsplus">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-codepen.svg" />
                    </a>
                    </li>
                </ul>

        </aside>

            </div>

        </div>

    )
}

export default AboutMe;