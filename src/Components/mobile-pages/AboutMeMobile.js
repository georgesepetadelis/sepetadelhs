import TopNavBarMobileComponent from "../TopNavMobileComponent";
import github_icon from '../../assets/github_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import my_picture from '../../assets/my_picture.jpeg'
import '../../css-mobile/AboutMeStyle.css'

function AboutMeMobile() {
    return (
        <div>
            
            <TopNavBarMobileComponent />

            <div className="info-card-container">

            <aside class="profile-card">

                <div class="mask-shadow"></div>
                <header>
                    <a href="https://github.com/georgesepetadelis/">
                    <img src={my_picture} />
                    </a>
                    <h1 className="name">GEORGE SEPETADELIS</h1>
                    <h2>Software engineer</h2>
                </header>

                <div class="profile-bio">
                    <p>16 y/o and i'm from Greece. I have experience with many programming languages and Frameworks for all mobile platforms like Flutter, React-Native and also native Android and iOS development with Java and Swift. Also i currently working on Unreal engine and Unity for some big projects. </p>
                </div>

                <ul class="profile-social-links">
                    <li>
                    <a href="https://github.com/georgesepetadelis/">
                        <img src={github_icon} />
                    </a>
                    </li>
                    
                    <li>
                    <a href="https://www.instagram.com/sepetadelhsss/">
                        <img src={instagram_icon} />
                    </a>
                    </li>

                    <li>
                    <a href="https://twitter.com/gsepetadelis">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-twitter.svg" />
                    </a>
                    </li>
                </ul>

        </aside>

            </div>

        </div>

    )
}

export default AboutMeMobile;