import React from 'react';
import Aux from '../../hoc/Aux';
import Button from '../UI/Button/Button';

const orderSummery = (props) => {
    const ingredientSummery = Object.keys(props.ingredients).map((igkeys) => {
        return (
            <li key={igkeys}>
                {igkeys} : {props.ingredients[igkeys]}
            </li>
        )
    })

    return (
        <Aux>
            <p><strong>Your Order Summery</strong></p>
            <p>A delicious Burger with ingredients</p>
            <ul>{ingredientSummery}</ul>
            <p><strong>Total : Rs{props.price} </strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType='Danger' clicked={props.cancel}><strong>CANCEL</strong></Button>
            <Button btnType='Success' clicked={props.continue}><strong>CONTINUE</strong></Button>

        </Aux>
    )
}

export default orderSummery;