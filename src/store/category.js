import { createSlice } from "@reduxjs/toolkit";

const CategorySlice = createSlice({
  name: "category",
  initialState: [],
  reducers: {
    addCategory: (state, action) => {
      return action.payload;
    },
  },
});

export default CategorySlice;
export const CategoryAction = CategorySlice.actions;
