import {
    productMainImages,
    productThumbnails,
} from '../assets/assets-product-images'

export default function ProductImages({
    setShowLightBox,
    mainImgIndex,
    setMainImgIndex,
}) {
    return (
        <>
            <section className="product-images">
                <div
                    className="product-main-img"
                    onClick={() => setShowLightBox(true)}
                >
                    <img src={productMainImages[mainImgIndex]} alt="sneakers" />
                </div>

                <div className="product-thumbnails">
                    {productThumbnails.map((img, index) => (
                        <div
                            key={index}
                            className={`img-wrapper ${
                                index === mainImgIndex ? 'selected-img' : ''
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
        </>
    )
}
