import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import CommonBg from "./commonBg";
import PickOrder from "./PickOrder";
import { useNavigate } from "react-router-dom";
import OrderCard from "./OrderCard";

const Orders = () => {
  const navigate = useNavigate();

  const handleIdRedirect = () => {
    navigate("/pickorder/1234");
  };

  return (
    <>
      <Col lg={12}>
        <Card>
          {/* <CommonBg /> */}
          <OrderCard />
        </Card>
      </Col>
    </>
  );
};

export default Orders;
