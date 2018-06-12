import React from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
    <Aux>
        <Backdrop show={props.order} clicked={props.closeBackdrop}/>
        <div className={classes.Modal} 
                style={{
                    transform: props.order ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.order ? '1' : '0'
                }}>
            {props.children}
        </div>
    </Aux>
)
    

export default modal;