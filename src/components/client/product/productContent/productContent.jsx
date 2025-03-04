export default function ProductContent() {
  return (
    <>
      <div data-id="1" className="w28 product-show active">
        <img src="./assets/product-img.png" alt="product img" />
        <div className="product-info">
          <p className="price-text">10$</p>
          <button className="price-btn">View Details</button>
        </div>
      </div>
      <div data-id="2" className="w28 product-show active">
        <img src="./assets/product-img.png" alt="product img" />
        <div className="product-info">
          <p className="price-text">20$</p>
          <button className="price-btn">View Details</button>
        </div>
      </div>
      <div data-id="3" className="w28 product-show active">
        <img src="./assets/product-img.png" alt="product img" />
        <div className="product-info">
          <p className="price-text">30$</p>
          <button className="price-btn">View Details</button>
        </div>
      </div>
      <div data-id="4" className="w28 product-show">
        <img src="./assets/product-photo.png" alt="product img" />
        <div className="product-info">
          <p className="price-text">40$</p>
          <button className="price-btn">View Details</button>
        </div>
      </div>
      <div data-id="5" className="w28 product-show">
        <img src="./assets/product-img.png" alt="product img" />
        <div className="product-info">
          <p className="price-text">50$</p>
          <button className="price-btn">View Details</button>
        </div>
      </div>
      <div data-id="6" className="w28 product-show">
        <img src="./assets/product-photo.png" alt="product img" />
        <div className="product-info">
          <p className="price-text">60$</p>
          <button className="price-btn">View Details</button>
        </div>
      </div>
    </>
  );
}
