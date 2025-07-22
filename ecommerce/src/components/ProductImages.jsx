import closeIcon from '../assets/icon-close.svg'
import nextIcon from '../assets/icon-next.svg'
import previousIcon from '../assets/icon-previous.svg'
import {
    productMainImages,
    productThumbnails,
} from '../assets/assets-product-images'

import { useState } from 'react'

export default function ProductImages({
    setIsLightBoxShown,
    mainImgIndex,
    setMainImgIndex,
    isLightboxElement,
}) {
    const [lightboxImgIndex, setLightboxImgIndex] = useState(mainImgIndex)
    const imgIndex = isLightboxElement ? lightboxImgIndex : mainImgIndex
    const setImgIndex = isLightboxElement
        ? setLightboxImgIndex
        : setMainImgIndex
    return (
        <>
            {isLightboxElement && (
                <img
                    alt="close-icon"
                    src={closeIcon}
                    className="close-icon"
                    onClick={() => setIsLightBoxShown(false)}
                />
            )}
            <section className="product-images">
                <div
                    className="product-main-img"
                    onClick={() => {
                        if (!isLightboxElement) setIsLightBoxShown(true)
                    }}
                >
                    {isLightboxElement && (
                        <span
                            className="previous-icon"
                            onClick={() =>
                                setImgIndex(
                                    (imgIndex - 1 + productMainImages.length) %
                                        productMainImages.length
                                )
                            }
                        >
                            <img alt="previous" src={previousIcon} />
                        </span>
                    )}
                    <img src={productMainImages[imgIndex]} alt="sneakers" />
                    {isLightboxElement && (
                        <span
                            className="next-icon"
                            onClick={() =>
                                setImgIndex(
                                    (imgIndex + 1) % productMainImages.length
                                )
                            }
                        >
                            <img alt="next" src={nextIcon} />
                        </span>
                    )}
                </div>

                <div className="product-thumbnails">
                    {productThumbnails.map((img, i) => (
                        <div
                            key={i}
                            className={`img-wrapper ${
                                i === imgIndex ? 'selected-img' : ''
                            }`}
                        >
                            <img
                                src={img}
                                alt="sneakers"
                                onClick={() => setImgIndex(i)}
                            />
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
