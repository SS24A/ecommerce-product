import { useState } from 'react'

import logo from '../assets/logo.svg'
import menuIcon from '../assets/icon-menu.svg'

import CartState from './CartState'
import HeaderMenu from './HeaderMenu'
import HeaderCartAvatar from './HeaderCartAvatar'

export default function Header({
    cartItemQuantity,
    mainImgIndex,
    setCartItemQuantity,
}) {
    const [showCart, setShowCart] = useState(false)

    return (
        <>
            <div className="header-container">
                <span className="header-menu-icon">
                    <img src={menuIcon} alt="menu" />
                </span>
                <span className="header-logo">
                    <img src={logo} alt="logo" />
                </span>
                <HeaderMenu />
                <HeaderCartAvatar
                    cartItemQuantity={cartItemQuantity}
                    setShowCart={setShowCart}
                    showCart={showCart}
                />
                {showCart && (
                    <CartState
                        cartItemQuantity={cartItemQuantity}
                        mainImgIndex={mainImgIndex}
                        setCartItemQuantity={setCartItemQuantity}
                    />
                )}
            </div>
        </>
    )
}
