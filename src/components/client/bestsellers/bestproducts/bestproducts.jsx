import { useEffect, useRef } from "react";
import { cartBtnIcon } from "../../svg/paths";

export default function BestProducts({ onBuy, data }) {
  const isRef = useRef(null);
  useEffect(() => {
    if (!isRef.current) return;
    const text = isRef.current.querySelectorAll(".client-title");
    text.forEach((text) => {
      if (text.innerText.length >= 17) {
        text.textContent = text.textContent.slice(0, 17) + "...";
      }
    });
  }, [data]);
  return (
    <div className="product-section-row" ref={isRef}>
      {data.map((product) => (
        <div key={product.id} className="mr5 ml10">
          <img
            src={`http://localhost:3000${product.img}`}
            alt="product image"
          />
          <div className="flex-box-row sp-between mt20">
            <p className="client-title" title={product.name}>
              {product.name}
            </p>
            <p className="client-price-text">{product.price}</p>
          </div>
          <div className="w50 mt5">
            <div
              className="product-section-btn"
              onClick={() =>
                onBuy(true, product.name, product.price, product.img)
              }
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
