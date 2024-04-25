import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import { FaLocationDot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const InProgess = ({ item,orderItem }) => {
  const navigate = useNavigate();
  const handleRedirectWithData = () => {
    localStorage.setItem("singleProduct", JSON.stringify(orderItem));
    navigate("/product-overview");
  };
  return (
    <div onClick={handleRedirectWithData}>
      <Col xl={12}>
        <Card className="border-1 rounded-4" style={{cursor:"pointer"}}>
          <CardBody className="d-flex align-items-center justify-content-between flex-wrap">
            <div className="d-flex align-items-center gap-4 flex-wrap">
              <div className="flex-shrink-0 shadow border-1">
                <img
                  src={item?.productId?.productImage}
                  alt=""
                  className="avatar-sm rounded"
                />
              </div>

              <div className="flex-grow-1 mt-1">
                <p className="card-text" style={{ width: "60%" }}>
                  <span className="fw-medium">
                    {item?.productId?.productName}
                  </span>
                </p>
                <div className="d-flex align-items-center  gap-3 flex-wrap">
                  <div className="mb-4">
                    <FaLocationDot />
                  </div>
                  <p>{item?.bin?.binNumber}</p>
                  <p
                    style={{
                      color: "#0C447B",
                      fontWeight: 600,
                      fontStyle: "italic",
                    }}
                  >
                    {item?.productId?.isMultivariant
                      ? item?.variantId?.skuName
                      : item?.productId?.sku}
                  </p>

                  <p
                    className="bg-info-subtle d-flex align-items-center 
                  gap-2 flex-wrap shadow border-1   rounded-1"
                    style={{ padding: "4px", fontWeight: 600 }}
                  >
                    <i className="ri-qr-scan-2-line fs-5 text-dark"></i>
                    {item?.productId?.itemInfo
                      ? item?.productId?.itemInfo?.barCode
                      : item?.variantId?.barCode}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-dark">To Pick</p>
              <p className="bg-danger-subtle text-danger  p-2 fw-700">
                {item?.pickedQuantity}/{item?.quantity}
              </p>
              <p className="text-dark">
                {item?.productId?.itemInfo
                  ? item?.productId?.itemInfo?.stockInHand || 0
                  : item?.variantId?.stockInHand}{" "}
                on Hand
              </p>
            </div>
          </CardBody>
        </Card>
      </Col>
    </div>
  );
};

export default InProgess;
