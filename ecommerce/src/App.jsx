import { useState } from 'react'

import './App.css'

import Header from './components/Header'
import ProductImages from './components/ProductImages'
import ProductInfo from './components/ProductInfo'
import CartItems from './components/CartItems'

export default function App() {
    const [mainImgIndex, setMainImgIndex] = useState(0)
    const [cartItemQuantity, setCartItemQuantity] = useState(0)
    const [isLightBoxShown, setIsLightBoxShown] = useState(false)

    const addToCart = (numOfItems) => {
        setCartItemQuantity(cartItemQuantity + numOfItems)
    }

    return (
        <>
            <header className="header">
                <Header
                    mainImgIndex={mainImgIndex}
                    cartItemQuantity={cartItemQuantity}
                    setCartItemQuantity={setCartItemQuantity}
                />
            </header>
            <main className="product-section">
                <div className="container">
                    <div className="product-section-inner">
                        <ProductImages
                            setIsLightBoxShown={setIsLightBoxShown}
                            mainImgIndex={mainImgIndex}
                            setMainImgIndex={setMainImgIndex}
                        />
                        <section className="product-info">
                            <ProductInfo />
                            <CartItems addToCart={addToCart} />
                        </section>
                    </div>
                </div>
                {isLightBoxShown && (
                    <div className="lightbox">
                        <ProductImages
                            mainImgIndex={mainImgIndex}
                            setIsLightBoxShown={setIsLightBoxShown}
                            isLightboxElement
                        />
                    </div>
                )}
            </main>
        </>
    )
}
