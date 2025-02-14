import React from "react";
// rounded-pill fixed-top shadow p-3 text-center my-5 d-flex justify-content-around w-50 mx-auto
const Header = () => {
  return (
    <nav className="bg-light py-3">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-3 d-flex justify-content-center align-items-center">
            <h3>Company Logo</h3>
          </div>

          <div className="col-md-6  shadow d-flex my-3 rounded-pill p-3 justify-content-around">
            <div className="underline-on-hover">About</div>
            <div className="underline-on-hover">Portfolio</div>
            <div className="underline-on-hover">Services</div>
            <div className="underline-on-hover">Blog</div>
            <div className="underline-on-hover">Contact</div>
          </div>

          <div className="col-md-3 d-flex justify-content-center align-items-center">
            <button className="btn btn-lg rounded-0 btn-success">
              Collaborate with us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
