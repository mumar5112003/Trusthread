import React from "react";
import { useState,useContext } from "react";
import { DataContext } from "../App";


function Adminhome() {
  const { sale,rev } = useContext(DataContext);
  return (
    <>
      <div
        className="text-center"
        style={{
          height: "15%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "2em",
        }}
      >
        Welcome Home
      </div>
      <div className="container-fluid " style={{ height: "30%" }}>
        <div className="row">
          <div
            className="col-md-3 d-flex align-items-center justify-content-center rounded"
            style={{ backgroundColor: "#FFEB3B", height: "150px" }}
          >
            <div className="text-center">
              <h2>Sales total</h2>
              <h3>{sale}</h3>
            </div>
          </div>
          <div className="col-md-1"></div>
          <div
            className="col-md-3 d-flex align-items-center justify-content-center rounded"
            style={{ backgroundColor: "#FFD600", height: "150px" }}
          >
            <div className="text-center">
              <h2>Total Reviews</h2>
              <h3>{rev}</h3>
            </div>
          </div>
          <div className="col-md-1"></div>
          <div
            className="col-md-3 d-flex align-items-center justify-content-center rounded"
            style={{ backgroundColor: "#FFC107", height: "150px" }}
          >
            <div className="text-center">
              <h2>Total Earning</h2>
              <h3>{rev * sale}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Adminhome;
