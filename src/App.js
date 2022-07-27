import "./App.css";
import About from "./Components/About";
import About2 from "./Components/About2";
import About3 from "./Components/About3";
import Footer from "./Components/Footer";
import Hero2 from "./Components/Hero2";
import MainSection from "./Components/MainSection";
import Navbar from "./Components/Navbar";
import ShopNow from "./Components/ShopNow";

function App() {
  return (
    <div className="App">
      <div
        className="w-100 "
        style={{
          backgroundImage: 'url("/images/heroImg.png")',
        }}
      >
        <div
          style={{
            background:
              "linear-gradient(180deg, #0E0E0E 0%, rgba(11, 11, 11, 0) 100%)",
          }}
        >
          <Navbar />
          <MainSection />
        </div>
      </div>
      <Hero2/>
      <About />
      <About2/>
      <About3/>
      <ShopNow/>
      <Footer/>
    </div>
  );
}

export default App;
