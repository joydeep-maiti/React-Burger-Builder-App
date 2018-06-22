import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder';
import Checkout from './containers/Checkout';
import Orders from './containers/Orders/Orders';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Route path='/' exact component= {BurgerBuilder} />
          <Route path='/checkout' component= {Checkout} />
          <Route path='/orders' exact component={Orders} />
        </Layout>
      </div>
    );
  }
}

export default App;
