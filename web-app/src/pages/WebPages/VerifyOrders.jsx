import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import CommonBg from "./commonBg";
import { useNavigate } from "react-router-dom";

import VerifyOrderCard from "./VerifyCardOne";

const VerifyOrders = () => {
  const navigate = useNavigate();

  const handleIdRedirect = () => {
    navigate("/pickorder/1234");
  };

  return (
    <>
      <Col  >
        <div style={{height:"100vh", background:"white"}}>
          {/* <CommonBg verifyTitle={"Verify Orders"}/> */}
          <VerifyOrderCard />
        </div>
      </Col>
    </>
  );
};

export default VerifyOrders;
