import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Services from "../components/Services";
import Footer from "../components/Footer";
//import Chatbot from "../components/Chatbot";
function Home() {
  return (
    <div className="home-container">
      <Banner />
      <Services />
      {/*<Chatbot /> */}
    </div>
  );
}

export default Home;

// Navbar e Footer no App.js