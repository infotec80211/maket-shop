import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import './ProductListItem.css'
import QuantityInput from '../../../features/Quantity/QuantityInput';


class ProductListItem extends Component {


    state = {
        productCount:1,
        
    }

    onIncrementClick = () => {
        this.setState((prevState)=>({
            productCount:prevState.productCount + 1
        }))
    }

    onDecrementClick = () => {
        this.setState((prevState)=>({
            productCount:prevState.productCount - 1
        }))
    }


    render() {
        console.log(this)
        const {
            id,
            name,
            description = "No description ...",
            capacity,
            type,
            image,
            price,
            addProductToCart,
            isLiked=false
        } = this.props
        return (
            <div className="product-list-item">
                <div className="product-img">
                    <img src={image} alt={name}/>
                </div>
                <button>
                    {isLiked ? <span>&#9829;</span>:<span>&#9825;</span>}
                </button>
                <div className="product-title">{name}</div>
                <div className="product-description">{description}</div>
                <div className="product-features">Type: {type}</div>
                <div className="product-features">Capacity: {capacity} Gb</div>
                <QuantityInput
                    productCount={this.state.productCount}
                    onIncrementClick={this.onIncrementClick}
                    onDecrementClick={this.onDecrementClick}
                    minValue={1}
                />
                <div className="product-price"> {price} $</div>
                <button 
                    onClick={()=>addProductToCart(id,this.state.productCount)}
                className="btn-add-to-cart">Add to Cart</button>
            </div>
            
        )
    }
}

ProductListItem.propTypes = {
    name:PropTypes.string.isRequired,
    description:PropTypes.string,
    type:PropTypes.string.isRequired,
    capacity:PropTypes.number.isRequired,
    price:PropTypes.number.isRequired,
    image:PropTypes.string,
}

const mapStateToProps = (state,props)=>({
    isLiked:state[props.id],
})

export default connect(
    mapStateToProps,
)(ProductListItem)


