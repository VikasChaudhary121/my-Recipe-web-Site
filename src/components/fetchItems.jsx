import { useEffect } from "react";
import { FetchingStatusAction } from "../store/fetchStatus";
import { useDispatch, useSelector } from "react-redux";
import { ItemsAction } from "../store/items";
import { RecipeAction } from "../store/recipeSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetch);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) {
      return;
    }

    dispatch(FetchingStatusAction.markFetching());
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((items) => {
        dispatch(FetchingStatusAction.markFetchDone());
        dispatch(FetchingStatusAction.markFetchingDone());
        dispatch(ItemsAction.addInitialItems(items));
      });
  }, [fetchStatus]);

  return <></>;
};

export default FetchItems;
