import React,{ useState } from 'react';
import Cart from './components/Cart/Cart';
import MealHeader from './components/Layout/MealHeader';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';
import './Videocall.css';

function Videocall() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = ()=>{
    setCartIsShown(true);
  };
  const hideCartHandler = ()=>{
    setCartIsShown(false);
  };
  return (
    <div className="foodshop">
    <CartProvider classname="videocall">
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <MealHeader onShowCart={showCartHandler}></MealHeader>
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
    </div>
  );
}

export default Videocall;
