import '../css/TopBarStyle.css'

function TopNavBar() {
    return (
        <div className="container">
            <div className='logo-div'>
                <p className='logo'>GS</p>
            </div>
            <div className='navigation-buttons'>
                <button>Home</button>
                <button>My Projects</button>
                <button>About me</button>
                <button>Contact</button>
            </div>
        </div>
    );
}

export default TopNavBar;