import React from 'react';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient';
import classes from './Burger.css';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).map((igkey) => {
        return [...Array(props.ingredients[igkey])].map((_, index) => {
            return (
                <BurgerIngredient key={igkey+index} type={igkey} />
            )
        })
    }).reduce((arr, el) => {
        return arr.concat(el)
    }, [])
    if( transformedIngredients.length === 0 ) {
        transformedIngredients = <p> Please insert Ingredients </p>    
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'/>
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    );
}

export default burger;