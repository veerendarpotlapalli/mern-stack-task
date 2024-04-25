import { Link, useNavigate } from "react-router-dom";
import { Button, Card, CardBody, Col, Input, Row, Spinner,   Form,  TabContent,
  TabPane,   FormFeedback, } from "reactstrap";
import style from "../../../src/styles/pickorder.module.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getSalesOrderData, getStartPicking } from "../../slices/crm/thunk";
import dateWithTimeStamp from "../../Utils/dateWithTimeStamp";
import debounce from "lodash.debounce";
import CommonBg from "./commonBg";
import { toast, ToastContainer } from "react-toastify";
import CloseIcon from "@mui/icons-material/Close";
import Swal from "sweetalert2";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
import EditCustomerList from "./EditCustomerList";
import { useFormik } from "formik";
import * as Yup from "yup";
import { createEmploye, deleteEmploye, editEmploye } from "../../slices/thunks";
const OrderCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openEdit, setOpenEdit] = useState(false);
  const [createCust, setCreateCust] = useState(false);
  const [firstName, setFirstName] = useState(null)
  const [lastName, setLastName] = useState(null)
  const [email, setEmail] = useState(null)
  const [phoneNumber, setPhoneNumber] = useState(null)
  const [businessName, setBusinessName] = useState(null)
  const [businessAddress, setBusinessAddress] = useState(null)
  const [city, setCity] = useState(null)
  const [state, setState] = useState(null)
  const [country, setCountry] = useState(null)
  const [empData, setEmpData] = useState(null)



  console.log("empData", empData)

  const handleRedirectoViewOrder = (id) => {
    setEmpData(id)
    setFirstName(id?.name)
    setEmail(id?.email)
    setPhoneNumber(id?.phoneNumber)
    setLastName(id?.password)

    // const payload = {
    //   id: id,
    // };
    // dispatch(getStartPicking(payload)).then((res) => {
    //   if (res?.payload?.status) {
    //     toast(`${res?.payload?.message}`);
    //     setTimeout(() => {
    //       navigate(`/pickorder/${id}`);
    //     }, 3000);
    //   } else {
    //     console.log("response", res);
    //     toast(`${res?.payload?.message}`);
    //     setTimeout(() => {
    //       navigate(`/pickorder/${id}`);
    //     }, 3000);
    //   }
    // });
  };
  const [salesOrderList, setSalesOrderList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState("");

  // console.log('searchtext',searchText);

  useEffect(() => {
    setIsLoading(true);
    dispatch(getSalesOrderData()).then((res) => {
      if (res?.payload?.status) {
        setSalesOrderList(res?.payload?.data);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    });
  }, [dispatch]);

  const handleModel = () => {
    setCreateCust(true);
  };

  const handleEditEmp = () => {
    setOpenEdit(true);
  };

  const handleDeleteEmp = (deleteid) =>{
    const userid = deleteid
    dispatch(deleteEmploye(userid)).then((res)=>{
      if (res?.payload?.status) {
        Swal.fire({
          title: `${res?.payload?.message}`,
          icon: "success",
        }).then((result) => {
          if (result.isConfirmed) {
            dispatch(getSalesOrderData())
          }
        });
        
      } else {
        Swal.fire({
          title: `${res?.payload?.message}`,
          icon: "error",
        });
      }
    })
  }  

  const handleModalClose = () => {
    setOpenEdit(false);
  };

  const handleCreateCust = () => {
    setCreateCust(false);
  };

  const handleCreateEmp = ()=>{
    const payload = {
      name: firstName,
      email: email,
      phoneNumber: phoneNumber,
      password: lastName
    }
    dispatch(createEmploye(payload)).then((res)=>{
      setOpenEdit(false)
      setCreateCust(false)
      if (res?.payload?.status) {
        Swal.fire({
          title: `${res?.payload?.message}`,
          icon: "success",
        }).then((result) => {
          if (result.isConfirmed) {
            dispatch(getSalesOrderData())
          }
        });
       
      } else {
        Swal.fire({
          title: `${res?.payload?.message}`,
          icon: "error",
        });
      }

    })
  }

  const handleEditCust =()=>{
    const payload = {
      name: firstName,
      email: email,
      phoneNumber: phoneNumber,
      password: lastName, 
      id: empData?._id
    }
    dispatch(editEmploye(payload)).then((res)=>{
      setOpenEdit(false)
      setCreateCust(false)
      if (res?.payload?.status) {
        Swal.fire({
          title: `${res?.payload?.message}`,
          icon: "success",
        }).then((result) => {
          if (result.isConfirmed) {
            dispatch(getSalesOrderData())
          }
        });
        
      } else {
        Swal.fire({
          title: `${res?.payload?.message}`,
          icon: "error",
        });
      }
    })

  }

  const defaultValues= {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    businessName: "",
    businessAddress: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
  };

  // const validation = useFormik({
  //   enableReinitialize: true,
  //   initialValues: defaultValues,
  //   validationSchema: Yup.object({
  //     firstName: Yup.string().required("Please Enter the First Name"),
  //     lastName: Yup.string().required("Please Enter the Last Name"),
  //     email: Yup.string().required("Please Enter Business the Email"),
  //     phoneNumber: Yup.string().required("Please Enter the Phone"),
  //     businessName: Yup.string().required("Enter the Business Name"),
  //     businessAddress: Yup.string().required("Enter the Business Address"),
  //     city: Yup.string().required("Enter the City"),
  //     state: Yup.string().required("Enter the State"),
  //     country: Yup.string().required("Enter the Country"),
  //     pinCode: Yup.string().required("Enter the zip"),
  //   }),


  //   onSubmit: (values) => {
  //     const newVendor = {
  //       _id:data._id,
  //       firstName: values.firstName,
  //       lastName: values.lastName,
  //       vendorEmail: values.email,
  //       phoneNumber: values.phoneNumber,
  //       companyName: values.businessName,
  //       address: values.businessAddress,
  //       city: values.city,
  //       state: values.state,
  //       country: values.country,
  //       pinCode: values.pinCode,
  //     };

  //     dispatch(createEmploye(newVendor)).then((res) => {
  //       console.log("dataa", data)
  //       validation.resetForm({ values: defaultValues });
  //     })
  //      .then(() => {
  //       modalHandleCallback();
  //      });
  //   },
  // });

  // console.log("isLoading", isLoading);

  return (
    <div>
      <ToastContainer />
      <CommonBg verifyTitle={"Employees List"} />
      <div style={{ width: "50%", margin: "auto" }}>
        <div className="p-3 ">
          <Row>
            <Col lg={12}>
            <Row className="d-flex justify-content-center align-items-center h-auto">
  <Col lg={3} xs={12} className="text-center mb-4">
    <h1 className={style.mainHeadingText}>EMPLOYEES LIST</h1>
    {/* <p>Select order to pick</p> */}
  </Col>

  <Col lg={9} xs={12} className="text-center mb-4">
    <div>
      <form className="app-search d-none d-md-block">
        <div className="position-relative">
          <Button className="btn btn-primary" onClick={handleModel}> 
            Create Employee
          </Button>
        </div>
      </form>
    </div>
  </Col>
</Row>

            </Col>
          </Row>
          

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
              {salesOrderList?.length > 0 &&
                salesOrderList?.map((item) => (
                  console.log("itemmm", item),
                  <Row
                    onClick={() => handleRedirectoViewOrder(item)}
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
                                <h5>{item?.name}</h5>
                                <h5 className={style.textStyle}>
                                  {item?.role}
                                </h5>
                              </div>
                              <div className="p-3 pb-0">
                                <h6>{(item?.email)}</h6>
                              </div>
                            </div>
                     
                            <div className="p-3 d-flex gap-4">
                            <li className="list-inline-item edit"
                    
                                      onClick={handleEditEmp}
                                      >
                                        <Link
                                          // to={`/edit-customer/${item?._id}`}
                                          className="text-primary d-inline-block edit-item-btn"
                                        >
                                          <i className="ri-pencil-fill fs-16"></i>
                                        </Link>
                                      </li>
                                      <li className="list-inline-item"
                                      onClick={()=>handleDeleteEmp(item?._id)}
                                      >
                                        <Link
                                          to="#"
                                          className="text-danger d-inline-block remove-item-btn"
                                        >
                                          <i
                                            className="ri-delete-bin-5-fill fs-16"
                                            // onClick={() => onClickDelete(item?._id)}
                                          ></i>
                                        </Link>
                                      </li>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                ))}
            </div>
          )}
        </div>
      </div>
      <Dialog
            open={openEdit}
            onClose={() => {
              setOpenEdit(false);
            }}
            fullWidth="md"
            maxWidth="sm"
          >
            <DialogTitle>{"Edit Employee"}</DialogTitle>
            <IconButton
              aria-label="close"
              onClick={handleModalClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>

            <DialogContent>
       {/* 111111111111 */}
       <TabPane >
                        <Row>
                          <Col lg={6}>
                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="manufacturer-name-input"
                              >
                                Full Name
                              </label>
                              <Input
                                type="text"
                                className="form-control"
                                id="product-title-input"
                                placeholder="Enter First Name"
                                name="firstName"
                                value={firstName}
                                onChange={(e)=> setFirstName(e.target.value)}
                                // value={validation.values.firstName || ""}
                                // onBlur={validation.handleBlur}
                                // onChange={validation.handleChange}
                                // invalid={
                                //   validation.errors.firstName &&
                                //   validation.touched.firstName
                                //     ? true
                                //     : false
                                // }
                              />
                              {/* {validation.errors.firstName &&
                              validation.touched.firstName ? (
                                <FormFeedback type="invalid">
                                  {validation.errors.firstName}
                                </FormFeedback>
                              ) : null} */}
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="manufacturer-brand-input"
                              >
                                Password
                              </label>
                              <Input
                                type="text"
                                className="form-control"
                                id="manufacturer-brand-input"
                                name="lastName"
                                placeholder="Enter Password"
                                value={lastName}
                                onChange={(e)=> setLastName(e.target.value)}
                                // value={validation.values.lastName || ""}
                                // onChange={validation.handleChange}
                                // onBlur={validation.handleBlur}
                                // invalid={
                                //   validation.errors.lastName &&
                                //   validation.touched.lastName
                                //     ? true
                                //     : false
                                // }
                              />
                              {/* {validation.errors.lastName &&
                              validation.touched.lastName ? (
                                <FormFeedback type="invalid">
                                  {validation.errors.lastName}
                                </FormFeedback>
                              ) : null} */}
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg={6}>
                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="product-stock-input"
                              >
                                Business Email
                              </label>
                              <div className="input-group mb-3">
                                <Input
                                  type="email"
                                  className="form-control"
                                  id="product-stock-input"
                                  placeholder="marycousar@gmail.com"
                                  name="email"
                                  value={email}
                                  onChange={(e)=> setEmail(e.target.value)}
                                  // value={validation.values.email || ""}
                                  // onChange={validation.handleChange}
                                  // onBlur={validation.handleBlur}
                                  // invalid={
                                  //   validation.errors.email &&
                                  //   validation.touched.email
                                  //     ? true
                                  //     : false
                                  // }
                                />
                                {/* {validation.errors.email &&
                                validation.touched.email ? (
                                  <FormFeedback type="invalid">
                                    {validation.errors.email}
                                  </FormFeedback>
                                ) : null} */}
                              </div>
                            </div>
                          </Col>

                          <Col sm={6}>
                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="product-price-input"
                              >
                                Phone
                              </label>
                              <div className="input-group mb-3">
                                <span
                                  className="input-group-text"
                                  id="product-price-addon"
                                >
                                  <img src={"ukFlag"} alt="ukFlag" />
                                </span>
                                <Input
                                  type="number"
                                  className="form-control"
                                  id="product-price-input"
                                  placeholder="580-464-4694"
                                  name="phoneNumber"
                                  aria-label="Price"
                                  aria-describedby="product-phoneNumber-addon"
                                  value={phoneNumber}
                                  onChange={(e)=> setPhoneNumber(e.target.value)}
                                  // value={validation.values.phoneNumber || ""}
                                  // onChange={validation.handleChange}
                                  // onBlur={validation.handleBlur}
                                  // invalid={
                                  //   validation.errors.phoneNumber &&
                                  //   validation.touched.phoneNumber
                                  //     ? true
                                  //     : false
                                  // }
                                />
                                {/* {validation.errors.phoneNumber &&
                                validation.touched.phoneNumber ? (
                                  <FormFeedback type="invalid">
                                    {validation.errors.phoneNumber}
                                  </FormFeedback>
                                ) : null} */}
                              </div>
                            </div>
                          </Col>

                          <div
                  style={{
                    marginBottom: "0px",
                    marginTop: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", gap: "5px" }}></div>
                  <div style={{ display: "flex", gap: "5px" }}>
                    <Button className="btn btn-danger" >
                      Cancel
                    </Button>
                    <Button  className="btn btn-success" onClick={handleEditCust}>
                      Submit
                    </Button>
                  </div>
                </div>
                         

                {/* end here */}

                
                   
                        </Row>
           
                      </TabPane>
            </DialogContent>
      </Dialog>

      <Dialog
            open={createCust}
            onClose={() => {
              setCreateCust(false);
            }}
            fullWidth="md"
            maxWidth="sm"
          >
            <DialogTitle>{"Create Employee"}</DialogTitle>
            <IconButton
              aria-label="close"
              onClick={handleCreateCust}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>

            <DialogContent>
            <Row>
            <Col lg={12}>
              {/* start here */}
              {/* <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  validation.handleSubmit();
                  return false;
                }}
              > */}
                <Card>
                  <CardBody>
                    <TabContent  className="mt-2">
                      <TabPane >
                        <Row>
                          <Col lg={6}>
                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="manufacturer-name-input"
                              >
                                Full Name
                              </label>
                              <Input
                                type="text"
                                className="form-control"
                                id="product-title-input"
                                placeholder="Enter First Name"
                                name="firstName"
                                value={firstName}
                                onChange={(e)=> setFirstName(e.target.value)}
                                // value={validation.values.firstName || ""}
                                // onBlur={validation.handleBlur}
                                // onChange={validation.handleChange}
                                // invalid={
                                //   validation.errors.firstName &&
                                //   validation.touched.firstName
                                //     ? true
                                //     : false
                                // }
                              />
                              {/* {validation.errors.firstName &&
                              validation.touched.firstName ? (
                                <FormFeedback type="invalid">
                                  {validation.errors.firstName}
                                </FormFeedback>
                              ) : null} */}
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="manufacturer-brand-input"
                              >
                                Password
                              </label>
                              <Input
                                type="text"
                                className="form-control"
                                id="manufacturer-brand-input"
                                name="lastName"
                                placeholder="Enter Password"
                                value={lastName}
                                onChange={(e)=> setLastName(e.target.value)}
                                // value={validation.values.lastName || ""}
                                // onChange={validation.handleChange}
                                // onBlur={validation.handleBlur}
                                // invalid={
                                //   validation.errors.lastName &&
                                //   validation.touched.lastName
                                //     ? true
                                //     : false
                                // }
                              />
                              {/* {validation.errors.lastName &&
                              validation.touched.lastName ? (
                                <FormFeedback type="invalid">
                                  {validation.errors.lastName}
                                </FormFeedback>
                              ) : null} */}
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg={6}>
                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="product-stock-input"
                              >
                                Business Email
                              </label>
                              <div className="input-group mb-3">
                                <Input
                                  type="email"
                                  className="form-control"
                                  id="product-stock-input"
                                  placeholder="marycousar@gmail.com"
                                  name="email"
                                  value={email}
                                  onChange={(e)=> setEmail(e.target.value)}
                                  // value={validation.values.email || ""}
                                  // onChange={validation.handleChange}
                                  // onBlur={validation.handleBlur}
                                  // invalid={
                                  //   validation.errors.email &&
                                  //   validation.touched.email
                                  //     ? true
                                  //     : false
                                  // }
                                />
                                {/* {validation.errors.email &&
                                validation.touched.email ? (
                                  <FormFeedback type="invalid">
                                    {validation.errors.email}
                                  </FormFeedback>
                                ) : null} */}
                              </div>
                            </div>
                          </Col>

                          <Col sm={6}>
                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="product-price-input"
                              >
                                Phone
                              </label>
                              <div className="input-group mb-3">
                                <span
                                  className="input-group-text"
                                  id="product-price-addon"
                                >
                                  <img src={"ukFlag"} alt="ukFlag" />
                                </span>
                                <Input
                                  type="number"
                                  className="form-control"
                                  id="product-price-input"
                                  placeholder="580-464-4694"
                                  name="phoneNumber"
                                  aria-label="Price"
                                  aria-describedby="product-phoneNumber-addon"
                                  value={phoneNumber}
                                  onChange={(e)=> setPhoneNumber(e.target.value)}
                                  // value={validation.values.phoneNumber || ""}
                                  // onChange={validation.handleChange}
                                  // onBlur={validation.handleBlur}
                                  // invalid={
                                  //   validation.errors.phoneNumber &&
                                  //   validation.touched.phoneNumber
                                  //     ? true
                                  //     : false
                                  // }
                                />
                                {/* {validation.errors.phoneNumber &&
                                validation.touched.phoneNumber ? (
                                  <FormFeedback type="invalid">
                                    {validation.errors.phoneNumber}
                                  </FormFeedback>
                                ) : null} */}
                              </div>
                            </div>
                          </Col>
                         

                {/* end here */}

                
                   
                        </Row>
           
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>

                <div
                  style={{
                    marginBottom: "0px",
                    marginTop: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", gap: "5px" }}></div>
                  <div style={{ display: "flex", gap: "5px" }}>
                    <Button className="btn btn-danger" >
                      Cancel
                    </Button>
                    <Button  className="btn btn-success" onClick={handleCreateEmp}>
                      Submit
                    </Button>
                  </div>
                </div>
                {/* <Button type='submit'>Submit */}
              {/* </Form> */}
            </Col>

            {/*end here  */}
          </Row>
            </DialogContent>
      </Dialog>
    </div>
  );
};

export default OrderCard;
