import { useState } from 'react'
import cart from './assets/icon-cart.svg'
import avatar from './assets/avatar.png'
import logo from './assets/logo.svg'
import productMainImg1 from './assets/image-product-1.jpg'
import productMainImg2 from './assets/image-product-2.jpg'
import productMainImg3 from './assets/image-product-3.jpg'
import productMainImg4 from './assets/image-product-4.jpg'
import productThumbnail1 from './assets/image-product-1-thumbnail.jpg'
import productThumbnail2 from './assets/image-product-2-thumbnail.jpg'
import productThumbnail3 from './assets/image-product-3-thumbnail.jpg'
import productThumbnail4 from './assets/image-product-4-thumbnail.jpg'
import plusIcon from './assets/icon-plus.svg'
import minusIcon from './assets/icon-minus.svg'
import closeIcon from './assets/icon-close.svg'
import deleteIcon from './assets/icon-delete.svg'
import nextIcon from './assets/icon-next.svg'
import previousIcon from './assets/icon-previous.svg'
import menuIcon from './assets/icon-menu.svg'

import './App.css'
import Lightbox from './components/Lightbox'

const productMainImages = [
    productMainImg1,
    productMainImg2,
    productMainImg3,
    productMainImg4,
]

const productThumbnails = [
    productThumbnail1,
    productThumbnail2,
    productThumbnail3,
    productThumbnail4,
]

export default function App() {
    const [mainImgIndex, setMainImgIndex] = useState(0)
    const [itemQuantity, setitemQuantity] = useState(0)
    const [cartItemQuantity, setCartItemQuantity] = useState(0)
    const [showCart, setShowCart] = useState(false)
    const [showLightBox, setShowLightBox] = useState(false)

    return (
        <div className="container">
            <header>
                <div className="header-container">
                    <span className="header-menu-icon">
                        <img src={menuIcon} alt="menu" />
                    </span>
                    <span className="header-logo">
                        <img src={logo} alt="logo" />
                    </span>
                    <span className="header-menu-wrapper">
                        <ul className="header-menu">
                            <li>Collections</li>
                            <li>Men</li>
                            <li>Women</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </span>
                    <span className="header-cart-avatar">
                        {cartItemQuantity !== 0 && (
                            <span className="cart-num-items">
                                {cartItemQuantity}
                            </span>
                        )}
                        <img
                            className="header-cart"
                            src={cart}
                            alt="cart"
                            onClick={() => setShowCart(!showCart)}
                        />
                        <img
                            className="header-avatar"
                            src={avatar}
                            alt="avatar"
                        />
                    </span>
                    {showCart && (
                        <div className="cart-state">
                            <h3>Cart</h3>
                            <div></div>
                            {cartItemQuantity === 0 && (
                                <div className="cart-state-empty">
                                    Your cart is empty.
                                </div>
                            )}
                            {cartItemQuantity > 0 && (
                                <div>
                                    <div className="cart-state-info">
                                        <span className="cart-state-img">
                                            <img
                                                src={
                                                    productThumbnails[
                                                        mainImgIndex
                                                    ]
                                                }
                                                alt="sneakers"
                                            />
                                        </span>
                                        <span>
                                            <p>Fall Limited Edition Sneakers</p>
                                            <p>
                                                <span>
                                                    $125.00 x {cartItemQuantity}
                                                </span>
                                                <span className="total-price">
                                                    ${125.0 * cartItemQuantity}
                                                    .00
                                                </span>
                                            </p>
                                        </span>
                                        <span
                                            className="cart-state-delete"
                                            onClick={() =>
                                                setCartItemQuantity(0)
                                            }
                                        >
                                            <img
                                                src={deleteIcon}
                                                alt="delete"
                                            />
                                        </span>
                                    </div>
                                    <button>Checkout</button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </header>
            <main>
                <div className="product">
                    <section className="product-images">
                        <div
                            className="product-main-img"
                            onClick={() => setShowLightBox(true)}
                        >
                            <img
                                src={productMainImages[mainImgIndex]}
                                alt="sneakers"
                            />
                        </div>

                        <div className="product-thumbnails">
                            {productThumbnails.map((img, index) => (
                                <div
                                    key={index}
                                    className={`img-wrapper ${
                                        index === mainImgIndex
                                            ? 'selected-img'
                                            : ''
                                    }`}
                                >
                                    <img
                                        src={img}
                                        alt="sneakers"
                                        onClick={() => setMainImgIndex(index)}
                                    />
                                </div>
                            ))}
                        </div>
                    </section>
                    <section className="product-info">
                        <div className="product-description">
                            <h3>SNEAKER COMPANY</h3>
                            <h1>Fall Limited Edition Sneakers</h1>
                            <p>
                                These low-profile sneakers are your perfect
                                casual wear companion. Featuring a durable
                                rubber outer sole, they'll withstand everything
                                the weather can offer.
                            </p>
                        </div>
                        <div className="product-price">
                            <div>
                                <span className="product-price-current">
                                    $125.00
                                </span>
                                <span className="product-price-discount">
                                    50%
                                </span>
                            </div>

                            <span className="product-price-previous">
                                $250.00
                            </span>
                        </div>
                        <div className="product-cart">
                            <span className="product-cart-quantity">
                                <span
                                    onClick={() => {
                                        if (itemQuantity > 0)
                                            setitemQuantity(itemQuantity - 1)
                                    }}
                                >
                                    <img src={minusIcon} alt="minus" />
                                </span>
                                <span>{itemQuantity}</span>
                                <span
                                    onClick={() => {
                                        setitemQuantity(itemQuantity + 1)
                                    }}
                                >
                                    <img src={plusIcon} alt="plus" />
                                </span>
                            </span>
                            <button
                                onClick={() => {
                                    setCartItemQuantity(
                                        cartItemQuantity + itemQuantity
                                    )
                                }}
                            >
                                <img
                                    src={cart}
                                    alt="cart"
                                    className="product-cart-button"
                                />
                                <span>Add to cart</span>
                            </button>
                        </div>
                    </section>
                </div>
            </main>
            {showLightBox && (
                <Lightbox
                    productMainImages={productMainImages}
                    productThumbnails={productThumbnails}
                    mainImgIndex={mainImgIndex}
                    setShowLightBox={setShowLightBox}
                />
            )}
        </div>
    )
}
