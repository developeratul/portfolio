import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useRef } from "react";

// components
import Nav from "./components/Nav";
import Loader from "./components/Loader";
import Footer from "./components/Footer";

// pages
import Home from "./pages/Home";

const App = () => {
  const loaderRef = useRef();

  window.addEventListener("load", function () {
    const loader = loaderRef.current;
    loader.style.transform = "translate(-100%)";
    this.setTimeout(() => {
      loader.style.display = "none";
    }, 500);
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
