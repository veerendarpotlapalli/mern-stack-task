import React, { useEffect, useState } from "react";
import {
  CardBody,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import profileIcon from "../../profileIcon.svg";
import { Link } from "react-router-dom";
import { createSelector } from "reselect";
import { useSelector } from "react-redux";

const CommonBg = ({verifyTitle, accountNo, compName, custDetails}) => {
  const profiledropdownData = createSelector(
    (state) => state.Profile.user,
    (user) => user
  );
  // Inside your component
  const user = useSelector(profiledropdownData);
  const [userName, setUserName] = useState("Admin");

  useEffect(() => {
    if (sessionStorage.getItem("authUser")) {
      const obj = JSON.parse(sessionStorage.getItem("authUser"));
      setUserName(
        process.env.REACT_APP_DEFAULTAUTH === "fake"
          ? obj.userName
            ? user.userName
              ? user.userName
              : obj.userName
            : "Admin" || "Admin"
          : process.env.REACT_APP_DEFAULTAUTH === "firebase"
          ? obj.email && obj.email
          : "Admin"
      );
    }
  }, [userName, user]);
  const [isProfileDropdown, setIsProfileDropdown] = useState(false);
  const toggleProfileDropdown = () => {
    setIsProfileDropdown(!isProfileDropdown);
  };
  return (
    <div
      className="position-relative"
      style={{
        background: "linear-gradient(to bottom, #307CB8 0%, #0F3576 100%)",
        height: "220px",
      }}
    >
      <CardBody className="pt-4" >
      {custDetails ? (
 <div  className="d-flex align-items-center" style={{ gap: "40px" }}>
  {/* <div className="d-flex align-items-center" style={{ gap: "40px" }}>
    <i className="ri-arrow-left-line" style={{ fontSize: "30px", color: "white" }}></i>
  </div> */}
  <div className="" style={{textAlign:"left"}}>
    <h3 className="text-white">{accountNo}</h3>
    <p className="text-white" style={{fontSize:"18px"}}>{compName}</p>
  </div>
</div>
): (
  <div className="d-flex justify-content-start align-items-center" style={{gap:"40px"}}>
  {/* <Link to = "/dashboard">
<i className="ri-arrow-left-line" style={{ fontSize: "30px", color: "white" }}></i>  
  </Link> */}
<h3 className="text-white">{verifyTitle}</h3>
</div>
)}
      {/* <div className="text-center">
                      <h3 className="text-white">Warehouse</h3>
               
                    </div> */}
                   {/* <div className="d-flex justify-content-start align-items-center" style={{gap:"40px"}}>
  <i className="ri-arrow-left-line" style={{ fontSize: "30px", color: "white" }}></i>
  <h3 className="text-white">Pick Orders</h3>
</div> */}
 {/* <div  className="d-flex align-items-center" style={{ gap: "40px" }}>
  <div className="d-flex align-items-center" style={{ gap: "40px" }}>
    <i className="ri-arrow-left-line" style={{ fontSize: "30px", color: "white" }}></i>
  </div>
  <div className="" style={{textAlign:"left"}}>
    <h3 className="text-white">Pick Orders</h3>
    <p className="text-white" style={{fontSize:"18px"}}>Splash Distributors LLC</p>
  </div>
</div> */}

        <Dropdown
          isOpen={isProfileDropdown}
          toggle={toggleProfileDropdown}
          className="d-flex justify-content-end"
        >
          <DropdownToggle tag="button" type="button" className="btn">
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <i
                className="ri-notification-2-line"
                style={{ fontSize: "28px", color: "white" }}
              ></i>
              <img src={profileIcon} alt="Profile Icon" />
            </div>
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu-end">
            <h6 className="dropdown-header">Welcome {userName}!</h6>
           <DropdownItem className="p-0">
              <Link
                to={process.env.PUBLIC_URL + "/"}
                className="dropdown-item"
              >
                <i className="mdi mdi-logout text-muted fs-16 align-middle me-1"></i>{" "}
                <span className="align-middle" data-key="t-logout">
                  Logout
                </span>
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </CardBody>
      <div className="shape">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          // xmlns:svgjs="http://svgjs.com/svgjs"
          width="1440"
          height="100"
          preserveAspectRatio="none"
          viewBox="0 0 1440 60"
        >
          <g mask='url("#SvgjsMask1001")' fill="none">
            <path
              d="M 0,4 C 144,13 432,48 720,49 C 1008,50 1296,17 1440,9L1440 60L0 60z"
              style={{ fill: "var(--vz-card-bg-custom)" }}
            ></path>
          </g>
          <defs>
            <mask id="SvgjsMask1001">
              <rect width="1440" height="100" fill="#ffffff"></rect>
            </mask>
          </defs>
        </svg>
      </div>

      <div className="shape">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsxlink="http://www.w3.org/1999/xlink"
          xmlnssvgjs="http://svgjs.com/svgjs"
          width="1440"
          height="100"
          preserveAspectRatio="none"
          viewBox="0 0 1440 60"
        >
          <g mask='url("#SvgjsMask1001")' fill="none">
            <path
              d="M 0,4 C 144,13 432,48 720,49 C 1008,50 1296,17 1440,9L1440 60L0 60z"
              style={{ fill: "var(--vz-secondary-bg)" }}
            ></path>
          </g>
          <defs>
            <mask id="SvgjsMask1001">
              <rect width="1440" height="100" fill="#FFFFFF"></rect>
            </mask>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default CommonBg;
