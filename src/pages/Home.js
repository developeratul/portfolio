import "../styles/home/home.css";
import { useEffect } from "react";

// components
import Header from "../components/Home/Header";
import About from "../components/Home/About";

const Home = () => {
  useEffect(() => {
    document.title = "DevR | Home";
  }, []);

  return (
    <div className="home_page">
      <Header />
      <About />
    </div>
  );
};

export default Home;
