// import React from 'react'

function AddToCart(props) {
  return (
    
        <button onClick={props.check ?props.quantityHandler: props.action } className="btn btn-primary">{props.check ? "Remove" : "Add" }</button>
    
  )
}

export default AddToCart
