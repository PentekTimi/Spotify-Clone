// import the logo picture
import logo from "../../logo.png"

function Logo () {
    return (
        // the Logo component returns the image inside an anchor tag
        <div className="logo-container">
            <a href="https://open.spotify.com/?">
                <img src={logo} className="logo" />
            </a>
        </div>
    )
}

// export the Logo component
export default Logo;