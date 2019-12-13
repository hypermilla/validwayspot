import React, { Component } from "react";

class HomeCover extends Component {
    render() {
        const logo = require("../images/wayfarer-index-logo.png");
        return (
          <div className="home-cover">
            <div className="app-logo">
              <img src={logo} />
            </div>
            <div className="top-credits">
              by{" "}
              <a href="https://twitter.com/hypermilla" target="_blank">
                @hypermilla
              </a>{" "}
              and{" "}
              <a href="https://twitter.com/elamhut" target="_blank">
                @elamhut
              </a>
            </div>
          </div>
        );
    }
}

export default HomeCover;
