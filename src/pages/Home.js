import "../styles/home/home.css";
import { useEffect } from "react";

// components
import Header from "../components/Home/Header";
import About from "../components/Home/About";
import Portfolio from "../components/Home/Portfolio";
import Services from "../components/Home/Services";

const Home = () => {
  useEffect(() => {
    document.title = "DevR | Home";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home_page">
      <Header />
      <About />
      <Portfolio />
      <Services />
    </div>
  );
};

export default Home;
