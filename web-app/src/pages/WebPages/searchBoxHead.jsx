import React, { useEffect, useState } from "react";
import { Col, Input, Row } from "reactstrap";
import QRScanner from "./QRScanner";
import { useDispatch } from "react-redux";
import { getScanProductWithBarCode, getSingleSalesData } from "../../slices/thunks";
import { toast, ToastContainer } from "react-toastify";

const SearchBoxHead = ({id,setOrderItem,togetBarcodeNumber}) => {
  const dispatch = useDispatch();
  const [showScanner, setShowScanner] = useState(false);
  const [scanBarcode, setScanBarcode] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [barcode, setBarCode] = useState([]);

  const toggleScanner = () => {
    setShowScanner(!showScanner);
  };


  useEffect(() => {
    if (isTyping) {
      let obj = {};
      for (let elem of scanBarcode) {
        if (!obj[elem]) {
          obj[elem] = 1;
        } else {
          obj[elem]++;
        }
      }
      const payload = {
        barCodes : obj,
        salesOrderId :id,
      };
      
      dispatch(getScanProductWithBarCode(payload)).then((res)=>{
        if(res?.payload?.status){
          console.log('response',res);
          toast(`${res?.payload?.message}`)
          const payload = {
            id : id,
          }
          dispatch(getSingleSalesData(payload)).then((res)=>{
            if(res?.payload?.status){
              setOrderItem(res?.payload?.data?.orderItemId)
            }
          })
        }
      })

      const timeout = setTimeout(() => {
        setIsTyping(false);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [isTyping, scanBarcode]);

  const handleEnterKeyPress = (e) => {
    if (e.key === "Enter") {
     
        const enteredValue = e.target.value.trim();
        togetBarcodeNumber(enteredValue)
        setScanBarcode([...scanBarcode, enteredValue]);
        setIsTyping(true);
        e.target.value = "";
    }
  };



  return (
    // <div>
    //   <Col
    //     xxl={9}
    //     style={{ width: "90%", margin: "auto" }}
    //     className="mt-4 mb-4"
    //   >
    //     <Row className="g-3 align-items-center">
    //       <Col xxl={2} sm={4}>
    //         <div className="avatar-md mt-n3 cursor-pointer">
    //           <div className="avatar-title bg-warning rounded-circle">
    //             <i
    //               className="ri-qr-scan-2-line text-dark"
    //               style={{ fontSize: "3rem" }}
    //             ></i>
    //           </div>
    //         </div>
    //       </Col>

    //       <Col xxl={8} sm={6}>
    //         <div className="search-box">
    //           <Input
    //             type="text"
    //             className="form-control search border-gray shadow p-3 fs-18"
    //             id="searchCompany"
    //             placeholder="Scan item barcodes"
    //           />
    //         </div>
    //       </Col>

    //       <Col xxl={2} sm={4} className="text-center">
    //         {" "}
    //         {/* Added text-center class */}
    //         <div
    //           className="form-check form-switch form-switch-lg d-flex justify-content-end"
    //           dir="ltr"
    //         >
    //           <Input
    //             type="checkbox"
    //             className="form-check-input"
    //             id="customSwitchsizelg"
    //             defaultChecked=""
    //           />
    //         </div>
    //       </Col>
    //     </Row>
    //   </Col>
    // </div>
    <div>
      <ToastContainer/>
    <Col
      xxl={9}
      style={{ width: "90%", margin: "auto" }}
      className="mt-4 mb-4"
    >
      <Row className="g-3 align-items-center">
        <Col xxl={2} sm={4}>
          <div
            className="avatar-md mt-n3 cursor-pointer"
            onClick={toggleScanner}
          >
            <div className="avatar-title bg-warning rounded-circle">
              <i
                className="ri-qr-scan-2-line text-dark"
                style={{ fontSize: "3rem" }}
              ></i>
            </div>
          </div>
        </Col>

        <Col xxl={8} sm={6}>
          <div className="search-box">
            <Input
              type="text"
              className="form-control search border-gray shadow p-3 fs-18"
              id="searchCompany"
              placeholder="Scan item barcodes"
              onKeyDown={handleEnterKeyPress}
              onChange={(e) => setBarCode(e.target.value)}
            />
          </div>
        </Col>

        <Col xxl={2} sm={4} className="text-center">
          {" "}
          {/* Added text-center class */}
          <div
            className="form-check form-switch form-switch-lg d-flex justify-content-end"
            dir="ltr"
          >
            <Input
              type="checkbox"
              className="form-check-input"
              id="customSwitchsizelg"
              defaultChecked=""
            />
          </div>
        </Col>
      </Row>
    </Col>
    {showScanner && <QRScanner />}
  </div>
  );
};

export default SearchBoxHead;
