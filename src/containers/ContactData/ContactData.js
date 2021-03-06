import React, { Component } from 'react';

import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';
import axios from '../../axios-orders';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: '',
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            customer: {
                name: 'Joydeep',
                address: 'Kolkata'
            }
        }
        axios.post('/orders.json', order)
        .then((response) => {
            this.setState({ loading: false });
            console.log('res', response);
            this.props.history.push('/');
        }).catch((error) => {
            console.log(error);
            this.setState({ loading: false });
        });
    }


    render () {
        let form = (
            <form>
                <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
                <input className={classes.Input} type="email" name="email" placeholder="Your Mail" />
                <input className={classes.Input} type="text" name="address" placeholder="Address" />
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if ( this.state.loading ) {
            form = <Spinner />;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;