import React from "react";
import { Card, Col, Input, Row } from "reactstrap";
import CommonBg from "./commonBg";
import dummyImg from "../../assets/images/dummyimg.jpg";

const PurchaseList = () => {
  return (
    <div style={{ width: "60%", margin: "auto" }}>
      <Card
        className="d-flex justify-content-center"
        style={{ background: "linear-gradient(to bottom, #E5FFFF, #FBFFFF)" }}
      >
        <CommonBg />

        <Col xxl={12} className="d-flex justify-content-center m-5">
          <div
            style={{
              border: "1px solid #ebe9e6",
              padding: "65px",
              backgroundColor: "white",
            }}
          >
            <div>
              <img src={dummyImg} style={{ height: "300px", width: "300px" }} />
            </div>
          </div>
        </Col>
        <Col xxl={12}>
          <div style={{ margin: "auto", width: "80%", marginTop: "20px" }}>
            <div
              style={{
                display: "flex",
                gap: "30px",
                margin: "14px",
                marginTop: "13px",
              }}
            >
              <div style={{ width: "55%" }}>
                <p style={{ fontSize: "16px" }}>
                  <b>
                    BUGATTI SPACESHIP 5% DISPOSABLE (150ml) 7K PUFFS 10CT/BOX
                    (BLUE GUMMY)
                  </b>
                </p>
              </div>
              <p className="d-flex justify-content-center">
                <span
                  className="badge bg-info text-black d-flex align-items-center"
                  style={{ fontSize: "1rem", padding: "5px" }}
                >
                  <i
                    className="ri-user-line me-1"
                    style={{ fontSize: "18px" }}
                  ></i>{" "}
                  18A56
                </span>
              </p>

              <div>
                <p>
                  <b>
                    Category
                    <br />
                    No Category No Category No{" "}
                  </b>
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col xxl={12}>
          <div style={{ width: "80%", margin: "auto" }}>
            <div style={{ display: "flex", gap: "10px", margin: "4px" }}>
              <div className="form-check card-radio w-25 float-end">
                <label
                  className="form-check-label"
                  htmlFor="listGroupRadioGrid1"
                >
                  <div className="d-flex align-items-center">
                    <div className="flex-grow-1 ms-3">
                      <h6 className="mb-1" style={{ fontSize: "13px" }}>
                        <b>ItemCode</b>
                      </h6>
                      <p>
                        <span className="text-info">BUGATTISPS7KD101</span>
                      </p>
                    </div>
                  </div>
                </label>
              </div>
              <div className="form-check card-radio w-10 float-end">
                <input
                  className="form-check-input"
                  type="radio"
                  name="listGroupRadioGrid"
                  id="listGroupRadioGrid1"
                />
                <label
                  className="form-check-label"
                  htmlFor="listGroupRadioGrid1"
                >
                  <div className="d-flex align-items-center">
                    <i
                      className="ri-qr-scan-2-line"
                      style={{ fontSize: "30px", marginRight: "10px" }}
                    ></i>
                    <div>
                      <h6 className="mb-1" style={{ fontSize: "13px" }}>
                        <b>BarCode</b>
                      </h6>
                      <p>
                        <span className="text-info">6598425487225</span>
                      </p>
                    </div>
                  </div>
                </label>
              </div>

              <div className="form-check card-radio w-25 float-end bg-success d-flex justify-content-center align-items-center">
                <div>
                  <div className="d-flex align-items-center">
                    <h6 className="mb-1" style={{ fontSize: "16px" }}>
                      <b>
                        On Hand{" "}
                        <span style={{ color: "#0A5028", fontSize: "23px" }}>
                          02
                        </span>
                      </b>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col xx={12} className="d-flex justify-content-end align-items-center">
          <i
            className="mdi mdi-plus-circle"
            style={{
              fontSize: "50px",
              color: "red",
              position: "relative",
              right: "30px",
            }}
          ></i>
        </Col>

        <Col xxl={12} className="d-flex justify-content-center">
          <div
            style={{
              display: "flex",
              gap: "30px",
              margin: "5px",
              marginBottom: "25px",
            }}
          >
            <button
              className="btn btn-info text-white"
              style={{
                width: "200px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <i
                className="ri-arrow-left-s-line"
                style={{ fontSize: "18px", marginRight: "5px" }}
              ></i>{" "}
              Previous
            </button>
          

            <button
              className="btn  text-info border border-info"
              style={{ width: "200px", background: "white" }}
            >
              6/10
            </button>

            <button
              className="btn btn-info text-white"
              style={{
                width: "200px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Next &nbsp;{" "}
              <i
                className="ri-arrow-right-s-line"
                style={{ fontSize: "18px", marginRight: "5px" }}
              ></i>
            </button>
          </div>
        </Col>
      </Card>
    </div>
  );
};

export default PurchaseList;
