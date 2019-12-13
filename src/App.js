import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Tabletop from "tabletop";
import _ from "lodash";

import HomeCover from "./components/homecover";
import HomePage from "./components/homepage";
import ResultsPage from "./components/resultspage"; 
import HomeFooter from "./components/homefooter";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main">
        <Router>
          <HomeCover />
          <div className="container">
            <h1 className="app-title">Is it a valid Wayspot?</h1>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/:tag" component={ResultsPage} />
            </Switch>
          </div>
          <HomeFooter />
        </Router>
      </div>
    );
  }
}

export default App;
