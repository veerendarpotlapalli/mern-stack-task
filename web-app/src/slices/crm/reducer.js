import { createSlice } from "@reduxjs/toolkit";
import { getSalesOrderData, getVerifyListData } from "./thunk";

export const initialState = {
  error: {},
  isLoading: false,
  salesOrder: [],
  verifyListData : []
};

const crmSlice = createSlice({
  name: "crm",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Sales Order
    builder.addCase(getSalesOrderData.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(getSalesOrderData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.salesOrder = action.payload;
    });

    builder.addCase(getSalesOrderData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(getVerifyListData.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(getVerifyListData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.verifyListData = action.payload;
    });

    builder.addCase(getVerifyListData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default crmSlice.reducer;
