import { useState, useCallback } from "react";
import AddToCardContext from "./AddToCartContext";

const AddToCartState = (props) => {
    let products = [
        {
            "id": 1,
            "thumb": "../../images/andy-li-RndRFJ1v1kk-unsplash.jpg",
            "title": "Custard Powder",
            "price": '$50'
        },
        {
            "id": 2,
            "thumb": "../../images/austin-ban-IS6RwpuEJpY-unsplash.jpg",
            "title": "Corn Flour",
            "price": '$10'
        },
        {
            "id": 3,
            "thumb": "../../images/nadya-spetnitskaya-tOYiQxF9-Ys-unsplash.jpg",
            "title": "Double Acting Baking Powder",
            "price": '$20'
        }
        ,
        {
            "id": 4,
            "thumb": "../../images/wesual-click-rsWZ-P9FbQ4-unsplash.jpg",
            "title": "Swad Badam Drink Mix Hot 'N' Cold",
            "price": '$50'
        }
    ]
    let [pInfo, setPinfo] = useState([]);
    let [checkout, setCheckout] = useState(0);
    const getProduct = useCallback((id, name, price, quantity) => {
        setPinfo([
            ...pInfo,
            {
                "id": id,
                "title": name,
                "price": price,
                "quantity": quantity
            }
        ])
        setCheckout(1);
    }, [pInfo])

    const deleteItem = useCallback((id) => {
        let index = pInfo.findIndex((item) => item.id === id);
        // let currData = pInfo;
        if (index > -1) {
            setPinfo((prevPr) => {
                let updatedPr = prevPr;
                updatedPr.splice(index, 1);
                console.log("prevPr", updatedPr);
                return updatedPr;
            })
        }
        if(pInfo.length < 1){
            setCheckout(0);
        }
    }, [pInfo])
    const getCartInfo = () => {
        console.log('Payload', pInfo);
    }
    return (
        <AddToCardContext.Provider value={{ products, checkout, getProduct, deleteItem, getCartInfo }}>
            {props.children}
        </AddToCardContext.Provider>
    )
}

export default AddToCartState
