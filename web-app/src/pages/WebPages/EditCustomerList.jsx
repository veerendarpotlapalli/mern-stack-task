

import React, { useEffect, useState } from "react";
// import LiImage from "../../assets/images/flags//LiImage.svg";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormFeedback,
  Input,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
// import ukFlag from "../../assets/images/flags/ukFlag.svg";
// import ImageUploader from "./ImageUploader";
// import BreadCrumb from "../../Components/Common/BreadCrumb";
// import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
// import UploadComponent from "../Products/Upload";
import { useDispatch } from "react-redux";
// import { getAllVendor,updateVendor } from "../../slices/ecommerce/thunk";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditCustomerList = (props) => {
    const { openEdit, data, modalHandleCallback,handleDenied } = props;
  const history = useNavigate();
  const dispatch = useDispatch();
 
  document.title = "Create Vendor | American Distributors";

  const [customActiveTab, setcustomActiveTab] = useState("1");
  const toggleCustom = (tab) => {
    if (customActiveTab !== tab) {
      setcustomActiveTab(tab);
    }
  };
  useEffect(() => {
    if (openEdit) {
     // console.log(props.role)
      validation.setFieldValue("firstName", data?.firstName);
      validation.setFieldValue("lastName", data?.lastName);
      validation.setFieldValue("email", data?.vendorEmail);
      validation.setFieldValue("phoneNumber", data?.phoneNumber);
      validation.setFieldValue("businessName", data?.companyName);
      validation.setFieldValue("city", data?.city);
      validation.setFieldValue("state", data?.state);
      validation.setFieldValue("country", data?.country);
      validation.setFieldValue("pinCode", data?.pinCode);
      validation.setFieldValue("businessAddress", data?.address);

         
    }
  }, []);
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
  const validation = useFormik({
    enableReinitialize: true,
    initialValues: defaultValues,
    validationSchema: Yup.object({
      firstName: Yup.string().required("Please Enter the First Name"),
      lastName: Yup.string().required("Please Enter the Last Name"),
      email: Yup.string().required("Please Enter Business the Email"),
      phoneNumber: Yup.string().required("Please Enter the Phone"),
      businessName: Yup.string().required("Enter the Business Name"),
      businessAddress: Yup.string().required("Enter the Business Address"),
      city: Yup.string().required("Enter the City"),
      state: Yup.string().required("Enter the State"),
      country: Yup.string().required("Enter the Country"),
      pinCode: Yup.string().required("Enter the zip"),
    }),


    onSubmit: (values) => {
      const newVendor = {
        _id:data._id,
        firstName: values.firstName,
        lastName: values.lastName,
        vendorEmail: values.email,
        phoneNumber: values.phoneNumber,
        companyName: values.businessName,
        address: values.businessAddress,
        city: values.city,
        state: values.state,
        country: values.country,
        pinCode: values.pinCode,
      };

      dispatch(updateVendor(newVendor)).then(() => {
        validation.resetForm({ values: defaultValues });
      })
       .then(() => {
        modalHandleCallback();
       });
    },
  });

  return (
   
        <Container fluid>
          
          <Row>
            <Col lg={12}>
              {/* start here */}
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  validation.handleSubmit();
                  return false;
                }}
              >
                <Card>
                  <CardBody>
                    <TabContent activeTab={customActiveTab} className="mt-2">
                      <TabPane id="addproduct-general-info" tabId="1">
                        <Row>
                          <Col lg={6}>
                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="manufacturer-name-input"
                              >
                                First Name
                              </label>
                              <Input
                                type="text"
                                className="form-control"
                                id="product-title-input"
                                placeholder="Enter First Name"
                                name="firstName"
                                value={validation.values.firstName || ""}
                                onBlur={validation.handleBlur}
                                onChange={validation.handleChange}
                                invalid={
                                  validation.errors.firstName &&
                                  validation.touched.firstName
                                    ? true
                                    : false
                                }
                              />
                              {validation.errors.firstName &&
                              validation.touched.firstName ? (
                                <FormFeedback type="invalid">
                                  {validation.errors.firstName}
                                </FormFeedback>
                              ) : null}
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="manufacturer-brand-input"
                              >
                                Last Name
                              </label>
                              <Input
                                type="text"
                                className="form-control"
                                id="manufacturer-brand-input"
                                name="lastName"
                                placeholder="Enter Last Name"
                                value={validation.values.lastName || ""}
                                onBlur={validation.handleBlur}
                                onChange={validation.handleChange}
                                invalid={
                                  validation.errors.lastName &&
                                  validation.touched.lastName
                                    ? true
                                    : false
                                }
                              />
                              {validation.errors.lastName &&
                              validation.touched.lastName ? (
                                <FormFeedback type="invalid">
                                  {validation.errors.lastName}
                                </FormFeedback>
                              ) : null}
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
                                  value={validation.values.email || ""}
                                  onBlur={validation.handleBlur}
                                  onChange={validation.handleChange}
                                  invalid={
                                    validation.errors.email &&
                                    validation.touched.email
                                      ? true
                                      : false
                                  }
                                />
                                {validation.errors.email &&
                                validation.touched.email ? (
                                  <FormFeedback type="invalid">
                                    {validation.errors.email}
                                  </FormFeedback>
                                ) : null}
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
                                  value={validation.values.phoneNumber || ""}
                                  onBlur={validation.handleBlur}
                                  onChange={validation.handleChange}
                                  invalid={
                                    validation.errors.phoneNumber &&
                                    validation.touched.phoneNumber
                                      ? true
                                      : false
                                  }
                                />
                                {validation.errors.phoneNumber &&
                                validation.touched.phoneNumber ? (
                                  <FormFeedback type="invalid">
                                    {validation.errors.phoneNumber}
                                  </FormFeedback>
                                ) : null}
                              </div>
                            </div>
                          </Col>
                         

                {/* end here */}

                
                          <Col lg={6}>
                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="manufacturer-name-input"
                              >
                                Business Name
                              </label>
                              <Input
                                type="text"
                                className={`form-control ${
                                  validation.errors.businessName &&
                                  validation.touched.businessName
                                    ? "is-invalid"
                                    : ""
                                }`}
                                id="product-orders-input"
                                placeholder="Enter Business Name"
                                name="businessName"
                                aria-label="businessName"
                                aria-describedby="product-businessName-addon"
                                value={validation.values.businessName || ""}
                                onBlur={validation.handleBlur}
                                onChange={validation.handleChange}
                              ></Input>
                              {validation.errors.businessName &&
                              validation.touched.businessName ? (
                                <div className="invalid-feedback">
                                  {validation.errors.businessName}
                                </div>
                              ) : null}
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="manufacturer-brand-input"
                              >
                                Business Address
                              </label>
                              <Input
                                type="type"
                                className={`form-control ${
                                  validation.errors.businessAddress &&
                                  validation.touched.businessAddress
                                    ? "is-invalid"
                                    : ""
                                }`}
                                id="product-orders-input"
                                placeholder="Enter Business Address"
                                name="businessAddress"
                                aria-label="businessAddress"
                                aria-describedby="product-businessAddress-addon"
                                value={validation.values.businessAddress || ""}
                                onBlur={validation.handleBlur}
                                onChange={validation.handleChange}
                              ></Input>
                              {validation.errors.businessAddress &&
                              validation.touched.businessAddress ? (
                                <div className="invalid-feedback">
                                  {validation.errors.businessAddress}
                                </div>
                              ) : null}
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
                                City
                              </label>
                              <div className="input-group mb-3">
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="product-stock-input"
                                  placeholder="Illinois"
                                  name="city"
                                  value={validation.values.city || ""}
                                  onBlur={validation.handleBlur}
                                  onChange={validation.handleChange}
                                  invalid={
                                    validation.errors.city &&
                                    validation.touched.city
                                      ? true
                                      : false
                                  }
                                />
                                {validation.errors.city &&
                                validation.touched.city ? (
                                  <FormFeedback type="invalid">
                                    {validation.errors.city}
                                  </FormFeedback>
                                ) : null}
                              </div>
                            </div>
                          </Col>

                          <Col sm={6}>
                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="product-price-input"
                              >
                                State
                              </label>
                              <div className="input-group mb-3">
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="product-stock-input"
                                  placeholder="Chicago"
                                  name="state"
                                  value={validation.values.state || ""}
                                  onBlur={validation.handleBlur}
                                  onChange={validation.handleChange}
                                  invalid={
                                    validation.errors.state &&
                                    validation.touched.state
                                      ? true
                                      : false
                                  }
                                />
                                {validation.errors.state &&
                                validation.touched.state ? (
                                  <FormFeedback type="invalid">
                                    {validation.errors.state}
                                  </FormFeedback>
                                ) : null}
                              </div>
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="product-stock-input"
                              >
                                Country
                              </label>
                              <div className="input-group mb-3">
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="product-stock-input"
                                  placeholder="United States"
                                  name="country"
                                  value={validation.values.country || ""}
                                  onBlur={validation.handleBlur}
                                  onChange={validation.handleChange}
                                  invalid={
                                    validation.errors.country &&
                                    validation.touched.country
                                      ? true
                                      : false
                                  }
                                />
                                {validation.errors.country &&
                                validation.touched.country ? (
                                  <FormFeedback type="invalid">
                                    {validation.errors.country}
                                  </FormFeedback>
                                ) : null}
                              </div>
                            </div>
                          </Col>

                          <Col sm={6}>
                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="product-price-input"
                              >
                                Post Code Zip
                              </label>
                              <div className="input-group mb-3">
                                <Input
                                  type="number"
                                  className="form-control"
                                  id="product-stock-input"
                                  placeholder="294069302"
                                  name="pinCode"
                                  value={validation.values.pinCode || ""}
                                  onBlur={validation.handleBlur}
                                  onChange={validation.handleChange}
                                  invalid={
                                    validation.errors.pinCode &&
                                    validation.touched.pinCode
                                      ? true
                                      : false
                                  }
                                />
                                {validation.errors.pinCode &&
                                validation.touched.pinCode ? (
                                  <FormFeedback type="invalid">
                                    {validation.errors.pinCode}
                                  </FormFeedback>
                                ) : null}
                              </div>
                            </div>
                          </Col>
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
                    <Button className="btn btn-danger" onClick={handleDenied}>
                      Cancel
                    </Button>
                    <Button type="submit" className="btn btn-success">
                      Submit
                    </Button>
                  </div>
                </div>
                {/* <Button type='submit'>Submit */}
              </Form>
            </Col>

            {/*end here  */}
          </Row>
          {/* </form> */}
        </Container>
 
  );
};

export default  EditCustomerList 