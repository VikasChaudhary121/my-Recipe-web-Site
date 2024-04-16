import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "./components/heading";
import FetchItems from "./components/fetchItems";
import { useSelector } from "react-redux";
import LoadingSpinner from "./components/loadingSpinner";
import Home from "./home";
import Category from "./components/category";

function App() {
  const fetchStatus = useSelector((store) => store.fetch);
  return (
    <>
      <Header />
      <Heading />
      <Category />
      <FetchItems />
      {fetchStatus.fetching ? <LoadingSpinner /> : <Home />}
      <Footer />
    </>
  );
}

export default App;
