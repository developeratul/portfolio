import "../styles/home/home.css";
import { useEffect } from "react";

// components
import Header from "../components/Home/Header";

const Home = () => {
  useEffect(() => {
    document.title = "DevR | Home";
  }, []);

  return (
    <div className="home_page">
      <Header />
    </div>
  );
};

export default Home;
