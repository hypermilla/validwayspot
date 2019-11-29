import React, { Component } from "react";

class HomeCover extends Component {
    render() {

        const logo = require("../images/wayfarer-index-logo.png");

        return (
          <div className="home-cover">
            <div className="app-logo">
              <img src={logo} />
            </div>
          </div>
        );
    }
}

export default HomeCover;
