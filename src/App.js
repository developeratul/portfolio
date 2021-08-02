import { BrowserRouter, Switch, Route } from "react-router-dom";

// components
import Nav from "./components/Nav";

// pages
import Home from "./pages/Home";

const App = () => {
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
