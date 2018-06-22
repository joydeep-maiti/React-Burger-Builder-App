import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';

class Orders extends Component {
    state = {
        orders : [],
        loading : false
    }
    componentDidMount() {
        this.setState({ loading: true })
        axios.get('/orders.json')
        .then(res => {
            let fetchedOrders = [];
            for ( let key in res.data ) {
                fetchedOrders.push({...res.data[key], id:key});
            }
            this.setState({ orders: fetchedOrders, loading: false })
        })
        .catch(err => {
            console.log(err);
            this.setState({ loading: false })
        });
    }
    render() {
        let myorders = null;
        if(this.state.loading) {
            myorders = <Spinner/>
        }
        return(
            <div>
                {myorders}
                { this.state.orders.map((order) => (
                    <Order key={order.id} ingredients={order.ingredients} price={order.price} />
                )
                )}
            </div>
           
        )
    }
}


export default Orders;