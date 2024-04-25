import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import stockwithBar from "../../assets/web-app-image/stockwithBar.png";
import style from "../../../src/styles/pickorder.module.css";
const BlueCard = () => {
  return (
    <>
      {/* second box for rendering use case  */}

      <Col xxl={12} style={{ width: "90%", margin: "auto" }}>
        <Card className={style.cardborderStyle}>
          <CardBody className="d-flex align-items-center p-0 flex-wrap">
            <Col lg={9}>
              <Row>
                <Col className="m-3 mt-4">
                  <img
                    src={stockwithBar}
                    alt=""
                    className="avatar-sm rounded"
                  />
                </Col>
                <Col className="m-3 mt-4">
                  <p className={style.textStyle}>
                    To be <br />
                    Picked
                  </p>
                </Col>
                <Col
                  lg={9}
                  className="d-flex flex-wrap gap-3 m-3 align-items-center"
                >
                  <div>
                    <p
                      className={`bg-info-subtle text-info  p-2 fw-700 ${style.infoSpan}`}
                    >
                      0/3
                    </p>
                  </div>
                  <p className={style.textStyle}>P</p>
                  <div>
                    <p
                      className={`bg-success-subtle text-success  p-2 fw-700 ${style.successSpan}`}
                    >
                      0/3
                    </p>
                  </div>
                  <p className={style.textStyle}>M</p>
                  <div>
                    <p
                      className={`bg-warning-subtle text-warning  p-2 fw-700 ${style.warningSpan}`}
                    >
                      0/3
                    </p>
                  </div>
                  <p className={style.textStyle}>S</p>
                  <div>
                    <p
                      className={`bg-info-subtle text-info  p-2 fw-700 ${style.info1Span}`}
                    >
                      0/3
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg={3} className={style.halfStylebg}>
              <Row>
                <Col className="d-flex flex-wrap gap-4 m-4 align-items-center">
                  <p className={style.textStyle1}>
                    Time <br /> Lapsed
                  </p>

                  <div>
                    <p className={style.dangerSpan}>3</p>
                    <p className="d-flex flex-wrap m-3 mt-0 mb-0 align-items-center text-light fw-4">
                      Hrs
                    </p>
                  </div>
                  <p className={style.textStyle1}>:</p>
                  <div>
                    <p className={style.dangerSpan}>00</p>
                    <p className="d-flex flex-wrap m-3 mt-0 mb-0 align-items-center text-light fw-4">
                      min
                    </p>
                  </div>
                  <p className={style.textStyle1}>:</p>
                  <div>
                    <p className={style.dangerSpan}>00</p>
                    <p className="d-flex flex-wrap m-3 mt-0 mb-0 align-items-center text-light fw-4">
                      sec
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </CardBody>
        </Card>
      </Col>

      {/* end here */}
    </>
  );
};

export default BlueCard;
