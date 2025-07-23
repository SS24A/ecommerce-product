import cart from '../assets/icon-cart.svg'
import avatar from '../assets/avatar.png'

export default function HeaderEnd({
    cartItemQuantity,
    isCartOpened,
    setIsCartOpened,
}) {
    return (
        <span className="header-cart-avatar">
            <span className="header-cart-wrapper">
                {cartItemQuantity !== 0 && (
                    <span className="cart-num-items">{cartItemQuantity}</span>
                )}
                <img
                    className="header-cart"
                    src={cart}
                    alt="cart"
                    onClick={() => setIsCartOpened(!isCartOpened)}
                />
            </span>

            <img className="header-avatar" src={avatar} alt="avatar" />
        </span>
    )
}
