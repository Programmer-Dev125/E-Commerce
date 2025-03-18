import { useState } from "react";
import { cartBtnIcon } from "../../svg/paths";
import { data } from "../../data/data";

export default function BestProducts({ onBuy }) {
  const [product, setProduct] = useState(500);
  return (
    <div className="product-section-row">
      {data.map((product) => (
        <div key={product.id} className="mr5 ml10">
          <img src={product.img} alt="product image" />
          <div className="flex-box-row sp-between mt20">
            <p className="client-title">{product.name}</p>
            <p className="client-price-text">{product.price}</p>
          </div>
          <div className="w50 mt5">
            <div
              className="product-section-btn"
              onClick={() => onBuy(true, product.name, product.price)}
            >
              <p className="client-text mt0 mb0">Buy</p>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {cartBtnIcon}
              </svg>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
