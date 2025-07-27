import { useState } from 'react'

import logo from '../assets/logo.svg'
import menuIcon from '../assets/icon-menu.svg'

import HeaderMenu from './HeaderMenu'
import HeaderEnd from './HeaderEnd'
import CartState from './CartState'

export default function Header({
    mainImgIndex,
    cartItemQuantity,
    setCartItemQuantity,
}) {
    const [isCartOpened, setIsCartOpened] = useState(false)
    const [isMenuDropdownVisible, setIsMenuDropdownVisible] = useState(false)

    return (
        <div className="header container">
            <span
                className="header-menu-icon"
                onClick={() => setIsMenuDropdownVisible(true)}
            >
                <img src={menuIcon} alt="menu" />
            </span>
            <span className="header-logo">
                <img src={logo} alt="logo" />
            </span>
            <HeaderMenu
                isMenuDropdownVisible={isMenuDropdownVisible}
                setIsMenuDropdownVisible={setIsMenuDropdownVisible}
            />
            <HeaderEnd
                cartItemQuantity={cartItemQuantity}
                isCartOpened={isCartOpened}
                setIsCartOpened={setIsCartOpened}
            />
            {isCartOpened && (
                <CartState
                    mainImgIndex={mainImgIndex}
                    cartItemQuantity={cartItemQuantity}
                    setCartItemQuantity={setCartItemQuantity}
                />
            )}
        </div>
    )
}
