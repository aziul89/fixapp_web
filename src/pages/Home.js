import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Services from "../components/Services";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="home-container">
      <Banner />
      <Services />
    </div>
  );
}

export default Home;

// Navbar e Footer no App.js