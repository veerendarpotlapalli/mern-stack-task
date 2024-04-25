import React from "react";
import Login from "../pages/Authentication/Login";
import Dashboard from "../pages/DashboardEcommerce";
import Orders from "../pages/WebPages/Orders";
import Products from "../pages/WebPages/Products";
import PickOrder from "../pages/WebPages/PickOrder";
import PurchaseList from "../pages/WebPages/PurchaseList";
import VerifyOrders from "../pages/WebPages/VerifyOrders";
import VerifyOrder from "../pages/WebPages/VerifyOrder";
import SingleProduct from "../pages/WebPages/SingleProduct";

const authProtectedRoutes = [{ path: "/dashboard", component: <Dashboard /> }];

const publicRoutes = [
  // Authentication Page
  { path: "/", component: <Login /> },
  { path: "/pick-orders", component: <Orders /> },
  { path: "/verify-orders", component: <VerifyOrders /> },
  { path: "/products", component: <Products /> },
  { path: "/pickorder/:id", component: <PickOrder /> },
  { path: "/verify-order/:id", component: <VerifyOrder /> },
  { path: "/purchase", component: <PurchaseList /> },
  { path: "/product-overview", component: <SingleProduct /> },
];

export { authProtectedRoutes, publicRoutes };
