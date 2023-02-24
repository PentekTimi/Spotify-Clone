function WhyPremiumCard (props) {
    // the WhyPremiumCard component returns an image and a div with 2 paragraphs
    // the image takes use of the image source property that is passed on
    // the two paragraphs take use of the card title and card text properties
    return (
        <div className="whyPremium-card">
            <img className="whyPremium-card-img" src={props.imgSrc} alt="why premium list image"/>
            <div className="whyPremium-card-textContent">
                <p className="whyPremium-card-title">{props.cardTitle}</p>
                <p className="whyPremium-card-text">{props.cardText}</p>
            </div>
        </div>
    )
}

// export the WhyPremiumCard component
export default WhyPremiumCard;