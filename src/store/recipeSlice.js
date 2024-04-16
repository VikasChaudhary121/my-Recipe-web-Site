import { createSlice } from "@reduxjs/toolkit";

const RecipeSlice = createSlice({
  name: "recipe",
  initialState: [],
  reducers: {
    addSearchedItems: (state, action) => {
      return action.payload;
    },
  },
});

export const RecipeAction = RecipeSlice.actions;

export default RecipeSlice;
