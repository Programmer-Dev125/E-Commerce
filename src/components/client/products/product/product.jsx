import { cartIcon, starIcons } from "../../svg/paths";
import { data } from "../../data/data";
export default function Product({ onBuy }) {
  return (
    <div className="get-product">
      {data.map((product) => (
        <div key={product.id} className="flex-box-col w100 mb60">
          <div className="relative card-img">
            <img src={product.img} alt="Product image" />
            <div className="cart-icon">{cartIcon}</div>
          </div>
          <div className="flex-box-col g15 mt20">
            <div>{starIcons}</div>
            <div className="flex-box-row sp-between align-center">
              <p className="mt0 mb0 client-title">{product.name}</p>
              <p className="mt0 mb0 client-price-text">{product.price}</p>
            </div>
            <div className="w40 btn-is">
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
