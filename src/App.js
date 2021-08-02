import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// components
import Nav from "./components/Nav";
import Loader from "./components/Loader";

// pages
import Home from "./pages/Home";

const App = () => {
  const [loading, setLoading] = useState(true);

  window.addEventListener("load", function () {
    setLoading(false);
  });

  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <Nav />

      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
