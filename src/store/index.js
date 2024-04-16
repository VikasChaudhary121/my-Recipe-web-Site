import { configureStore } from "@reduxjs/toolkit";
import RecipeSlice from "./recipeSlice";
import FetchStatusSlice from "./fetchStatus";
import ItemsSlice from "./items";
import CategorySlice from "./category";

const Recipies = configureStore({
  reducer: {
    recipe: RecipeSlice.reducer,
    fetch: FetchStatusSlice.reducer,
    items: ItemsSlice.reducer,
    category: CategorySlice.reducer,
  },
});

export default Recipies;
