// import the PickPremiumCard component
import PickPremiumCard from "./pickPremium/pickPremiumCard";

// create two variables to hold the basic legal text and the student legal text
let basicLegalText = <p className="legalText"><a href="https://www.spotify.com/pt-en/legal/premium-promotional-offer-terms/" className="termsLink">Terms and conditions apply.</a> 1 month free not available for users who have already tried Premium.</p>;
let studentLegalText = <p className="legalText">Offer available only to students at an accredited higher education institution. 1 month free not available to users who already tried Premium. Spotify Student Discount Offer <a href="https://www.spotify.com/pt-en/legal/premium-promotional-offer-terms/" className="termsLink">Terms and conditions apply.</a></p>;
// create four variables that hold the information about accounts based on plans
let individualAccounts = <p className="accountInfo">1 account</p>;
let duoAccounts = <p className="accountInfo">2 accounts</p>;
let familyAccounts = <p className="accountInfo">Up to 6 accounts</p>;
let studentAccounts = <p className="accountInfo">1 account</p>;


function PickPremium() {
    // the PickPremium component returns a h2 title, a h3 subtitle, and a div with PickPremiumCard components
    // the PickPremiumCard components take 4 porperties, the card title, price, accounts and legal text
    return (
        <div className="pickPremium" id="plans">
            <div className="pickPremium-section">
                <h2 className="pickPremium-title">Pick your Premium</h2>
                <h3 className="pickPremium-subtitle">Listen without limits on your phone, speaker, and other devices.</h3>
                <div className="premiumOptions">
                    <PickPremiumCard cardTitle={"Individual"} price={"6.99"} accounts={individualAccounts} legalText={basicLegalText}/>
                    <PickPremiumCard cardTitle={"Duo"} price={"8.99"} accounts={duoAccounts} legalText={basicLegalText}/>
                    <PickPremiumCard cardTitle={"Family"} price={"11.99"} accounts={familyAccounts} legalText={basicLegalText}/>
                    <PickPremiumCard cardTitle={"Student"} price={"3.49"} accounts={studentAccounts} legalText={studentLegalText}/>
                </div>
            </div>
        </div>
    )
};

// export the PickPremium component
export default PickPremium;