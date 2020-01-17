import React from 'react'
import products, { getProductsMap } from './../Products/products'
import CartTotal from '../../../features/Cart/CartTotal';
import CartProductList from '../../../features/Cart/CartProductList';
import CartProductListItemExtended from '../../../features/Cart/CartProductListItemExtended';



const CartPage = ({
    productsInCart,
    productsMap=getProductsMap(products),
    removeProductFromCart,
    changeProductQuantity
}) => {
    return (
        <div>
            <h1 className="page-title">Cart Page</h1>
            <CartProductList 
                productsInCart={productsInCart}
                removeProductFromCart={removeProductFromCart}
                CartListItem={CartProductListItemExtended}
                changeProductQuantity={changeProductQuantity}/>
            <CartTotal 
                productsInCart={productsInCart}
            />
        </div>
    )
}

export default CartPage