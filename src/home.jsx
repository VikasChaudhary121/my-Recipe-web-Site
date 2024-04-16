import { useSelector } from "react-redux";
import RecipeCard from "./components/recipeCard";

function Home() {
  const fetchStatus = useSelector((store) => store.fetch);
  const initialItems = useSelector((store) => store.items);
  const searchedItems = useSelector((store) => store.recipe);
  const categoryItems = useSelector((store) => store.category);

  let items = initialItems;
  if (fetchStatus.categoryClicked === true) {
    items = categoryItems;
  }
  if (fetchStatus.clicked === true) {
    items = searchedItems;
  }

  return (
    <div className="home">
      {items.length === 0 ? (
        <div className="emptyMsg">
          <h2>No Recipe Found !!!</h2>
          <h2>Try Searching Different Recipe</h2>
        </div>
      ) : (
        items.map((item) => <RecipeCard key={item.id} item={item}></RecipeCard>)
      )}
    </div>
  );
}

export default Home;
