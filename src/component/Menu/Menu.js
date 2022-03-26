import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Food from '../Food/Food';
import  './Menu.css'
const Menu = () => {
 const[foods,setFoods]=useState([]);
 const[cart,setCart]=useState([])
console.log(cart);
//  console.log(foods)

 useEffect(()=>{
       fetch('data.json')
       .then(res=>res.json())
       .then(data=>setFoods(data))

 },[])

 const handleFoodClick=( food)=>{
console.log('clicked',food.id)
const addedFood=[...cart,food];
setCart(addedFood)
 }

    return (
        <div className='foods-container'>
           
            <div className="foods">
               
                {
                    foods.map(food=><Food
                    food={food}
                    key={food.id}
                  handleFoodClick={handleFoodClick}

                    ></Food>)
                }
            </div>
            <div className="order-container">
            <h3>Order Summary</h3>
           {
        cart.map(item=><Cart item={item}
        key={item.id}
        ></Cart>)
           }
           
            <button>CHOOSE ONE</button>

            <button>REMOVE</button>
            </div>

        </div>
    );
};

export default Menu;