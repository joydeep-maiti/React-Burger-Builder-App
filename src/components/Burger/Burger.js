import React from 'react';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient';
import classes from './Burger.css';

const burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients).map((igkey) => {
        return [...Array(props.ingredients[igkey])].map((_, index) => {
            return (
                <BurgerIngredient key={igkey+index} type={igkey} />
            )
        })
    })
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'/>
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    );
}

export default burger;