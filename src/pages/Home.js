import "../styles/home/home.css";
import { useEffect } from "react";

// components
import Header from "../components/Home/Header";
import About from "../components/Home/About";
import Portfolio from "../components/Home/Portfolio";
import Services from "../components/Home/Services";
import Contact from "../components/Home/Contact";
import WorkProcess from "../components/Home/WorkProcess";

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
      <WorkProcess />
      <Contact />
    </div>
  );
};

export default Home;
