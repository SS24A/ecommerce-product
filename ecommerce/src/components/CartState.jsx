import deleteIcon from '../assets/icon-delete.svg'

import { productThumbnails } from '../assets/assets-product-images'

export default function CartState({
    cartItemQuantity,
    mainImgIndex,
    setCartItemQuantity,
}) {
    return (
        <>
            <div className="cart-state">
                <h3>Cart</h3>
                <div></div>

                {cartItemQuantity === 0 && (
                    <div className="cart-state-empty">Your cart is empty.</div>
                )}
                {cartItemQuantity > 0 && (
                    <div className="cart-basket-filled">
                        <div className="cart-state-info">
                            <span className="cart-state-img">
                                <img
                                    src={productThumbnails[mainImgIndex]}
                                    alt="sneakers"
                                />
                            </span>
                            <span>
                                <p>Fall Limited Edition Sneakers</p>
                                <p>
                                    <span>$125.00 x {cartItemQuantity}</span>
                                    <span className="total-price">
                                        ${125.0 * cartItemQuantity}
                                        .00
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
        </>
    )
}
