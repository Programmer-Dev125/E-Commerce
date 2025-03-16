import { starIcons } from "../data.jsx";
export default function ProductBuy({ user, price, onClose }) {
  function handleClose(e) {
    e.stopPropagation();
    if (e.target.classList.contains("buy-product-fix")) {
      onClose(false);
    }
  }
  return (
    <div className="buy-product-fix" onClick={handleClose}>
      <div className="buy-product-fix-content flex-box-row sp-between align-center">
        <div className="img-box w40">
          <img src="/assets/client-images/header-carousel-2.png" alt="image" />
        </div>
        <div className="w55">
          <div className="flex-box-row sp-between align-center">
            <h2 className="page-title wfit mt0 mb0">{user}</h2>
            <p className="client-price-text mt0 mb0">{price}</p>
          </div>
          <div className="mt5">{starIcons}</div>
          <div className="mt50 mb30">
            <label htmlFor="quantity" className="client-text mb10">
              Quantity
            </label>
            <input type="number" id="quantity" />
          </div>
          <div className="w40">
            <button onClick={() => onClose(false)}>Bank Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
