import React, { useState } from "react";
import CreatePage from "./CreatePage";

const Ingredients = (props) => {
    const { ingredientList, setIngredientList } = props;
    const [ ingredient, setIngredient ] = useState("");

    return (
        <div>
            <p>Ingredient: </p>
      <input
        value={ ingredient }
        onChange={ (e) => setIngredient(e.target.value)}
      />
      <button onClick={ () => {
        setIngredientList([
          ...ingredientList, {ingredient: ingredient}
        ]);
      }}>Add</button>
      <ul>
        {ingredientList.map(ingredient => (
          <li key={ingredient.id}>{ingredient.ingredient}</li>
        ))}
      </ul>
        </div>
    );
}

export default Ingredients;