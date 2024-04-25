import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Col,
  Input,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import CommonBg from "./commonBg";
import classnames from "classnames";
import SearchBoxHead from "./searchBoxHead";
// import dummyImg from "../../../src/assets/images/dummyImg.jpg";
import style from "../../../src/styles/pickorder.module.css";
import { MdOutlinePending } from "react-icons/md";
import InProgess from "./InProgess";
import Complete from "./Complete";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getSingleSalesData } from "../../slices/crm/thunk";

const PickOrder = () => {
  const dispatch = useDispatch();
  const [arrowNavTab, setarrowNavTab] = useState("1");
  const { id } = useParams();
  const [orderItem, setOrderItem] = useState([]);
  const [pickerDetails, setPickerDetails] = useState(null);
  const [custDetails, setCustDetails] = useState(false);
  const [scanBarcode,setScanBarocde] = useState(null);

  // console.log('orderItem',orderItem);

  const inprogressData = orderItem?.filter((item)=>item?.balanceQuantity > 0);
  const completedData = orderItem?.filter((item)=>item?.pickedQuantity + item?.shortQuantity ===item?.quantity);

  // console.log('completed data',completedData);




  // console.log('scanData',scanData);

  const togetBarcodeNumber=(val)=>{
    setScanBarocde(val);
  }

  // console.log("pickerDetails", pickerDetails);
  // console.log('id',id);
  const arrowNavToggle = (tab) => {
    if (arrowNavTab !== tab) {
      setarrowNavTab(tab);
    }
  };

  const [lightNavTab, setlightNavTab] = useState("1");
  const lightNavToggle = (tab) => {
    if (lightNavTab !== tab) {
      setlightNavTab(tab);
    }
  };

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 960);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const payload = {
      id: id,
    };
    if (id) {
      dispatch(getSingleSalesData(payload)).then((res) => {
        if (res?.payload?.status) {
          setCustDetails(true);
          setOrderItem(res?.payload?.data?.orderItemId);
          setPickerDetails(res?.payload?.data);
        }
      });
    }
  }, [id]);

  return (
    <>
      <Col lg={12}>
        <Card>
          <CommonBg
            custDetails={custDetails}
            accountNo={custDetails ? pickerDetails?.accountNo : null}
            compName={custDetails ? pickerDetails?.businessAddress : null}
          />
          <SearchBoxHead id={id} setOrderItem={setOrderItem} togetBarcodeNumber={togetBarcodeNumber} />

          <Col xxl={6} style={{ width: "90%", margin: "auto" }}>
            <Card className="border-1 border-success bg-success-subtle rounded-4 text-success">
              <CardBody className="d-flex align-items-center justify-content-between flex-wrap">
                <div className="d-flex align-items-center gap-4 flex-wrap">
                  <div className="flex-shrink-0 text-align-center">
                    <i className="ri-checkbox-circle-fill align-items-center fs-2  pb-0 mt-4" />
                    <p className="mt-0 text-success">QTY Picked</p>
                  </div>
                  <div className="flex-shrink-0 shadow border-1">
                    <img src={""} alt="" className="avatar-sm rounded" />
                  </div>
                  <div className="flex-grow-1 mb-4">
                    <p className="card-text" style={{ width: "60%" }}>
                      <span className="fw-medium">
                        BUGATTI SPACESHIP 5% DISPOSABLE (150ML) 7K PUFFS IOCT/
                        BOX (BLUE GUMMY)
                      </span>
                    </p>
                  </div>
                </div>
                <div>
                  <p className="bg-danger-subtle text-danger  p-2 fw-700">
                    0/3
                  </p>
                </div>
              </CardBody>
            </Card>
          </Col>
          {isSmallScreen ? (
            <>
              <Col xxl={6} style={{ width: "90%", margin: "auto" }}>
                <Card>
                  <CardBody>
                    <Nav pills className={style.navTab}>
                      <div style={{ width: "19%", textAlign: "center" }}>
                        <NavItem>
                          <NavLink
                            style={{
                              cursor: "pointer",
                              backgroundColor:
                                arrowNavTab === "1" ? "#FFFFFF" : "#FFFFFF40", // White background for active
                              color:
                                arrowNavTab === "1" ? "#2F4C8F " : "#FFFFFF",
                              fontWeight: arrowNavTab === "1" ? "bold" : "",

                              borderRadius: "6px 6px 0px 0px", // Blue text color for active
                            }}
                            onClick={() => {
                              arrowNavToggle("1");
                            }}
                          >
                            <MdOutlinePending />
                            {/* INPROGRESS */}
                          </NavLink>
                        </NavItem>
                      </div>
                      <div
                        style={{
                          width: "19%",
                          height: "100%",
                          textAlign: "center",
                        }}
                      >
                        <NavItem>
                          <NavLink
                            style={{
                              cursor: "pointer",
                              backgroundColor:
                                arrowNavTab === "2" ? "#FFFFFF" : "#FFFFFF40", // White background for active
                              color:
                                arrowNavTab === "2" ? "#2F4C8F " : "#FFFFFF",
                              fontWeight: arrowNavTab === "2" ? "bold" : "",

                              borderRadius: "6px 6px 0px 0px", // Blue text color for active
                            }}
                            onClick={() => {
                              arrowNavToggle("2");
                            }}
                          >
                            <i className="bx bx-check-square" />
                            {/* COMPLETED */}
                          </NavLink>
                        </NavItem>
                      </div>
                    </Nav>

                    <TabContent
                      activeTab={arrowNavTab}
                      className="text-muted mt-4"
                    >
                      <TabPane tabId="1" id="arrow-overview">
                        <div className="d-flex mb-1">
                          <div className="flex-grow-1 ">
                            {inprogressData?.length > 0 &&
                              inprogressData?.map((item) => (
                                <InProgess item={item} orderItem={inprogressData} />
                              ))}
                          </div>
                          <div className="flex-shrink-0"></div>
                        </div>
                      </TabPane>
                      <TabPane tabId="2" id="arrow-profile">
                        <div className="d-flex mb-1">
                          <div className="flex-grow-1 me-3">
                            {completedData?.length > 0 && completedData?.map((item)=>(
                            <Complete item={item} orderItem={completedData} />
                            ))}
                          </div>
                          <div className="flex-shrink-0"></div>
                        </div>
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>
              </Col>
            </>
          ) : (
            <>
              <Col xxl={6} style={{ width: "90%", margin: "auto" }}>
                <Card>
                  <CardBody>
                    <Nav pills className={style.navTab}>
                      <div style={{ width: "19%", textAlign: "center" }}>
                        <NavItem>
                          <NavLink
                            style={{
                              cursor: "pointer",
                              backgroundColor:
                                arrowNavTab === "1" ? "#FFFFFF" : "#FFFFFF40", // White background for active
                              color:
                                arrowNavTab === "1" ? "#2F4C8F " : "#FFFFFF",
                              fontWeight: arrowNavTab === "1" ? "bold" : "",

                              borderRadius: "6px 6px 0px 0px", // Blue text color for active
                            }}
                            onClick={() => {
                              arrowNavToggle("1");
                            }}
                          >
                            INPROGRESS
                          </NavLink>
                        </NavItem>
                      </div>
                      <div
                        style={{
                          width: "19%",
                          height: "100%",
                          textAlign: "center",
                        }}
                      >
                        <NavItem>
                          <NavLink
                            style={{
                              cursor: "pointer",
                              backgroundColor:
                                arrowNavTab === "2" ? "#FFFFFF" : "#FFFFFF40", // White background for active
                              color:
                                arrowNavTab === "2" ? "#2F4C8F " : "#FFFFFF",
                              fontWeight: arrowNavTab === "2" ? "bold" : "",

                              borderRadius: "6px 6px 0px 0px", // Blue text color for active
                            }}
                            onClick={() => {
                              arrowNavToggle("2");
                            }}
                          >
                            COMPLETED
                          </NavLink>
                        </NavItem>
                      </div>
                    </Nav>

                    <TabContent
                      activeTab={arrowNavTab}
                      className="text-muted mt-4"
                    >
                      <TabPane tabId="1" id="arrow-overview">
                        <div className="d-flex mb-1">
                          <div className="flex-grow-1 ">
                            {inprogressData?.length > 0 &&
                              inprogressData?.map((item) => (
                                <InProgess item={item} orderItem={inprogressData} />
                              ))}
                          </div>
                          <div className="flex-shrink-0"></div>
                        </div>
                      </TabPane>
                      <TabPane tabId="2" id="arrow-profile">
                        <div className="d-flex mb-1">
                          <div className="flex-grow-1 ">
                            {completedData?.length > 0 && completedData?.map((item)=>(
                            <Complete item={item} orderItem={completedData} />
                            ))}
                          </div>
                          <div className="flex-shrink-0"></div>
                        </div>
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>
              </Col>
            </>
          )}
        </Card>
      </Col>
    </>
  );
};

export default PickOrder;
