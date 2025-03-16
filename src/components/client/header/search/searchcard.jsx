import { cartIcon } from "../svg/path";
export default function SearchCard() {
  return (
    <div className="search-card flex-box-col g20">
      <div className="flex-box-row sp-between align-center divider pb10">
        <div className="w65 flex-box-row sp-between align-center">
          <div className="w30">
            <img
              src="/assets/client-images/user-img.png"
              alt="user"
              className="search-card-img"
            />
          </div>
          <div className="w70">
            <p className="mt0 mb0 client-title">Fountain Pen</p>
            <p className="mt5 mb0 client-price-text">445$</p>
          </div>
        </div>
        <div className="w30 text-end">
          <svg
            width="30"
            height="30"
            viewBox="0 0 31 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {cartIcon}
          </svg>
        </div>
      </div>
    </div>
  );
}
