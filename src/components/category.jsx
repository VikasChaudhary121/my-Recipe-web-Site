import { useDispatch, useSelector } from "react-redux";
import { CategoryAction } from "../store/category";
import { FetchingStatusAction } from "../store/fetchStatus";
import { useState } from "react";

function Category() {
  const dispatch = useDispatch();
  const searchBtnClicked = useSelector((store) => store.fetch);
  const [categoryBtnClicked, setCategoryBtnClicked] = useState(false);

  const handleCategoryBtnClick = (event) => {
    const currentValue = event.target.innerHTML;
    setCategoryBtnClicked(true);
    fetch(`https://dummyjson.com/recipes/search?q=${currentValue}`)
      .then((result) => result.json())
      .then((data) => {
        dispatch(CategoryAction.addCategory(data.recipes));
        dispatch(FetchingStatusAction.categoryButtonClicked());
      })
      .catch((error) => console.error("Some Error Occured :", error));
  };

  return (
    <>
      {!searchBtnClicked.clicked && !categoryBtnClicked && (
        <div className="categories">
          <div className="categoryCard">
            <img
              src="https://www.foodandwine.com/thmb/EfUCoSTOsihElhemf6pM5B5t-YQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/roast-chicken-with-chile-basil-vinaigrette-FT-RECIPE0321-7da10eb123af434c9f350abe24d0d8a8.jpg"
              alt="CHICKEN"
              className="categoryImage"
            />
            <p>Trending CHICKEN Dishes Are Here !!!</p>
            <button className="cate-Button" onClick={handleCategoryBtnClick}>
              CHICKEN
            </button>
          </div>
          <div className="categoryCard">
            <img
              src="https://www.recipetineats.com/wp-content/uploads/2014/06/Pasta1.jpg"
              alt="CHICKEN"
              className="categoryImage"
            />
            <p>Trending PASTA Dishes Are Here !!!</p>
            <button className="cate-Button" onClick={handleCategoryBtnClick}>
              PASTA
            </button>
          </div>
          <div className="categoryCard">
            <img
              src="https://www.southernliving.com/thmb/3x3cJaiOvQ8-3YxtMQX0vvh1hQw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2652401_QFSSL_SupremePizza_00072-d910a935ba7d448e8c7545a963ed7101.jpg"
              alt="CHICKEN"
              className="categoryImage"
            />
            <p>Trending PIZZA Dishes Are Here !!!</p>
            <button className="cate-Button" onClick={handleCategoryBtnClick}>
              PIZZA
            </button>
          </div>
          <div className="categoryCard">
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/best-chocolate-desserts-recipes-peanut-butter-molten-chocolate-cakes-648c51a927c0a.jpg?crop=1.00xw:0.668xh;0,0.289xh&resize=640:*"
              alt="CHICKEN"
              className="categoryImage"
            />
            <p>Trending CHOCOLATE Dishes Are Here !!!</p>
            <button className="cate-Button" onClick={handleCategoryBtnClick}>
              CHOCOLATE
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Category;
