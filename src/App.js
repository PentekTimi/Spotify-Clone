import './App.css';
// import own css styles
import "./index.css";
// import the 5 main sections that make up the webpage
import NavigationSection from './components/NavigationSection';
import Header from './components/Header';
import WhyPremium from './components/WhyPremium';
import PickPremium from './components/PickPremium';
import Footer from './components/Footer';

function App() {
  // the App component returns the navigation menu, header, why premium, pick premium and footer components
  // the Header component passes on a price property
  return (
    <div className="App">
      <NavigationSection />
      <Header price={6.99}/>
      <WhyPremium />
      <PickPremium />
      <Footer />
    </div>
  );
}

export default App;
