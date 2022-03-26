import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Food from '../Food/Food';
import  './Menu.css'

//menu component
const Menu = () => {
 const [foods,setFoods] = useState([]);
 const [cart,setCart] = useState([])

 //data fetch
 useEffect(()=>{
       fetch('data.json')
       .then(res=>res.json())
       .then(data=>setFoods(data))

 },[])

 //add to cart
 const handleFoodClick=( food)=>{
 const addedFood=[...cart,food];
 setCart(addedFood)
 }

// one order selection 
 const handleChooseOne=()=>{
     const x =cart[Math.floor(Math.random()*cart.length)];
     setCart([x])
 }
 //clear selection
 const handleRemove=()=>{
    setCart([])   
 }

    return (
        <div className='foods-orders-container'>

            <div className="foods">
                {
                    foods.map(food=><Food
                    food={food}
                    key={food.id}
                     handleFoodClick={handleFoodClick}>
                     </Food>)
                }
            </div>

            <div className="orders">
            <div>
            <h2>Order List</h2>
               {
                 cart.map(item=><Cart item={item}
                 key={Math.random()*10}></Cart>)
                }
            <button onClick={handleChooseOne}>Choose One</button><br />
            <button  onClick={handleRemove}>Reset Selection</button>
            </div>
            </div>

        </div>
    );
};

export default Menu;