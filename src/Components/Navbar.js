import React from "react";

function Navbar() {
  return (
    <div className="  pt-4 ps-4 pe-4 ms-5 me-5" style={{ maxHeight: "100px" }}>
      <div className="pt-2 row">
        <div className="col-auto ">
          <img src={process.env.PUBLIC_URL + "/images/menu.png"} alt="menu" />
          <span>Menu</span>
        </div>
        <div className="col-auto ms-auto me-auto">
          <img
            className="w-auto"
            style={{ height: "100px" }}
            src={process.env.PUBLIC_URL + "/images/logo.png"}
            alt="logo"
          />
        </div>
        <div className="col-auto">
          <span className="p-4 m-4">Brew tour</span>
          <span className="p-4 m-4" style={{ border: " 2px solid #FFFFFF" }}>
            FIND MY BEER
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
