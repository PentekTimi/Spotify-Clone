// import the GetStartedBtn and FreeMonthPromotion components
import GetStartedBtn from "./GetStartedBtn";
import FreeMonthPromotion from "./FreeMonthPromotion";

function pickPremiumCard (props) {
    // the pickPremiumCard component returns a div containing the FreeMonthPromotion component, a h3 title that 
    // receives its value from the cardTitle property, a p tag containing the price property and lastly information
    // about the accounts that is displayed using the accounts property that is passed on 
    // the pickPremiumCard component also returns the GetStartedBtn component and a div containing the legal text property
    return (
        <div className="pickPremium-card">
            <div className="premiumType-description">
                <FreeMonthPromotion />
                <h3 className="cardTitle">{props.cardTitle}</h3>
                <p className="priceInfo">{props.price} EUR/month after offer period</p>
                {props.accounts}
            </div>
            <GetStartedBtn />
            <div className="pickPremium-legal">
                {props.legalText}
            </div>
        </div>
    )
}

// export the pickPremiumCard component
export default pickPremiumCard;