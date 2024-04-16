import { createSlice } from "@reduxjs/toolkit";

const FetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    fetching: false,
    clicked: false,
    categoryClicked: false,
  },
  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true;
    },
    markFetching: (state) => {
      state.fetching = true;
    },
    markFetchingDone: (state) => {
      state.fetching = false;
    },
    searchButtonClicked: (state) => {
      state.clicked = true;
    },
    categoryButtonClicked: (state) => {
      state.categoryClicked = true;
    },
  },
});

export const FetchingStatusAction = FetchStatusSlice.actions;
export default FetchStatusSlice;
