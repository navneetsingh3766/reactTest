import React from 'react'

function Hero2() {
  return (
    <div className="row w-100 m-0" style={{ height: "550px" }}>
        <div className=" col p-0 position-relative h-100">
          <img
            src={process.env.PUBLIC_URL + "/images/Rectangle 4.png"}
            alt="box"
            className="w-100 h-100 "
            style={{ mixBlendMode: "luminosity" }}
          />
          <div className="position-absolute bottom-0 start-0 ps-4 pe-4">
            <h3 className=" " style={{ fontWieght: "600", fontSize: "50px" }}>
              BARS
            </h3>
            <p className=" ">Lorem Ipsum Dollor Dummy Text should be here</p>
          </div>
        </div>
        <div className=" col p-0 position-relative h-100">
          <img
            src={process.env.PUBLIC_URL + "/images/Rectangle 5.png"}
            alt="box"
            className="w-100 h-100"
          />
          <div className="position-absolute bottom-0 start-0 ps-4 pe-4">
            <h3 className=" " style={{ fontWieght: "600", fontSize: "50px" }}>
              BEERS
            </h3>
            <p className=" ">Lorem Ipsum Dollor Dummy Text should be here</p>
          </div>
        </div>
        <div className=" col p-0 position-relative h-100">
          <img
            src={process.env.PUBLIC_URL + "/images/Rectangle 6.png"}
            alt="box"
            className="w-100 h-100"
          />
          <div className="position-absolute bottom-0 start-0 ps-4 pe-4">
            <h3 className=" " style={{ fontWieght: "600", fontSize: "50px" }}>
              BREWERY
            </h3>
            <p className=" ">Lorem Ipsum Dollor Dummy Text should be here</p>
          </div>
        </div>
      </div>
  )
}

export default Hero2