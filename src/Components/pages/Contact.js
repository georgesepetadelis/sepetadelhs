import TopNavBar from "../TopBarComponent";
import github_icon from '../../assets/github_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import my_picture from '../../assets/my_picture.jpg'
import '../../css/ContactStyle.css'

function Contact() {
    return(
        <div>
            <TopNavBar />

            <div className='title'>
                <h1 className='name-title'>Looking for collaborate?</h1>
                <p className='desc-title'>Do you want to work together? <br />I will be glad to hear your ideas</p>
            </div>

            <div className="contact-card-container">
            <aside class="profile-card">

                <div class="mask-shadow"></div>
                <header>
                    <a href="https://github.com/georgesepetadelis/">
                    <img src="https://pbs.twimg.com/profile_images/1377349779131396096/A_f2H35A_400x400.jpg" />
                    </a>
                    <h1 className="name">GEORGE SEPETADELIS</h1>
                    <h2>Software engineer</h2>
                </header>

                <div class="profile-bio">
                    <a href="mailto:giorgossepetadelis11@gmail.com">
                        <button className="send-email-button">SEND ME AN EMAIL</button>
                    </a>
                    <h3>OR</h3>
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

export default Contact;