import { cartIcon, data, starIcons } from "./data";

export default function Product({ onBuy }) {
  return (
    <div className="flex-box-row wrap g45">
      {data.map((product) => (
        <div key={product.id} className="w23 flex-box-col g20">
          <div className="relative card-img">
            <img src={product.img} alt="Product image" />
            <div className="cart-icon">{cartIcon}</div>
          </div>
          <div className="flex-box-col g15">
            <div>{starIcons}</div>
            <div className="flex-box-row sp-between align-center">
              <p className="mt0 mb0 client-title">{product.name}</p>
              <p className="mt0 mb0 client-price-text">{product.price}</p>
            </div>
            <div className="w40">
              <button onClick={() => onBuy(true, product.name, product.price)}>
                Buy
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
