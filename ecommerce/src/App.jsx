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

export default function App() {
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
                        <span className="cart-num-items">3</span>
                        <img className="header-cart" src={cart} alt="cart" />
                        <img
                            className="header-avatar"
                            src={avatar}
                            alt="avatar"
                        />
                    </span>
                </div>
            </header>
            <main>
                <div className="product">
                    <section className="product-images">
                        <div className="product-main-img">
                            <img src={productMainImg1} alt="sneakers" />
                        </div>

                        <div className="product-thumbnails">
                            <img src={productThumbnail1} alt="sneakers" />
                            <img src={productThumbnail2} alt="sneakers" />
                            <img src={productThumbnail3} alt="sneakers" />
                            <img src={productThumbnail4} alt="sneakers" />
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
                            <span className="product-price-current">
                                $125.00
                            </span>
                            <span className="product-price-discount">50%</span>
                            <span className="product-price-previous">
                                $250.00
                            </span>
                        </div>
                        <div className="product-cart">
                            <span className="product-cart-quantity">
                                <span>
                                    <img src={minusIcon} alt="minus" />
                                </span>
                                <span>0</span>
                                <span>
                                    <img src={plusIcon} alt="plus" />
                                </span>
                            </span>
                            <button>
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
        </div>
    )
}
