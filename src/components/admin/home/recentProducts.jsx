export default function RecentProducts() {
  return (
    <>
      <div className="flex-box-row sp-between align-center mb50">
        <div>
          <p>Recently Added Products</p>
        </div>
        <div className="w15 text-end">
          <button>View All Products</button>
        </div>
      </div>
      <div className="flex-box-row sp-between align-center">
        <div className="card w32">
          <img
            src="./assets/product-photo.png"
            alt="Product Image"
            className="prod-img"
          />
          <div className="w95 mauto mt20 mb20">
            <p className="pricing-text">40$</p>
            <button>View Details</button>
          </div>
        </div>
        <div className="card w32">
          <img
            src="./assets/product-photo.png"
            alt="Product Image"
            className="prod-img"
          />
          <div className="w95 mauto mt20 mb20">
            <p className="pricing-text">40$</p>
            <button>View Details</button>
          </div>
        </div>
        <div className="card w32">
          <img
            src="./assets/product-photo.png"
            alt="Product Image"
            className="prod-img"
          />
          <div className="w95 mauto mt20 mb20">
            <p className="pricing-text">40$</p>
            <button>View Details</button>
          </div>
        </div>
      </div>
    </>
  );
}
