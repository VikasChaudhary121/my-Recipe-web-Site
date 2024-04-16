import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { FetchingStatusAction } from "../store/fetchStatus";
import { RecipeAction } from "../store/recipeSlice";

function Header() {
  const dispatch = useDispatch();
  const fetchStatus = useSelector((store) => store.fetch);

  const handleSearchButton = (event) => {
    event.preventDefault();
    dispatch(FetchingStatusAction.searchButtonClicked());
    const currentInput = event.target[1].value;
    fetch(`https://dummyjson.com/recipes/search?q=${currentInput}`)
      .then((result) => result.json())
      .then((data) => {
        dispatch(RecipeAction.addSearchedItems(data.recipes));
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  return (
    <>
      <header className="p-3 text-bg-dark">
        <div className="container ">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start head">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none logo"
            >
              <h2 className="logo-symb">The Yuummsss...</h2>
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="#" className="nav-link px-2 text-secondary">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-white">
                  About
                </a>
              </li>
            </ul>

            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 searchInput"
              role="search"
              onSubmit={handleSearchButton}
            >
              <button className="searchButton">
                <FaSearch />
              </button>
              <input
                type="search"
                className="form-control form-control-dark text-bg-dark inputArea"
                placeholder="Search ..."
                aria-label="Search"
              />
            </form>

            <div className="text-end">
              <button type="button" className="btn btn-outline-light me-2">
                Login
              </button>
              <button type="button" className="btn btn-warning">
                Sign-up
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
