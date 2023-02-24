// import the Logo and NavigationMenu components
import Logo from "./Navigation components/Logo";
import NavigationMenu from "./Navigation components/NavigationMenu";

function NavigationSection() {
    return (
        // the NavigationSection returns the Logo and NavigationMenu components
        <div className="navigation container">
            <div className="navigation-section flex">
                <Logo />
                <NavigationMenu />
            </div>
        </div>
    )
};

// export the NavigationSection component
export default NavigationSection;