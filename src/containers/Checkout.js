import React, { Component } from 'react';
import CheckoutSummary from '../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
    state = {
        ingredients : {
            salad: 1,
            meat: 1,
            cheese: 1,
            bacon: 1
        }
    }

    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/order-date');
    }

    checkoutCancelHandler = () => {
        this.props.history.goBack();
    }

    render() {
        return (
            <div>
                <CheckoutSummary 
                    ingredients= {this.state.ingredients}    
                    checkoutCancel={this.checkoutCancelHandler}
                    checkoutContinue={this.checkoutContinueHandler}
                />
            </div >
        )
    }
    
}

export default Checkout;