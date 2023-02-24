// import the WhyPremiumCard component
import WhyPremiumCard from "./whyPremium/WhyPremiumCard";

function WhyPremium() {
    // the WhyPremium component returns a h2 title and a div containing 4 WhyPremiumCard components
    // 3 properties are passed to each of the WhyPremiumCard components. the properties are the image source, the card title, and the card text
    return (
        <div className="whyPremium">
            <div className="whyPremium-section">
                <h2 className="whyPremium-title">Why go Premium?</h2>
                <div className="flex">
                    <WhyPremiumCard imgSrc={"https://i.scdn.co/image/ab671c3d0000f43009302fbaf6259b4c117c704f"} cardTitle={"Download music."} cardText={"Listen anywhere."} />
                    <WhyPremiumCard imgSrc={"https://i.scdn.co/image/ab671c3d0000f43098292b95d24a697c20df5137"} cardTitle={"Ad-free music listening."} cardText={"Enjoy nonstop music."} />
                    <WhyPremiumCard imgSrc={"https://i.scdn.co/image/ab671c3d0000f4306998d3ffd58aad6da6afdf67"} cardTitle={"Play any song."} cardText={"Even on mobile"} />
                    <WhyPremiumCard imgSrc={"https://i.scdn.co/image/ab671c3d0000f430cd6c528745e510c5be63a012"} cardTitle={"Unlimited skips."} cardText={"Just hit next"} />
                </div>
            </div>
        </div>
    )
};

// export the WhyPremium component
export default WhyPremium;