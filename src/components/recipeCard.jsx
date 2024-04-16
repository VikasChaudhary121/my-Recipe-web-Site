import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";

function RecipeCard({ item }) {
  return (
    <div>
      <div className="recipe-card">
        <center>
          <h1 className="recipeName">{item.name}</h1>
        </center>
        <div className="main">
          <div className="recipe-details">
            <div className="recipe-info">
              <div className="info-label">
                <span>
                  <h4>Cuisine: </h4>
                </span>
                <span className="label">{item.cuisine}</span>
              </div>
              <div className="info-label">
                <span>
                  <h4>Servings: </h4>
                </span>
                <span className="label">{item.servings}</span>
              </div>
              <div className="info-label">
                <span>
                  <h4>Prep Time: </h4>
                </span>
                <span className="label">{item.prepTimeMinutes} minutes</span>
              </div>
              <div className="info-label">
                <span>
                  <h4>Cook Time :</h4>
                </span>
                <span className="label">{item.cookTimeMinutes} minutes</span>
              </div>
              <div className="info-label">
                <span>
                  <h4>Difficulty: </h4>
                </span>
                <span className="label">{item.difficulty}</span>
              </div>
              <div className="info-label">
                <span>
                  <h4>Calories: </h4>
                </span>
                <span className="label">
                  {item.caloriesPerServing} per serving
                </span>
              </div>
            </div>
            <div className="recipe-ingredients">
              <h2 className="ins-ing">Ingredients</h2>
              <ul>
                {item.ingredients.map((ingredient) => (
                  <li className="label">{ingredient}</li>
                ))}
              </ul>
            </div>
            <div className="recipe-instructions">
              <h2 className="ins-ing">Instructions</h2>
              <ol>
                {item.instructions.map((instruction, i) => (
                  <li className="label">{instruction}</li>
                ))}
              </ol>
            </div>
          </div>
          <div className="recipe-image-container">
            <img className="recipeImage" src={item.image} alt={item.name} />
            <div className="info-label">
              <span>
                <h4>Ratings:</h4>
              </span>
              <span className="label">
                {item.rating} <FaStar /> ({item.reviewCount} reviews)
              </span>
            </div>

            <div className="tags">
              <span className="info-label">
                <h4>Tags: </h4>
              </span>
              {item.tags.map((tag, i) => (
                <span className="tagButtons" key={i}>
                  <button type="button" className="btn btn-primary">
                    {tag}
                  </button>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
