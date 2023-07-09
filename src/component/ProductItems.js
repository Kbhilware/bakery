import React, { useReducer } from 'react'


const ProductItems = (props) => {
    const initialItemInfo = 0;
    const reducer = (ItemInfo, action) => {
        if(action.type === "Add"){
            props.savepi(props.id,props.title, props.price);
            return (ItemInfo + 1)
        }
        if(action.type === "Remove"){
            console.log("Remove", props.id);
            props.d(props.id);
            return (ItemInfo - 1)
        }
    }
    const [itemInfo, dispatch] = useReducer(reducer, initialItemInfo);
    return (
        <div className="col-9 col-md-3">
        <div className='card'>
            <img src={props.thumbImg} className="img-fluid" alt="..." />
            <div className="card-body pb-0 text-center">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.price}</p>
                 <button onClick={itemInfo ? ()=> dispatch({type: "Remove"}) : ()=> dispatch({type: "Add"})} className={`btn btn-outline-primary ${itemInfo ? "active" : "Add to Cart" }`}>
                 {itemInfo ? "Remove" : "Add to Cart" }
                 </button>
            </div>
            </div>
        </div>
    )
}

export default ProductItems;
