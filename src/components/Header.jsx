import React from "react";
// fixed-top bg-transparent shadow
const Header = () => {
  return (
    <nav className="bg-light ">
      <div className="rounded-pill fixed-top shadow p-3 text-center my-5 d-flex justify-content-around w-50 mx-auto"
       >
        <span className="underline-on-hover">About</span>
        <span className="underline-on-hover">Portfolio</span>
        <span className="underline-on-hover">Services</span>
        <span className="underline-on-hover">Blog</span>
        <span className="underline-on-hover">Contact</span>
      </div>
    </nav>
  );
};

export default Header;
