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
import VerifyInprogress from "./VerifyInprogress";
import Verify from "./Verify";
import { getSingleSalesData } from "../../slices/thunks";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import BlueCard from "./BlueCard";
import GreenCard from "./GreenCard";

const VerifyOrder = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [pickList, setPickList] = useState("");
  const [custDetails, setCustDetails] = useState(false);
  const [pickerDetails, setPickerDetails] = useState(null);

  useEffect(() => {
    const payload = {
      id: id,
    };
    if (id) {
      dispatch(getSingleSalesData(payload)).then((res) => {
        if (res?.payload?.status) {
          setPickList(res?.payload?.data?.orderItemId);
          setCustDetails(true);
          setPickerDetails(res?.payload?.data);
        }
      });
    }
  }, [id]);
  const [arrowNavTab, setarrowNavTab] = useState("1");

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
  return (
    <>
      <Col>
        <div style={{ height: "100vh", background: "white" }}>
          <CommonBg
            custDetails={custDetails}
            accountNo={custDetails ? pickerDetails?.accountNo : null}
            compName={custDetails ? pickerDetails?.businessAddress : null}
          />
          <SearchBoxHead />

          <GreenCard />

          <BlueCard />

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
                          <div className="flex-grow-1 me-3">
                            <VerifyInprogress />
                          </div>
                          <div className="flex-shrink-0"></div>
                        </div>
                      </TabPane>
                      <TabPane tabId="2" id="arrow-profile">
                        <div className="d-flex mb-1">
                          <div className="flex-grow-1 me-3">
                            <Verify />
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
                            VERIFY
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
                          <div className="flex-grow-1 me-3">
                            {pickList?.length > 0 &&
                              pickList?.map((item) => (
                                <VerifyInprogress item={item} />
                              ))}
                          </div>
                          <div className="flex-shrink-0"></div>
                        </div>
                      </TabPane>
                      <TabPane tabId="2" id="arrow-profile">
                        <div className="d-flex mb-1">
                          <div className="flex-grow-1 me-3">
                            <Verify />
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
        </div>
      </Col>
    </>
  );
};

export default VerifyOrder;
