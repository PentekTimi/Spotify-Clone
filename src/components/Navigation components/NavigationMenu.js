function NavigationMenu() {
    // the NavigationMenu component returns a list with the menu items
    return (
        <div className="navigationMenu-container">
            <ul className="flex navigation-list">
                <li className="navigation-items"><a className="navigation-links" href="https://www.spotify.com/pt-en/premium/?">Premium</a></li>
                <li className="navigation-items"><a className="navigation-links" href="https://support.spotify.com/pt-en/?">Support</a></li>
                <li className="navigation-items"><a className="navigation-links" href="https://www.spotify.com/pt-en/download/windows/">Download</a></li>
                <li className="navigation-items navigation-links">|</li>
                <li className="navigation-items"><a className="navigation-links" href="https://www.spotify.com/pt-en/signup">Sign up</a></li>
                <li className="navigation-items"><a className="navigation-links" href="https://accounts.spotify.com/en/login?">Log in</a></li>
            </ul>
        </div>
    )
}

// export the NavigationMenu component
export default NavigationMenu;