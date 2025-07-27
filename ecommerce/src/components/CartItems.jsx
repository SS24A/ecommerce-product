import { useState } from 'react'

import plusIcon from '../assets/icon-plus.svg'
import minusIcon from '../assets/icon-minus.svg'
import cart from '../assets/icon-cart.svg'

export default function CartItems({ addToCart }) {
    const [itemQuantity, setItemQuantity] = useState(0)
    return (
        <div className="product-cart">
            <span className="product-cart-quantity">
                <span
                    onClick={() => {
                        if (itemQuantity > 0) setItemQuantity(itemQuantity - 1)
                    }}
                >
                    <img src={minusIcon} alt="minus" />
                </span>
                <span>{itemQuantity}</span>
                <span
                    onClick={() => {
                        setItemQuantity(itemQuantity + 1)
                    }}
                >
                    <img src={plusIcon} alt="plus" />
                </span>
            </span>
            <button
                onClick={() => {
                    addToCart(itemQuantity)
                }}
            >
                <img src={cart} alt="cart" />
                <span>Add to cart</span>
            </button>
        </div>
    )
}
