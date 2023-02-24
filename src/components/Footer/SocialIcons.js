// import the FontAwesomeIcon component and three icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF , faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function SocialIcons() {
    // the SocialIcons component returns a list with three elements that contain FontAwesomeIcon component
    return (
    <div className="socialIcons">
        <ul className="flex socialIcons-listGroup">
            <li className="socialIcons-listItem">
                <a href="https://www.instagram.com/spotify/" className="socialIcons-listLink"><FontAwesomeIcon icon={faInstagram} /></a>
            </li>
            <li className="socialIcons-listItem">
                <a href="https://twitter.com/spotify" className="socialIcons-listLink"><FontAwesomeIcon icon={faTwitter} /></a>
            </li>
            <li className="socialIcons-listItem">
                <a href="https://www.facebook.com/SpotifyUKIE/" className="socialIcons-listLink"><FontAwesomeIcon icon={faFacebookF} /></a>
            </li>
        </ul>
    </div>
    )
}

// export the SocialIcons component
export default SocialIcons;