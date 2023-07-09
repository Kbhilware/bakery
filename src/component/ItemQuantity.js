// import React, { useContext } from 'react'
// import ButtonClickContext from '../context/ButtonClickContext'\
// import { useState } from "react";


const ItemQuantity = (props) => {
//   const a = useContext(ButtonClickContext);
    
    // let [totalPrice, calTotalPrice] = useState(props.a);
    // const calPrice = () => {
    //     calTotalPrice(totalPrice + props.a);    
    // }
    
    // calTotalPrice(totalPrice + props.a); 
  return (
    <button className="btn btn-outline-primary">
        <span onClick={props.quantityHandler}>-</span>
        
        <span className='px-4'>{props.itemCount} </span>
        
        <span onClick={props.action}>+</span>
        
    </button>
  )
}

export default ItemQuantity
