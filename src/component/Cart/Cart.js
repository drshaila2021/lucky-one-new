import React from 'react';
import './Cart.css'

//cart compomenet
const Cart = (props) => {
    const {name} =props.item; 
    return (
        <div className='cart'>      
               <p>{name}</p>
        </div>
    );
};

export default Cart;