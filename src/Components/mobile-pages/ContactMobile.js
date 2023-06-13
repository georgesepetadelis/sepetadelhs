import TopNavBarMobileComponent from "../TopNavMobileComponent";
import github_icon from '../../assets/github_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import my_picture from '../../assets/my_picture.jpeg'
import '../../css-mobile/ContactStyle.css'

function ContactMobile() {
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

                <a href="mailto:giorgossepetadelis11@gmail.com">
                        <button className="send-email-button">SEND ME AN EMAIL</button>
                    </a>

                <h3 className="or-text">OR</h3>

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

export default ContactMobile;