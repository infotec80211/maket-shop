import React from 'react'

const QuantityInput = ({
    onIncrementClick,
    onDecrementClick,
    productCount,
    minValue
}) => {
    return (
        <div className="product-quantity">
            <button  
                onClick={()=>onDecrementClick()}
                disabled={productCount <= minValue}
                >-</button>
            <input type="text" value={productCount} readOnly/>
            <button 
                onClick={()=>onIncrementClick()}
                disabled={productCount >= 10}
                >+</button>
        </div>
    )
}

export default QuantityInput