import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = props => {
  // THIS DOES NOT WORK, it creates an empty array of length three, which is different than an array of length 3 with undefined values:
  //   let transformedIngredients = Object.keys(props.ingredients).map(ingredientKey => {
  //     return Array(props.ingredients[ingredientKey]).map((_, i) => {
  //       return <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />;
  //     });
  //   });

  let transformedIngredients = Object.keys(props.ingredients).map(ingredientKey => {
    return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
      return <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />;
    });
  });

  //   const hasIngredients = transformedIngredients.reduce((arr, el) => {
  //     return arr.concat(el);
  //   }, []);
  //   console.log(hasIngredients);

  const hasIngredients = transformedIngredients.flatMap(i => i);

  if (hasIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
