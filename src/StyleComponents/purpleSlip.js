import React from "react";
import "../assets/about.css";

var stylingObject = {
  purpleSlipStyle: {
    zIndex: "50",
    height: "60px",
    width: "0px",
    marginTop: " -60px",
    marginBottom: "20px",
    marginLeft: "calc(50% - 100px)",
    transition: "0.15s all ease-in-out",
    backgroundImage:
      "linear-gradient( to right, rgb(138, 134, 190, 0.7),  rgb(238, 224, 251, 0.7) )",
  },
};

function purpleSlip(props) {
  return (
    <div className="App">
      <div className="App-text about">
        <div className="about-text__title">
          <p>heyyy members here</p>
        </div>
      </div>
    </div>
  );
}

export default purpleSlip;
