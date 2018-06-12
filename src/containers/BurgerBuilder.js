import React, { Component } from 'react';
import Aux from '../hoc/Aux';
import Burger from '../components/Burger/Burger';
import BuildControls from '../components/Burger/BuildControls/BuildControls';

const PRICES = {
    salad: 10,
    meat: 30,
    cheese: 25,
    bacon: 15
} 

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            meat: 0,
            cheese: 0,
            bacon: 0
        },
        totalPrice: 30
    }

    addIngredientHandler = (type) => {
        console.log('in Add', type);
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;
        const newStateIngredients = {...this.state.ingredients};
        newStateIngredients[type] = newCount;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + PRICES[type];
        console.log(newPrice);
        this.setState({
            ingredients: newStateIngredients,
            totalPrice: newPrice
        })
    } 

    removeIngredientHandler = (type) => {
        console.log('in remove', type);
        const oldCount = this.state.ingredients[type];
        if( oldCount === 0) {
            return;
        }
        const newCount = oldCount - 1;
        const newStateIngredients = { ...this.state.ingredients };
        newStateIngredients[type] = newCount;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - PRICES[type];
        console.log(newPrice);
        this.setState({
            ingredients: newStateIngredients,
            totalPrice: newPrice
        })
    }
    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls price={this.state.totalPrice} add={this.addIngredientHandler} remove={this.removeIngredientHandler}/>
            </Aux>

        );
    }
}

export default BurgerBuilder;
