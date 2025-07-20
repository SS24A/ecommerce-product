import closeIcon from '../assets/icon-close.svg'
import nextIcon from '../assets/icon-next.svg'
import previousIcon from '../assets/icon-previous.svg'

import {
    productMainImages,
    productThumbnails,
} from '../assets/assets-product-images'

import { useState } from 'react'

export default function Lightbox({ mainImgIndex, setShowLightBox }) {
    const [index, setIndex] = useState(mainImgIndex)

    return (
        <div className="lightbox">
            <img
                alt="close"
                src={closeIcon}
                className="close-icon"
                onClick={() => setShowLightBox(false)}
            />
            <section className="product-images">
                <div className="product-main-img">
                    <span
                        className="previous-icon"
                        onClick={() =>
                            setIndex(
                                (index - 1 + productMainImages.length) %
                                    productMainImages.length
                            )
                        }
                    >
                        <img alt="previous" src={previousIcon} />
                    </span>

                    <img src={productMainImages[index]} alt="sneakers" />
                    <span
                        className="next-icon"
                        onClick={() =>
                            setIndex((index + 1) % productMainImages.length)
                        }
                    >
                        <img alt="next" src={nextIcon} />
                    </span>
                </div>

                <div className="product-thumbnails">
                    {productThumbnails.map((img, i) => (
                        <div
                            key={i}
                            className={`img-wrapper ${
                                i === index ? 'selected-img' : ''
                            }`}
                        >
                            <img
                                src={img}
                                alt="sneakers"
                                onClick={() => setIndex(i)}
                            />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
