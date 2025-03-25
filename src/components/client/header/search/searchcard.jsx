import { useState } from "react";
import { starIcons, cartBlackIcon } from "../../svg/paths";
import { handleCart } from "../cart/post/handleCart";

export default function SearchCard({ onClose, data }) {
  const [text, setText] = useState("");
  const [received, setReceived] = useState(false);
  const [response, setResponse] = useState({
    danger: false,
    message: "",
  });
  const isData = data.filter((item) =>
    text === "" ? true : item.name.toLowerCase().includes(text.toLowerCase())
  );

  function handleModalClose(e) {
    e.stopPropagation();
    if (e.target.classList.contains("search-modal")) {
      onClose(false);
      document.body.classList.remove("no-scroll");
    }
  }

  return (
    <>
      <div className="search-modal" onClick={handleModalClose}>
        <div className="search-modal-content flex-box-col g20">
          <input
            type="text"
            placeholder="Enter Product Name"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          {isData.map((search) => (
            <div
              key={search.id}
              className="flex-box-row sp-between align-center pr10 pl10 bottom pb10"
            >
              <div className="flex-box-row align-center">
                <div>
                  <img
                    src={`http://localhost:3000${search.img}`}
                    alt="Search Image"
                    className="sq-img mr20"
                  />
                </div>
                <div>
                  <p className="mt0 mb0 client-title">{search.name}</p>
                  <p className="mt5 mb0 client-price-text">{search.price}</p>
                  <div className="mt5">{starIcons}</div>
                </div>
              </div>
              <div
                className="pointer icon-cart"
                onClick={() => handleCart(search.id, setReceived, setResponse)}
              >
                {cartBlackIcon}
              </div>
            </div>
          ))}
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
