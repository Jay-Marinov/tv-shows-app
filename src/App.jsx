import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import SingleShow from "./pages/SingleShow";
import Error from "./pages/Error";
import MyShows from "./pages/MyShows";

import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="container-fluid main">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/myshows">
            <MyShows />
          </Route>
          <Route path="/show/:id">
            <SingleShow />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
