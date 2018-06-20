import React, { Component } from 'react';
import Aux from '../hoc/Aux';
import Burger from '../components/Burger/Burger';
import BuildControls from '../components/Burger/BuildControls/BuildControls';
import OrderSummery from '../components/OrderSummery/OrderSummery';
import Modal from '../components/UI/Modal/Modal';
// import axios from '../axios-orders';
import Spinner from '../components/UI/Spinner/Spinner';

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
        totalPrice: 30,
        orderNow: false,
        loading: false
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;
        const newStateIngredients = {...this.state.ingredients};
        newStateIngredients[type] = newCount;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + PRICES[type];
        this.setState({
            ingredients: newStateIngredients,
            totalPrice: newPrice
        })
    } 

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if( oldCount === 0) {
            return;
        }
        const newCount = oldCount - 1;
        const newStateIngredients = { ...this.state.ingredients };
        newStateIngredients[type] = newCount;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - PRICES[type];
        this.setState({
            ingredients: newStateIngredients,
            totalPrice: newPrice
        })
    }

    orderNowHandler = () => {
        this.setState({ orderNow:true });
    }

    orderCancelHandler = () => {
        console.log(this.props);
        this.setState({ orderNow: false });
    }

    orderContinueHandler = () => {
        const queryParam = [];
        for (let i in this.state.ingredients) {
            queryParam.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
    
        }
        queryParam.push('price=' + this.state.totalPrice);
        const queryString = queryParam.join('&');
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        });
    }

    render() {
        let orderCont = <OrderSummery
            ingredients={this.state.ingredients}
            price={this.state.totalPrice}
            continue={this.orderContinueHandler}
            cancel={this.orderCancelHandler} />

        if(this.state.loading) {
            orderCont = <Spinner />
        }
        return (
            <Aux>
                <Modal order={this.state.orderNow} closeBackdrop={this.orderCancelHandler}>
                    {orderCont}
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls order={this.orderNowHandler} price={this.state.totalPrice} add={this.addIngredientHandler} remove={this.removeIngredientHandler}/>
            </Aux>

        );
    }
}

export default BurgerBuilder;
