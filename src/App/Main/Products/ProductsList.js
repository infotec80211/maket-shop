import React from 'react'
import './ProductsList.css'
import products from './products'
import ProductListItem from './ProductListItem';

const ProductsList = ({
    addProductToCart
}) => {
    return (
        <div>
            <h1 className="page-title">Products List</h1>
            <div className="row">
                {
                    products.map(({
                        id,
                        name,
                        description,
                        capacity,
                        type,
                        price,
                        image,
                    })=>(
                        <div className="col-lg-6" key={id}>
                            <ProductListItem
                                id={id}
                                name={name}
                                description={description}
                                type={type}
                                capacity={capacity}
                                price={price}
                                image={image}
                                addProductToCart={addProductToCart}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
 
export default ProductsList