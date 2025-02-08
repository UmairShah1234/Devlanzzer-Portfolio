import { Language } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";

const Service = () => {
  return (
    <>
      <div className="container">
        <h3 className="fw-bold ">Services</h3>
        <div className="row justify-content-center">
          <div
            className="card shadow-lg col-md-4 border-0 m-3 p-1"
            style={{ width: "20rem" }}
          >
            <IconButton size="large">
              <Language />
            </IconButton>
            <h5 className="card-title text-center fw-bold">Web Development</h5>
            <div className="card-body">
              <p className="card-text text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam, nemo.
              </p>
            </div>
          </div>
          <div
            className="card shadow-lg col-md-4 border-0 m-3 p-1"
            style={{ width: "20rem" }}
          >
            <IconButton size="large">
              <Language />
            </IconButton>
            <h5 className="card-title text-center fw-bold">UI/UX Design</h5>
            <div className="card-body">
              <p className="card-text text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam, nemo.
              </p>
            </div>
          </div>
          <div
            className="card shadow-lg col-md-4 border-0 m-3 p-1"
            style={{ width: "20rem" }}
          >
            <IconButton size="large">
              <Language />
            </IconButton>
            <h5 className="card-title text-center fw-bold">Web Development</h5>
            <div className="card-body">
              <p className="card-text text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam, nemo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
