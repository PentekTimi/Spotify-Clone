function GetStartedBtn () {
    // the GetStartedBtn returns a button that is wrapped by an anchor tag
    return (
        <div className="pickPremium-btnContainer">
            <a className="pickPremium-bntLink" href="https://accounts.spotify.com/en/login?">
                <button className="pickPremium-btn">GET STARTED</button>
            </a>
        </div>
    )
}

// export the GetStartedBtn component
export default GetStartedBtn;