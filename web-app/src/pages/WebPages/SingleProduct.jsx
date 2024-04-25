import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Input,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from "reactstrap";
import CommonBg from "./commonBg";
import style from "../../../src/styles/greenCard.module.css";

const SingleProduct = () => {
  const [modal_positionBottomRight, setmodal_positionBottomRight] =
    useState(false);
  function tog_positionBottomRight() {
    setmodal_positionBottomRight(!modal_positionBottomRight);
  }
  const singleProduct = JSON.parse(localStorage.getItem("singleProduct"));
  console.log("singleProduct", singleProduct);
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === singleProduct?.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? singleProduct?.length - 1 : prevIndex - 1
    );
  };
  return (
    <>
      <Col lg={12}>
        <div>
          <CommonBg />
          {singleProduct?.length > 0 && (
            <Card
              className="d-flex justify-content-center"
              style={{
                background: "linear-gradient(to bottom, #E5FFFF, #FBFFFF)",
              }}
            >
              <Col xxl={12} className="d-flex justify-content-center ">
                <div
                  style={{
                    border: "1px solid #ebe9e6",
                    padding: "65px",
                    backgroundColor: "white",
                  }}
                >
                  <div>
                    {singleProduct[currentIndex]?.productId?.productImage && (
                      <img
                        src={
                          singleProduct[currentIndex]?.productId?.productImage
                        }
                        style={{ height: "300px", width: "300px" }}
                      />
                    )}
                  </div>
                </div>
              </Col>
              <Col xxl={12}>
                <div
                  style={{ margin: "auto", width: "80%", marginTop: "20px" }}
                >
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
                          {singleProduct[currentIndex]?.productId?.productName}
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
                        {singleProduct[currentIndex]?.bin?.binNumber}
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
                              <span className="text-info">
                                {singleProduct[currentIndex]?.productId
                                  ?.isMultiVariant
                                  ? singleProduct[currentIndex]?.variantId
                                      ?.skuName
                                  : singleProduct[currentIndex]?.productId?.sku}
                              </span>
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
                              <span className="text-info">
                                {singleProduct[currentIndex]?.productId
                                  ?.itemInfo
                                  ? singleProduct[currentIndex]?.productId
                                      ?.itemInfo?.barCode
                                  : singleProduct[currentIndex]?.variantId
                                      ?.barCode}
                              </span>
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
                              <span
                                style={{ color: "#0A5028", fontSize: "23px" }}
                              >
                                {singleProduct[currentIndex]?.productId
                                  ?.itemInfo
                                  ? singleProduct[currentIndex]?.productId
                                      ?.itemInfo?.stockInHand
                                  : singleProduct[currentIndex]?.variantId
                                      ?.stockInHand}
                              </span>
                            </b>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col
                xx={12}
                className="d-flex justify-content-end align-items-center"
              >
                <i
                  className="mdi mdi-plus-circle"
                  style={{
                    fontSize: "50px",
                    color: "red",
                    position: "relative",
                    right: "30px",
                  }}
                  onClick={() => tog_positionBottomRight()}
                ></i>
                <Modal
                  id="bottom-rightModal"
                  isOpen={modal_positionBottomRight}
                  toggle={() => {
                    tog_positionBottomRight();
                  }}
                  className="modal-dialog-bottom-right"
                  style={{ 
                    width: "2.5%", 
                    background: "rgba(118, 127, 127, 0)", // Transparent background
                    border: "none" // Remove border if necessary
                  }}
                >
                  <div className="custom-modal-content">
                  <Button
                      style={{
                       
                        marginBottom: "5px",
                       
                        border:"none",
                        background:
                          "linear-gradient(90deg, #0172F7 2.1%, #00CEFB 99.98%)",
                      }}
                    >
                      <i className="ri-refresh-line fs-5"></i>
                    </Button>
                    <br />
                    <Button
                      style={{
                       
                        marginBottom: "5px",
                       
                        border:"none",
                        background:
                          "linear-gradient(337deg, #FECC1F 19.09%, #FFF500 132.59%)",
                      }}
                    >
                      <i className=" ri-share-forward-fill fs-5"></i>
                    </Button>

                    <br />
                    <Button
                      style={{
                       
                        marginBottom: "5px",
                       
                        border:"none",
                        background:
                          "#9E6EFF",
                      }}
                    >
                      <i className=" ri-indeterminate-circle-fill fs-5"></i>
                    </Button>
                    <br />
                    <Button
                      style={{
                       
                        marginBottom: "5px",
                       
                        border:"none",
                        background:
                          "#0AC078",
                      }}
                    >
                      <i className="las la-hand-pointer fs-5"></i>
                    </Button>
                    
                  </div>
                </Modal>
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
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
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
                    {currentIndex + 1}/{singleProduct?.length}
                  </button>

                  <button
                    className="btn btn-info text-white"
                    style={{
                      width: "200px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    onClick={handleNext}
                    disabled={singleProduct?.length - 1 === currentIndex}
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
          )}
        </div>
      </Col>
    </>
  );
};

export default SingleProduct;
