import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Food.css'
const Food = (props) => {
    const{name, price, picture}=props.food;
    const{handleFoodClick}=props
    return (
        <div className='food'>
            <img src={picture} alt="" />
            <h3>Name:{name}</h3>
            <p>price: $ {price}</p>
            <button  onClick={()=>handleFoodClick(props.food)}>ORDER HERE  <FontAwesomeIcon icon={ faShoppingCart }></FontAwesomeIcon>  </button>
        </div>
    );
};

export default Food;