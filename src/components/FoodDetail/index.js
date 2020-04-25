import React from 'react';
const FoodDetail = props => {
  const {
    history: {
      location: { ingredients }
    }
  } = props;

  return (
    <>
      <h1>{`Ingredients used:`}</h1>
      {ingredients && ingredients.length ? (
        <ul>
          {ingredients.map(ingredient => {
            return <li>{ingredient.name}</li>;
          })}
        </ul>
      ) : (
        <div> No Ingredient found</div>
      )}
    </>
  );
};
export default FoodDetail;
