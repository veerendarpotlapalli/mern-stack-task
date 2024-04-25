

import { useNavigate } from "react-router-dom";
import { Card, CardBody, Col, Input, Row, Spinner  } from "reactstrap";
import style from "../../../src/styles/pickorder.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSalesOrderData, getVerifyListData } from "../../slices/crm/thunk";
import CommonBg from "./commonBg";
import debounce from "lodash.debounce";


const VerifyOrderCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [salesOrderList, setSalesOrderList] = useState([]);
  const [verifyListData ,setVerifyListData] = useState([])
  const [singleVerifyList ,setSingleVerifyList] = useState("")
  const [searchText,setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  console.log("searchText", searchText);
  const handleRedirectoViewOrder = (item) => {
    setSingleVerifyList(item)
    navigate(`/verify-order/${item}`);
  };
  // useEffect(() => {
  //   dispatch(getSalesOrderData()).then((res) => {
  //     console.log("response", res);
  //     if (res?.payload?.status) {
  //       setSalesOrderList(res?.payload?.data);
  //     }
  //   });
  // }, []);

useEffect(()=>{
  const payload = {
    searchText : searchText,
  }
  setIsLoading(true);
   dispatch(getVerifyListData(payload)).then((res)=>{
    console.log("resssssssssss",res);
    if(res?.payload?.status){
      setVerifyListData(res?.payload?.data)
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
   })
},[ searchText])

const handleChange=(e)=>{
  // console.log('name',e.target.value);
  setSearchText(e.target.value);
}

  return (
    <div>
    <CommonBg verifyTitle={"Verify Orders"}/>
      <div style={{ width: "90%", margin: "auto" }}>
        <div className="p-3 ">
          <Row>
            <Col lg={12}>
              <Row>
                <Col lg={3}>
                  <h1 className={style.mainHeadingText}>VERIFY LIST</h1>
                  <p>Select order to verify</p>
                </Col>

                <Col lg={9}>
                  <div>
                    <form className="app-search d-none d-md-block">
                      <div className="position-relative">
                        <Input
                          type="text"
                          className="form-control shadow"
                          placeholder="Search..."
                          id="search-options"
                          style={{ height: "44.5px" }}
                          onChange={debounce(handleChange, 1000)}
                        />
                        <span className="mdi mdi-magnify search-widget-icon mt-1"></span>
                        <span
                          className="mdi mdi-close-circle search-widget-icon search-widget-icon-close d-none"
                          id="search-close-options"
                        ></span>
                      </div>
                    </form>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col xl={12}>
            {isLoading ? (
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "540px" }}
            >
              <Spinner
                color="info"
                style={{
                  fontSize: "30px",
                  padding: "30px",
                }}
              >
                {" "}
                Loading...{" "}
              </Spinner>
            </div>
          ) : (
            <div>
              {verifyListData?.map((item,index)=>(

              <Card
                className="crm-widget shadow border-1"
                onClick={() => handleRedirectoViewOrder(item?._id)}
                style={{ cursor: "pointer" }}
                key={index}
              >
                <CardBody className="p-0">
                  <div
                    className="row-cols-md-3 p-0 row-cols-1"
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                    }}
                  >
                    <div className="w-70">
                      <div className="p-3 pb-0   gap-4">
                        <h5>{item?.uniqueId}</h5>
                        <h5 className="text-info">
                          {item?.accountNo}- {item?.businessAddress}
                        </h5>
                        <h6> <span className="text-primary"> {item?.createdAt}</span> &nbsp;<span className="text-muted">02:21 AM</span></h6>
                      </div>
                      
                    </div>
                    <div className="w-30" style={{ float: "right" }}>
                      <div
                        className="p-3 d-flex gap-4"
                        style={{ flexWrap: "wrap", height: "auto" }}
                      >
                        <h5 className="fs-4 fw-600">{item?.pieces} </h5>
                        <h6 className="badge bg-warning-subtle text-warning fs-5">
                          {item?.assignedTo}
                        </h6>
                        <h6 className="badge bg-success-subtle text-success fs-5">
                          Picked by SRZ
                        </h6>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
              ))}
              </div>
          )}
            </Col>
          </Row>

          {/* {salesOrderList?.length > 0 &&
            salesOrderList?.map((item) => (
              <Row
                onClick={handleRedirectoViewOrder}
                className="cursor-pointer"
              >
                <Col xl={12}>
                  <Card className="crm-widget shadow border-1">
                    <CardBody className="p-0">
                      <div
                        className="row-cols-md-3 p-0 row-cols-1"
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          justifyContent: "space-between",
                        }}
                      >
                        <div className="w-70">
                          <div className="p-3 pb-0  d-flex gap-4">
                            <h5>101134</h5>
                            <h5 className={style.textStyle}>
                              319590 - Splash Distributors LLC
                            </h5>
                          </div>
                          <div className="p-3 pb-0">
                            <h6>21 Aug, 2023, 02:21 AM</h6>
                          </div>
                        </div>
                        <div className="w-30" style={{ float: "right" }}>
                          <div
                            className="p-3 d-flex gap-4"
                            style={{ flexWrap: "wrap", height: "auto" }}
                          >
                            <h5 className="fs-4 fw-600">101134</h5>
                            <h6 className="badge bg-warning-subtle text-warning fs-5">
                              AWZ
                            </h6>
                            <h6 className="badge bg-success-subtle text-success fs-5">
                              Pickup
                            </h6>
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            ))} */}
        </div>
      </div>
    </div>
  );
};

export default VerifyOrderCard;
