import React from 'react'
import {
    Card,
    CardBody,
    Col,

  } from "reactstrap";
  import style from "../../../src/styles/greenCard.module.css";
const GreenCard = () => {
  return (
    // <div>GreenCard</div>
    <>
        <Col xxl={6} style={{ width: "90%", margin: "auto" }}>
            <Card className={` bg-success-subtle  text-success ${style.greenBox}`}>
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
    </>
  )
}

export default GreenCard