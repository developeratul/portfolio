// * This loader is created by Maxime Rossignol -> https://codepen.io/Maxoor/pen/JZZvXJ

import { useEffect } from "react";

const Loader = () => {
  useEffect(() => {
    document.title = "DevR | Loading...";
  }, []);

  return (
    <div className="loader">
      <div className="container">
        <div className="loader_container">
          <div class="animation-container">
            <div class="lightning-container">
              <div class="lightning white"></div>
              <div class="lightning red"></div>
            </div>
            <div class="boom-container">
              <div class="shape circle big white"></div>
              <div class="shape circle white"></div>
              <div class="shape triangle big yellow"></div>
              <div class="shape disc white"></div>
              <div class="shape triangle blue"></div>
            </div>
            <div class="boom-container second">
              <div class="shape circle big white"></div>
              <div class="shape circle white"></div>
              <div class="shape disc white"></div>
              <div class="shape triangle blue"></div>
            </div>
          </div>

          <h2>Loading...</h2>
        </div>
      </div>
    </div>
  );
};

export default Loader;
