import React from "react";
import BuildControl  from './BuildControl/BuildControl';
import classes from './BuildControls.css';

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <div><strong>Current Price: Rs {props.price}</strong></div>
            <BuildControl Label='Salad' type='salad' add={() => props.add('salad')} remove={() => props.remove('salad')} />
            <BuildControl Label='Meat' type='meat' add={() => props.add('meat')} remove={() => props.remove('meat')}/>
            <BuildControl Label='Cheese' type='cheese' add={() => props.add('cheese')} remove={() => props.remove('cheese')}/>
            <BuildControl Label='Bacon' type='bacon' add={() => props.add('bacon')} remove={() => props.remove('bacon')}/>
        </div>
    )
}

export default buildControls;