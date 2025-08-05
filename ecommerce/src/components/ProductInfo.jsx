import '../css/product-info.css'

export default function ProductInfo() {
    return (
        <>
            <div className="product-description">
                <h3>SNEAKER COMPANY</h3>
                <h1>Fall Limited Edition Sneakers</h1>
                <p>
                    These low-profile sneakers are your perfect casual wear
                    companion. Featuring a durable rubber outer sole, they'll
                    withstand everything the weather can offer.
                </p>
            </div>
            <div className="product-price">
                <div>
                    <span className="product-price-current">$125.00</span>
                    <span className="product-price-discount">50%</span>
                </div>

                <span className="product-price-previous">$250.00</span>
            </div>
        </>
    )
}
