function HeaderButtons() {
    // the HeaderButtons component returns a div with two buttons
    return (
        <div className="header-btns">
            <button className="start-btn"><a href="https://accounts.spotify.com/en/login?continue=https%3A%2F%2Fwww.spotify.com%2Fpt-en%2Fpurchase%2Foffer%2Fdefault-trial-1m%2F%3Fcountry%3DPT">GET STARTED</a></button>
            <button className="plans-btn"><a href="#plans">VIEW PLANS</a></button>
        </div>
    )
}

// export the HeaderButtons component
export default HeaderButtons;