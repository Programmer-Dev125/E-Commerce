import { useEffect, useState } from "react";
import { delIcon, buyIcon } from "../../svg/paths";
import { handleDelete } from "./delete/handleDelete.jsx";
import { handleGet } from "./get/handleGet.jsx";

export default function Cart({ onCartModal, onBuyModal }) {
  const [carts, setCarts] = useState([]);
  const [received, setReceived] = useState(false);
  const [response, setResponse] = useState({
    danger: false,
    message: "",
  });

  useEffect(() => {
    const db = indexedDB.open("client-db");
    db.addEventListener("success", (e) => {
      const database = e.target.result;
      const isGet = database
        .transaction("client-user")
        .objectStore("client-user")
        .get(1);
      isGet.addEventListener("success", async (ev) => {
        const user = ev.target.result;
        await handleGet(setCarts, user);
      });
    });
  }, []);

  useEffect(() => {
    const text = document.querySelectorAll(".cart-modal .truncate");
    text.forEach((text) => {
      if (text.innerText.length >= 15) {
        text.innerText = text.textContent.slice(0, 15) + "...";
      }
    });
  }, [carts]);

  function handleClose(e) {
    e.stopPropagation();
    if (e.target.classList.contains("cart-modal")) {
      onCartModal(false);
      document.body.classList.remove("no-scroll");
    }
  }
  return (
    <>
      <div className="cart-modal" onClick={handleClose}>
        <div className="cart-modal-content flex-box-col g20">
          {carts.length === 0 ? (
            <h2 className="mt0 mb0 page-title wfit w50 mauto">Cart is empty</h2>
          ) : (
            carts.map((cart) => (
              <div key={cart.id} className="bottom pb20">
                <div className="w95 mauto flex-box-row sp-between align-center bottom pb20">
                  <div className="flex-box-row align-center w80">
                    <img
                      src={`https://e-commerce-gamma-one-65.vercel.app/api/app${cart.img}`}
                      alt="cart image"
                      className="isImg mr15"
                    />
                    <div>
                      <p
                        title={cart.name}
                        className="mt0 mb0 client-text truncate"
                      >
                        {cart.name}
                      </p>
                      <p className="mt5 mb0 client-price-text">{cart.price}</p>
                    </div>
                  </div>
                  <div className="w15 flex-box-row sp-between align-center">
                    <div
                      className="w45 pointer"
                      onClick={() => {
                        handleDelete(
                          cart.name,
                          setCarts,
                          carts,
                          setReceived,
                          setResponse
                        );
                      }}
                    >
                      {delIcon}
                    </div>
                    <div
                      className="w45 pointer"
                      onClick={() =>
                        onBuyModal(true, cart.name, cart.price, cart.img)
                      }
                    >
                      {buyIcon}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      {received && (
        <div className={`cart-message ${response.danger ? "danger" : ""}`}>
          <h2 className="client-white-title mt0 mb0">{response.message}</h2>
        </div>
      )}
    </>
  );
}
