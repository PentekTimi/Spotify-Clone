function FreeMonthPromotion () {
    // the FreeMonthPromotion component returns a list containing one item
    // the reason why a list is used, is because further list items can be highlighted when other promotions are valid
    return (
        <ul className="promotionList">
            <li className="promotionItem">1 month free</li>
        </ul>
    )
}

// export the FreeMonthPromotion component
export default FreeMonthPromotion;