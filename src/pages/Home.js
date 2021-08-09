import "../styles/home/home.css";
import { useEffect } from "react";
import Helmet from "react-helmet";
import assets from "../data/assets";

// components
import Header from "../components/Home/Header";
import About from "../components/Home/About";
import Portfolio from "../components/Home/Portfolio";
import Services from "../components/Home/Services";
import Contact from "../components/Home/Contact";
import WorkProcess from "../components/Home/WorkProcess";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home_page">
      <Helmet>
        <title>DevR | Home</title>
        <meta name="description" content="The page of DevR Portfolio" />
        <meta name="keywords" content="DevR Home, DevR, Developer Ratul" />

        <meta property="og:title" content="DevR | Home" />
        <meta
          property="og:description"
          content="The home page of devR's official portfolio site"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://devr.netlify.app/" />
        <meta property="og:image" content={assets.logo} />
        <meta property="og:site_name" content="DevR" />

        <meta property="twitter:title" content="DevR | Home" />
        <meta
          property="twitter:description"
          content="The home page of devR's official portfolio site"
        />
        <meta property="twitter:type" content="website" />
        <meta property="twitter:url" content="http://devr.netlify.app/" />
        <meta property="twitter:image" content={assets.logo} />
        <meta property="twitter:site_name" content="DevR" />

        <meta property="facebook:title" content="DevR | Home" />
        <meta
          property="facebook:description"
          content="The home page of devR's official portfolio site"
        />
        <meta property="facebook:type" content="website" />
        <meta property="facebook:url" content="http://devr.netlify.app/" />
        <meta property="facebook:image" content={assets.logo} />
        <meta property="facebook:site_name" content="DevR" />
      </Helmet>
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
