// import the Logo, SocialIcons, CurrentLocation, LegalInfo and FooterNavigation components
import Logo from "./Navigation components/Logo";
import SocialIcons from "./Footer/SocialIcons";
import CurrentLocation from "./Footer/CurrentLocation";
import LegalInfo from "./Footer/LegalInfo";
import FooterNavigation from "./Footer/FooterNavigation";

function Footer() {
    // the Footer component returns the 5 components imported above, and a div with an a tag linking to the original website
    return (
        <div>
            <footer className="footer">

                <nav className="footer-section flex">
                    <Logo />
                    <FooterNavigation />
                    <SocialIcons />
                    <CurrentLocation />
                    <LegalInfo />
                </nav>

                <div className="recreatedWeb-linkWrapper">
                    <a className="recreatedWeb-link" href="https://www.spotify.com/pt-en/premium/?">Click here to view the recreated web page!</a>
                </div>
                
            </footer>
        </div>
    )
};

// export the Footer component
export default Footer;