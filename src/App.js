import './App.css';
import {useState } from 'react';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
 const[cartIsShown,setCartIsShown]=useState(false);

 const showCartHandler=()=>{
  setCartIsShown(true);
 }
const hideCartHandler=()=>{
  setCartIsShown(false);
} 

  return (
      <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler}/>
      <main className='bg-[#606C5D] px-[13%]'> 
      <Meals/>
      </main>
      </CartProvider>
  );
}

export default App;
