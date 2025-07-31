import deleteIcon from '../assets/icon-delete.svg'

import { productThumbnails } from '../assets/assets-product-images'

export default function CartState({
    mainImgIndex,
    cartItemQuantity,
    setCartItemQuantity,
}) {
    return (
        <div className="cart-state">
            <h3>Cart</h3>
            <div></div>

            {cartItemQuantity === 0 && (
                <div className="cart-state-empty">Your cart is empty.</div>
            )}
            {cartItemQuantity > 0 && (
                <div className="cart-state-filled">
                    <div className="cart-state-content">
                        <span className="cart-state-img">
                            <img
                                src={productThumbnails[mainImgIndex]}
                                alt="sneakers"
                            />
                        </span>
                        <span>
                            <p className="cart-state-text">
                                Fall Limited Edition Sneakers
                            </p>
                            <p>
                                <span>$125.00 x {cartItemQuantity}</span>
                                <span className="total-price">
                                    ${125.0 * cartItemQuantity}.00
                                </span>
                            </p>
                        </span>
                        <span
                            className="cart-state-delete"
                            onClick={() => setCartItemQuantity(0)}
                        >
                            <img src={deleteIcon} alt="delete" />
                        </span>
                    </div>
                    <button>Checkout</button>
                </div>
            )}
        </div>
    )
}
