import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Row, Input } from "reactstrap";
import CommonBg from "../WebPages/commonBg";
import profileIcon from "../../profileIcon.svg";
import { createSelector } from "reselect";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const jobCategories = [
    {
      id: 1,
      icon: "bx bxs-dashboard",
      lable: " Dashboard",
      link: "/dashboard",
    },
    {
      id: 2,
      icon: "bx bx-barcode-reader",
      lable: "Items",
      // link: "/barcode",
    },
    {
      id: 3,
      icon: "bx bx-border-all",
      lable: "Employes List",
      link: "/pick-orders",
    },
    {
      id: 4,
      icon: "bx bx-category-alt",
      lable: "Verify Orders",
      // link: "/#",
    },
    {
      id: 5,
      icon: " bx bx-info-square",
      lable: "Recive Inventory",
      // link: "/stock",
    },
    {
      id: 6,
      icon: "bx bx-money",
      lable: "Purchase Orders",
      // link: "/purchase",
    },
  ];

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const profiledropdownData = createSelector(
    (state) => state.Profile.user,
    (user) => user
  );

  const user = useSelector(profiledropdownData);

  const [userName, setUserName] = useState("Admin");

  useEffect(() => {
    if (sessionStorage.getItem("authUser")) {
      const obj = JSON.parse(sessionStorage.getItem("authUser"));
      setUserName(
        process.env.REACT_APP_DEFAULTAUTH === "fake"
          ? obj.userName
            ? user.userName
              ? user.userName
              : obj.userName
            : "Admin" || "Admin"
          : process.env.REACT_APP_DEFAULTAUTH === "firebase"
          ? obj.email && obj.email
          : "Admin"
      );
    }
  }, [userName, user]);

  return (
    // <div style={{ width: "100%", margin: "auto", height:"100%",,background: "linear-gradient(to bottom, #E5FFFF, #FBFFFF)" }}>
    //   <Card
    //     className="d-flex justify-content-center"

    //   >
    //     <CommonBg />
    //     <div style={{  margin: "auto", }}>
    //       {" "}
    //       <div style={{}}>
    //         <div
    //           style={{
    //             display: "flex",
    //             flexDirection: "row",
    //             alignItems: "center",
    //             justifyContent: "space-between",
    //           }}
    //         >
    //           <div
    //             style={{
    //               display: "flex",
    //               flexDirection: "row",
    //               columnGap: "5px",
    //               margin: "15px",
    //             }}
    //           >
    //             <img
    //               src={profileIcon}
    //               className="avatar-xxs rounded-circle me-1"
    //               alt=""
    //             />
    //             <h5>{userName}</h5>
    //           </div>
    //           <div
    //             className="form-check form-switch form-switch-md mb-3"
    //             dir="ltr"
    //           >
    //             <Input
    //               type="checkbox"
    //               className="form-check-input"
    //               id="customSwitchsizemd"
    //               onChange={handleCheckboxChange}
    //               checked={isChecked}
    //             />
    //           </div>
    //         </div>

    //         <CardBody>
    //           {isChecked ? (
    //             <Col lg={12}
    //               className="justify-content-center"
    //               style={{ margin: "10px" }}
    //             >
    //               {jobCategories.map((item, key) => (
    //                 <Card style={{ width: "650px", margin: "" }}>
    //                   <CardBody className="text-center py-4">
    //                     <div
    //                       style={{
    //                         display: "flex",
    //                         flexDirection: "row",
    //                         alignItems: "center",
    //                         justifyContent: "space-between",
    //                       }}
    //                     >
    //                       <div
    //                         style={{
    //                           display: "flex",
    //                           flexDirection: "row",
    //                           alignItems: "center",
    //                           columnGap: "15px",
    //                         }}
    //                       >
    //                         <i
    //                           className={item.icon}
    //                           style={{ fontSize: "50px" }}
    //                         ></i>
    //                         <Link
    //                           to={item.link}
    //                           className="stretched-link"
    //                           style={{ textDecoration: "none" }}
    //                         >
    //                           <h5 className="">{item.lable}</h5>
    //                         </Link>
    //                       </div>
    //                       <div>
    //                         <i
    //                           className="ri-arrow-right-s-line"
    //                           style={{ fontSize: "50px" }}
    //                         ></i>
    //                       </div>
    //                     </div>
    //                   </CardBody>
    //                 </Card>
    //               ))}
    //             </Col>
    //           ) : (
    //             <Col
    //               className="justify-content-center"
    //               style={{
    //                 display: "grid",
    //                 gridTemplateColumns: "repeat(2, 1fr)",
    //                 gap: "20px",
    //               }}
    //             >
    //               {jobCategories.map((item, key) => (
    //                 <Col key={key}>
    //                   <Card style={{ width: "250px" }}>
    //                     <CardBody className="text-center py-4">
    //                       <i
    //                         className={item.icon}
    //                         style={{ fontSize: "50px" }}
    //                       ></i>
    //                       <Link
    //                         to={item.link}
    //                         className="stretched-link"
    //                         style={{ textDecoration: "none" }}
    //                       >
    //                         <h5 className="mt-4">{item.lable}</h5>
    //                       </Link>
    //                     </CardBody>
    //                   </Card>
    //                 </Col>
    //               ))}
    //             </Col>
    //           )}
    //         </CardBody>
    //       </div>
    //     </div>
    //   </Card>

    // </div>
    <>
      <Col lg={12}>
        <div>
          <CardBody style={{background:"white"}}>
            <CommonBg />
            <div >
              <div className="d-flex justify-content-center">
                
                <div style={{ margin: "auto" }}>
                  {" "}
                  <div style={{}}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          columnGap: "5px",
                          margin: "15px",
                        }}
                      >
                        <img
                          src={profileIcon}
                          className="avatar-xxs rounded-circle me-1"
                          alt=""
                        />
                        <h5>{userName}</h5>
                      </div>
                      <div
                        className="form-check form-switch form-switch-md mb-3"
                        dir="ltr"
                      >
                        <Input
                          type="checkbox"
                          className="form-check-input"
                          id="customSwitchsizemd"
                          onChange={handleCheckboxChange}
                          checked={isChecked}
                        />
                      </div>
                    </div>

                    <CardBody style={{background:"white",height:"100vh"}}>
                      {isChecked ? (
                        <Col
                          lg={12}
                          className="justify-content-center"
                          style={{ margin: "10px" }}
                        >
                          {jobCategories.map((item, key) => (
                            <Card style={{ width: "650px", }}>
                              <CardBody className="text-center py-4">
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <div
                                    style={{
                                      display: "flex",
                                      flexDirection: "row",
                                      alignItems: "center",
                                      columnGap: "15px",
                                    }}
                                  >
                                    <i
                                      className={item.icon}
                                      style={{ fontSize: "50px" }}
                                    ></i>
                                    <Link
                                      to={item.link}
                                      className="stretched-link"
                                      style={{ textDecoration: "none" }}
                                    >
                                      <h5 className="">{item.lable}</h5>
                                    </Link>
                                  </div>
                                  <div>
                                    <i
                                      className="ri-arrow-right-s-line"
                                      style={{ fontSize: "50px" }}
                                    ></i>
                                  </div>
                                </div>
                              </CardBody>
                            </Card>
                          ))}
                        </Col>
                      ) : (
                        <div style={{background:"white", height:"100vh"}}>
                          <Col lg={12}
                          className="justify-content-center"
                          style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(2, 1fr)",
                            gap: "20px",
                          }}
                        >
                          {jobCategories.map((item, key) => (
                            <Col key={key}>
                              <Card style={{ width: "250px" }}>
                                <CardBody className="text-center py-4">
                                  <i
                                    className={item.icon}
                                    style={{ fontSize: "50px" }}
                                  ></i>
                                  <Link
                                    to={item.link}
                                    className="stretched-link"
                                    style={{ textDecoration: "none" }}
                                  >
                                    <h5 className="mt-4">{item.lable}</h5>
                                  </Link>
                                </CardBody>
                              </Card>
                            </Col>
                          ))}
                        </Col>
                        </div>
                      )}
                    </CardBody>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </div>
      </Col>
    </>
  );
};

export default Dashboard;
