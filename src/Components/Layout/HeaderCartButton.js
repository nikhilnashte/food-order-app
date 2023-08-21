import React, { Component,useContext } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import CartContext from '../../store/cart-context';

const HeaderCartButton =(props)=> {
   const cartCtx = useContext(CartContext);
    const numberOfCartItems=cartCtx.items.reduce((curNumber,item)=>{
        return curNumber + item.amount;
    },0);

     return (
      <button className="gap-4 inline-flex items-center bg-[#F8DE22] border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
      onClick={props.onClick}>
       
        <span><AiOutlineShoppingCart/></span>
        <span>Your Cart</span>
        <span className='bg-[#DFD7BF] w-8 rounded-md'>{numberOfCartItems}</span>
      </button>
    ) 
};

export default HeaderCartButton