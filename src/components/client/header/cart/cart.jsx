import { useEffect } from "react";
import { cartData } from "../../data/data";
import { delIcon, buyIcon } from "../../svg/paths";

export default function Cart({ onCartModal, onBuyModal }) {
  useEffect(() => {
    const text = document.querySelectorAll(".cart-modal .truncate");
    text.forEach((text) => {
      if (text.innerText.length >= 15) {
        text.innerText = text.textContent.slice(0, 15) + "...";
      }
    });
  }, []);

  function handleClose(e) {
    e.stopPropagation();
    if (e.target.classList.contains("cart-modal")) {
      onCartModal(false);
      document.body.classList.remove("no-scroll");
    }
  }
  return (
    <div className="cart-modal" onClick={handleClose}>
      <div className="cart-modal-content flex-box-col g20">
        {cartData.map((cart) => (
          <div key={cart.id} className="bottom pb20">
            <div className="w95 mauto flex-box-row sp-between align-center bottom pb20">
              <div className="flex-box-row align-center w80">
                <img src={cart.img} alt="cart image" className="isImg mr15" />
                <div>
                  <p
                    title={cart.title}
                    className="mt0 mb0 client-text truncate"
                  >
                    {cart.title}
                  </p>
                  <p className="mt5 mb0 client-price-text">{cart.price}</p>
                </div>
              </div>
              <div className="w15 flex-box-row sp-between align-center">
                <div className="w45">{delIcon}</div>
                <div
                  className="w45 pointer"
                  onClick={() => onBuyModal(true, cart.title, cart.price)}
                >
                  {buyIcon}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
