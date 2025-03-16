import { useRef, useState } from "react";
import { data } from "./data";
import { cartIcon, delIcon, buyIcon } from "./paths";

export default function Cart() {
  const [cart, setCart] = useState(false);
  const isRef = useRef(null);

  function handleCart(e) {
    setCart(!cart);
    isRef.current.classList.toggle("active");
  }

  return (
    <div className="cart-fix">
      <div ref={isRef} className="cart-fix-content flex-box-col g10">
        {cart &&
          data.map((cart) => (
            <div
              key={cart.id}
              className="flex-box-row sp-between align-center bottom pb10"
            >
              <div className="flex-box-row align-center w80">
                <div className="mr20">
                  <img
                    src={cart.img}
                    alt="Carousel Image"
                    className="cart-product-img"
                  />
                </div>
                <div>
                  <p className="mt0 mb0 client-title">{cart.title}</p>
                  <p className="mt5 mb0 client-price-text">{cart.price}</p>
                </div>
              </div>
              <div className="flex-box-row w20 sp-between">
                <div className="w45">{delIcon}</div>
                <div className="w45">{buyIcon}</div>
              </div>
            </div>
          ))}
        <div onClick={handleCart} className="cart-fix-content-circle">
          {cartIcon}
        </div>
      </div>
    </div>
  );
}
