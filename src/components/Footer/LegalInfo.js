function LegalInfo() {
    // the LegalInfo component returns a list with 5 links and a p tag displaying the copyright
    return (
        <div className="footer-legalLinks flex">
            <ul className="legalLinks-list flex">
                <li className="legalLinks-listItem"><a href="https://www.spotify.com/pt-en/legal/end-user-agreement/" className="legalLinks-link">Legal</a></li>
                <li className="legalLinks-listItem"><a href="https://www.spotify.com/pt-en/privacy" className="legalLinks-link">Privacy Center</a></li>
                <li className="legalLinks-listItem"><a href="https://www.spotify.com/pt-en/legal/privacy-policy/" className="legalLinks-link">Privacy Policy</a></li>
                <li className="legalLinks-listItem"><a href="" className="legalLinks-link">Cookie Settings</a></li>
                <li className="legalLinks-listItem"><a href="https://www.spotify.com/pt-en/legal/privacy-policy/#s3" className="legalLinks-link">About Ads</a></li>
            </ul>
            <p className="copyright">&copy; 2023 Spotify AB</p>
        </div>
    )
}

// export the LegalInfo component
export default LegalInfo;