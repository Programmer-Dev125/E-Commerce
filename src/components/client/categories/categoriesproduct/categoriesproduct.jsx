import { useRef, useEffect, useState } from "react";
import { cartIcon, starIcons } from "../../svg/paths";
import { handleCart } from "../../header/cart/post/handleCart";

export default function CategoriesProduct({ data, update }) {
  const [response, setResponse] = useState({
    danger: false,
    message: "",
  });
  const [received, setReceived] = useState(false);
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
      <div className="get-categories" ref={isRef}>
        {data.length === 0 ? (
          <div
            className="spinner-parent"
            style={{ width: "100%", height: "100%" }}
          >
            <div
              className="spinner"
              style={{ borderTop: "5px solid #000000" }}
            ></div>
          </div>
        ) : (
          data.map((cart) => (
            <div key={cart.id} className="flex-box-col w100 mb60">
              <div className="relative cart-box">
                <img src={cart.img} alt="img" className="cart-img" />
                <div
                  className="cart-tag pointer"
                  onClick={() =>
                    handleCart(cart.id, setReceived, setResponse, update)
                  }
                >
                  {cartIcon}
                </div>
              </div>
              <div className="mt20">
                <div className="flex-box-row align-center sp-between">
                  <p className="client-title mt0 mb5">{cart.name}</p>
                  <p className="client-price-text mt0 mb0">{cart.price}</p>
                </div>
                {starIcons}
              </div>
            </div>
          ))
        )}
      </div>
      {received && (
        <div className={`cart-message ${response.danger ? "danger" : ""}`}>
          <h2 className="client-white-title mt0 mb0">{response.message}</h2>
        </div>
      )}
    </>
  );
}
