import React from "react";

function About() {
  return (
    <div className="pb-5 overflow-hidden" style={{}}>
      <div className="m-5 p-5 position-relative">
    
    <div className="d-flex justify-content-end position-absolute top-0 end-0 m-5 p-5">
      <div className="position-relative " style={{width:"40vw" , zIndex:"-1"}}>

      <img src={process.env.PUBLIC_URL + "/images/about.png"} alt="about" className="img-fluid 
      " />
      <div className="position-absolute w-100 h-100 top-0 start-0 about-img-color"></div>
      <span className="hori-line"></span>
      </div>
    </div >
      <div className="d-flex justify-content-end  flex-column" style={{width:"30vw"}}>
        <div style={{fontWeight:400, }}>
          ABOUT US
        </div>
          <h3 style={{width:"70vw" , fontWeight:700,fontSize:"90px"}} className="d-flex justify-content-start">
          We are Toit.<br/>
          You should be too…
          </h3>
          <p>
          Toit is a brew pub, brewing a revolutionary culture.
          We started out as a sweet little Bengaluru brewing culture with the promise of some bodacious brews, fabulous foods and a supreme brew-pub experience
          </p>
          <span style={{color:"#CA9E67"}}>EXPLORE</span>
        </div>
    </div>
    </div>);
}

export default About;
