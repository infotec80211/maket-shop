import React from 'react'
import {keys} from 'lodash'
import products, { getProductsMap } from '../../App/Main/Products/products';
import CartProductListItem from './CartProductListItem';

const CartProductList = ({
    productsInCart,
    productsMap=getProductsMap(products),
    CartListItem = CartProductListItem,
    removeProductFromCart,
    changeProductQuantity
}) => {
    return (
        <div>
            {   
                keys(productsInCart).map((productId)=>(
                    <CartListItem
                        product={productsMap[productId]}
                        productCount={productsInCart[productId]}
                        key={productId}
                        removeProductFromCart={removeProductFromCart}
                        changeProductQuantity={changeProductQuantity}
                    />
                ))
            }
        </div>
        
    )
}

export default CartProductList