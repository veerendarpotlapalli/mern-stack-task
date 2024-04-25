import { createAsyncThunk } from "@reduxjs/toolkit";
import 'react-toastify/dist/ReactToastify.css';

//Include Both Helper File with needed methods
import {
 
  getSalesOrderData as getSalesOrderDataApi,
  getSingleSalesData as getSingleSalesDataApi,
  getVerifyListData as getVerifyListDataApi,
  getStartPicking as getStartPickingApi,
  getScanProductWithBarCode as getScanProductWithBarCodeApi
} from "../../helpers/fakebackend_helper";

export const getScanProductWithBarCode = createAsyncThunk("crm/getScanProductWithBarCode" , async (payload) => {
  try{
    const response = getScanProductWithBarCodeApi(payload)
    return response;
  }catch (error) {
    return error;
  }
})

export const getSalesOrderData = createAsyncThunk("crm/getSalesOrderData" , async () => {
  try{
    const response = getSalesOrderDataApi()
    return response;
  }catch (error) {
    return error;
  }
})

export const getSingleSalesData = createAsyncThunk("crm/getSingleSalesData" , async (payload) => {
  try{
    const response = getSingleSalesDataApi(payload)
    return response;
  }catch (error) {
    return error;
  }
})
export const getVerifyListData = createAsyncThunk("crm/getVerifyListData" , async (payload) => {
  try{
    const response = getVerifyListDataApi(payload)
    return response;
  }catch (error) {
    return error;
  }
})

export const getStartPicking = createAsyncThunk("crm/getStartPicking" , async (payload) => {
  try{
    const response = getStartPickingApi(payload)
    return response;
  }catch (error) {
    return error;
  }
})























