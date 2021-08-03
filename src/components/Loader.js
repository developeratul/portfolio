// * This loader is created by Maxime Rossignol -> https://codepen.io/Maxoor/pen/JZZvXJ

import { useEffect } from "react";

const Loader = ({ loaderRef }) => {
  useEffect(() => {
    document.title = "DevR | Loading...";
  }, []);

  return (
    <div className="loader" ref={loaderRef}>
      <div className="container">
        <div className="loader_container">
          <div className="animation-container">
            <div className="lightning-container">
              <div className="lightning white"></div>
              <div className="lightning red"></div>
            </div>
            <div className="boom-container">
              <div className="shape circle big white"></div>
              <div className="shape circle white"></div>
              <div className="shape triangle big yellow"></div>
              <div className="shape disc white"></div>
              <div className="shape triangle blue"></div>
            </div>
            <div className="boom-container second">
              <div className="shape circle big white"></div>
              <div className="shape circle white"></div>
              <div className="shape disc white"></div>
              <div className="shape triangle blue"></div>
            </div>
          </div>

          <h2>Loading...</h2>
        </div>
      </div>
    </div>
  );
};

export default Loader;
