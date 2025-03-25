import { useRef, useEffect, useState } from "react";
import { cartIcon, starIcons } from "../../svg/paths";
import { handleCart } from "../../header/cart/post/handleCart";

export default function Product({ onBuy, data }) {
  const [received, setReceived] = useState(false);
  const [response, setResponse] = useState({
    danger: false,
    message: "",
  });
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
    <>
      <div className="get-product" ref={isRef}>
        {data.map((product) => (
          <div key={product.id} className="flex-box-col w100 mb60">
            <div className="relative card-img">
              <img
                src={`http://localhost:3000${product.img}`}
                alt="Product image"
              />
              <div
                className="cart-icon"
                onClick={() => handleCart(product.id, setReceived, setResponse)}
              >
                {cartIcon}
              </div>
            </div>
            <div className="flex-box-col g15 mt20">
              <div>{starIcons}</div>
              <div className="flex-box-row sp-between align-center">
                <p className="mt0 mb0 client-title">{product.name}</p>
                <p className="mt0 mb0 client-price-text">{product.price}</p>
              </div>
              <div className="w40 btn-is">
                <button
                  onClick={() =>
                    onBuy(true, product.name, product.price, product.img)
                  }
                >
                  Buy
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {received && (
        <div className={`cart-message ${response.danger ? "danger" : ""}`}>
          <h2 className="client-white-title mt0 mb0">{response.message}</h2>
        </div>
      )}
    </>
  );
}
