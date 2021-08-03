import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useRef } from "react";

// components
import Nav from "./components/Nav";
import Loader from "./components/Loader";

// pages
import Home from "./pages/Home";
import Footer from "./components/Footer";

const App = () => {
  const loaderRef = useRef();

  window.addEventListener("load", function () {
    const loader = loaderRef.current;

    // once the page has loaded I wanna take one more second
    this.setTimeout(() => {
      loader.style.transform = "translate(-100%)";
      this.setTimeout(() => {
        loader.style.display = "none";
      }, 500);
    }, 1000);
  });

  return (
    <BrowserRouter>
      <Loader loaderRef={loaderRef} />
      <Nav />

      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
