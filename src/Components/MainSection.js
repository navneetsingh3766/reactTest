import React from "react";

function MainSection() {
  return (
    <div className="hero-height" style={{}}>
      <div className="h-100 d-flex justify-content-center position-relative">
        <div className="text-white d-flex flex-column align-content-center align-items-center justify-content-center">
          <span className="hero-font">TOIT </span>
          <span className="hero-font">BEER </span>
        </div>
        <div
          style={{ bottom: "30px", left: "45%" }}
          className="text-white position-absolute d-flex flex-column align-content-center align-items-center justify-content-center"
        >
          <span>&darr;</span>
          <span>SCROLL DOWN</span>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
