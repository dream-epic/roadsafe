import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import * as pages from "./pages";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={pages.HomePage} />
        <Route exact path="/map" component={pages.MapPage} />
        <Route exact path="/service" component={pages.ServicePage} />
      </Switch>
    </Router>
  );
}

export default App;
