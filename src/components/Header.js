// import the HeaderButtons component
import HeaderButtons from "./Header/HeaderButtons";

function Header(props) {
    // the Header component returns a div with a h1 title, a h2 subtitle, the HeaderButtons component, and a p tag
    // the h2 subtitle takes use of the price property
    return (
        <div className="header container">
            <div className="header-section">
                <h1 className="header-title">Get Premium free for 1 month</h1>
                <h2 className="header-subtitle">Just {props.price} EUR/month after. Cancel anytime.</h2>
                <HeaderButtons />
                <p className="header-legalText"><a className="header-legalTextLink" href="https://www.spotify.com/pt-en/legal/premium-promotional-offer-terms/">Terms and conditions apply.</a> 1 month free not available for users who have already tried Premium.</p>
            </div>
        </div>
    )
};

// export the Header component
export default Header;