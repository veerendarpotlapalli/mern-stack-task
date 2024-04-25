import React from 'react'
import { Card, CardBody, Col } from "reactstrap";
import { FaLocationDot } from "react-icons/fa6";
const Verify = () => {
  return (
    <div>
      <Col xl={12}>
        <Card className="border-1 rounded-4">
          <CardBody className="d-flex align-items-center justify-content-between flex-wrap">
            <div className="d-flex align-items-center gap-4 flex-wrap">
              <div className="flex-shrink-0 shadow border-1">
                <img src={""} alt="" className="avatar-sm rounded" />
              </div>

              <div className="flex-grow-1 mt-1">
                <p className="card-text" style={{ width: "60%" }}>
                  <span className="fw-medium">
                    BUGATTI SPACESHIP 5% DISPOSABLE (150ML) 7K PUFFS IOCT/ BOX
                    (BLUE GUMMY)
                  </span>
                </p>
                <div className="d-flex align-items-center  gap-3 flex-wrap">
                  <div className="mb-4">
                    <FaLocationDot />
                  </div>
                  <p>18A56</p>
                  <p
                    style={{
                      color: "#0C447B",
                      fontWeight: 600,
                      fontStyle: "italic",
                    }}
                  >
                    BUGATTISPS7KD101
                  </p>

                  <p
                    className="bg-info-subtle d-flex align-items-center 
                  gap-2 flex-wrap shadow border-1   rounded-1"
                    style={{ padding: "4px", fontWeight: 600 }}
                  >
                    <i className="ri-qr-scan-2-line fs-5 text-dark"></i>
                    6598425487225
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-dark">To Pick</p>
              
                <p className="bg-danger-subtle text-danger  p-2 fw-700">0/3</p>
             
              <p className="text-dark">3 on Hand</p>
            </div>
          </CardBody>
        </Card>
      </Col>
    </div>
  )
}

export default Verify