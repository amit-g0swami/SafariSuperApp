import React from 'react'
import ShoppingHome from './ShoppingHome'
import './Shopping.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ShoppingHeader from './ShoppingHeader';
import Checkout from './Checkout';

function Shopping() {
    return (
        <div className="shopping">
             <Router>
      <Switch>
        <Route path="/shopping">
        <ShoppingHeader />
            <ShoppingHome />
        </Route>
        <Route path="/checkout">
              <Checkout />
          </Route>
      </Switch>
    </Router>

        </div>
    )
}

export default Shopping
