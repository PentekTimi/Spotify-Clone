// import the FontAwesomeIcon component and one icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'; 

function CurrentLocation() {
    // the CurrentLocation component returns a div with one font awesome icon and an a tag describing a location
    return (
        <div className="footer-location flex">
            <FontAwesomeIcon icon={faEarthAmericas} />
            <a href="https://www.spotify.com/pt-en/select-your-country-region/" className="footerLocation-text">Portugal &#40;English&#41;</a>
        </div>
    )
}

// export the CurrentLocation component 
export default CurrentLocation;