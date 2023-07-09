import React, { useContext } from 'react';
import ProductItems from './ProductItems'
import AddToCardContext from '../context/AddToCartContext'

const Product = () => {
    const fetchProducts = useContext(AddToCardContext);
    const { products, checkout } = fetchProducts;
    return (
        <div className='container my-5'>

            <h1 className='sectionHeading text-center'>
                New Products
            </h1>
            {checkout ? <> <div className='mt-5 text-center'><button  className='btn btn-outline-primary' onClick={fetchProducts.getCartInfo}>Open Console to Check Payload</button></div></>: ''}
            <div className="row d-flex mt-5 product-row">
                {products.length ? products.map((ele, i) => {
                    return <ProductItems key={ele.id} d={fetchProducts.deleteItem} savepi={fetchProducts.getProduct} id={ele.id} thumbImg={ele.thumb} title={ele.title} price={ele.price} />
                }) : <div className='text-center my-4 text-danger'>Out of Stock</div>}
            </div>
            
        </div>
    )
}

export default Product
