import React from "react";
import BuildControl  from './BuildControl/BuildControl';
import classes from './BuildControls.css';

const buildControls = (props) => {
    let purchasable = false;
    if( props.price > 30 ) {
        purchasable = true;
    }
    return (
        <div className={classes.BuildControls}>
            <div><strong>Current Price: Rs {props.price}</strong></div>
            <BuildControl Label='Salad' type='salad' add={() => props.add('salad')} remove={() => props.remove('salad')} />
            <BuildControl Label='Meat' type='meat' add={() => props.add('meat')} remove={() => props.remove('meat')}/>
            <BuildControl Label='Cheese' type='cheese' add={() => props.add('cheese')} remove={() => props.remove('cheese')}/>
            <BuildControl Label='Bacon' type='bacon' add={() => props.add('bacon')} remove={() => props.remove('bacon')}/>
            <button className={classes.OrderButton} onClick={props.order} disabled={!purchasable}>ORDER NOW</button>
        </div>
    )
}

export default buildControls;