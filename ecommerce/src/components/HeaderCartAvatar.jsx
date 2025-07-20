import cart from '../assets/icon-cart.svg'
import avatar from '../assets/avatar.png'

export default function HeaderCartAvatar({
    cartItemQuantity,
    setShowCart,
    showCart,
}) {
    return (
        <>
            <span className="header-cart-avatar">
                {cartItemQuantity !== 0 && (
                    <span className="cart-num-items">{cartItemQuantity}</span>
                )}
                <img
                    className="header-cart"
                    src={cart}
                    alt="cart"
                    onClick={() => setShowCart(!showCart)}
                />
                <img className="header-avatar" src={avatar} alt="avatar" />
            </span>
        </>
    )
}
