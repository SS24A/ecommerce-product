import { useState } from 'react'

import './App.css'
import Lightbox from './components/Lightbox'
import ProductInfo from './components/ProductInfo'
import ProductCart from './components/ProductCart'
import ProductImages from './components/ProductImages'
import Header from './components/Header'

export default function App() {
    const [mainImgIndex, setMainImgIndex] = useState(0)
    const [cartItemQuantity, setCartItemQuantity] = useState(0)
    const [showLightBox, setShowLightBox] = useState(false)

    const addToCart = (numOfItems) => {
        setCartItemQuantity(cartItemQuantity + numOfItems)
    }

    return (
        <div className="container">
            <header>
                <Header
                    cartItemQuantity={cartItemQuantity}
                    mainImgIndex={mainImgIndex}
                    setCartItemQuantity={setCartItemQuantity}
                />
            </header>
            <main>
                <div className="product">
                    <ProductImages
                        setShowLightBox={setShowLightBox}
                        mainImgIndex={mainImgIndex}
                        setMainImgIndex={setMainImgIndex}
                    />
                    <section className="product-info">
                        <ProductInfo />
                        <ProductCart addToCart={addToCart} />
                    </section>
                </div>
            </main>
            {showLightBox && (
                <Lightbox
                    mainImgIndex={mainImgIndex}
                    setShowLightBox={setShowLightBox}
                />
            )}
        </div>
    )
}
