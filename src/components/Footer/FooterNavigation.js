function FooterNavigation() {
    // the FooterNavigation component returns 3 description lists that contain a description title and data about links 
    return (
        <div className="footer-navigation flex">
            <dl className="footerNav-listGroup">
                <dt className="footerNav-listGroup-title">COMPANY</dt>
                <dd className="footerNav-listItem">
                    <a className="footerNav-listLink" href="https://www.spotify.com/pt-en/about-us/contact/">About</a>
                </dd>
                <dd className="footerNav-listItem">
                    <a className="footerNav-listLink" href="https://www.lifeatspotify.com/?">Jobs</a>
                </dd>
                <dd className="footerNav-listItem">
                    <a className="footerNav-listLink" href="https://newsroom.spotify.com/">For the Record</a>
                </dd>
            </dl>
            <dl className="footerNav-listGroup">
                <dt className="footerNav-listGroup-title">COMMUNITIES</dt>
                <dd className="footerNav-listItem">
                    <a className="footerNav-listLink" href="https://artists.spotify.com/home?">For artists</a>
                </dd>
                <dd className="footerNav-listItem">
                    <a className="footerNav-listLink" href="https://developer.spotify.com/">Developers</a>
                </dd>
                <dd className="footerNav-listItem">
                    <a className="footerNav-listLink" href="https://ads.spotify.com/en-US/?">Advertising</a>
                </dd>
                <dd className="footerNav-listItem">
                    <a className="footerNav-listLink" href="https://investors.spotify.com/home/">Investors</a>
                </dd>
                <dd className="footerNav-listItem">
                    <a className="footerNav-listLink" href="https://spotifyforvendors.com/">Vendors</a>
                </dd>
            </dl>
            <dl className="footerNav-listGroup">
                <dt className="footerNav-listGroup-title">USEFUL LINKS</dt>
                <dd className="footerNav-listItem">
                    <a className="footerNav-listLink" href="https://support.spotify.com/pt-en/">Support</a>
                </dd>
                <dd className="footerNav-listItem">
                    <a className="footerNav-listLink" href="https://open.spotify.com/?">Web Player</a>
                </dd>
                <dd className="footerNav-listItem">
                    <a className="footerNav-listLink" href="https://www.spotify.com/pt-en/free/">Free Mobile App</a>
                </dd>
            </dl>
        </div>
    )
}

// export the FooterNavigation component
export default FooterNavigation;