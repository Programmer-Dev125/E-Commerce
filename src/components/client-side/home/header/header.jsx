import { Link, useLocation, useNavigate } from "react-router";
import HeaderCarousel from "./header-content/headerCarousel";
import HeaderText from "./header-content/headerText";
import { cartIcon, crossIcon, searchIcon, userIcon } from "../../svg/paths";
import { useDispatch, useSelector } from "react-redux";
import { onOpen, onClose } from "../../global-state/searchModel";
import SearchModelContent from "./search-model/searchModelContent";
import { closeCart, openCart } from "../../global-state/cartModel";
import { menuOpen } from "../../global-state/menu-slice";
import CartModel from "./cart-model/cart-model";
import { handleScroll } from "../../handle-fn/handleScroll";

export default function Header() {
  const activeLink = useLocation();
  const navigate = useNavigate();
  const searchModel = useSelector((state) => state.searchModel.value);
  const cartModel = useSelector((state) => state.cartModel.value);
  const menu = useSelector((state) => state.menu.value);
  const dispatch = useDispatch();

  function handleClose(e) {
    if (e.target.tagName === "svg" || e.target.tagName === "path") {
      dispatch(onClose());
    }
  }

  function handleCartClose(e) {
    if (e.target.tagName === "svg" || e.target.tagName === "path") {
      dispatch(closeCart());
    }
  }

  function handleMenu(e) {
    if (e.target.tagName === "svg" || e.target.tagName === "path") {
      dispatch(menuOpen());
    }
  }

  return (
    <header className="rel col">
      <nav className="w85 ma mb40 mt40 al-c">
        <Link to="/">
          <p className="logo-block mt0 mb0">E.</p>
        </Link>
        <div className={`g2 al-c menu-grid ${menu ? "active" : ""}`}>
          <div className="row sp-b ln-row">
            <Link to="/">
              <span
                className={`tx-16 mp ln-tx ${
                  activeLink.pathname === "/" ? "active" : ""
                }`}
              >
                Home
              </span>
            </Link>
            <span
              className="tx-16 mp"
              onClick={(e) => {
                navigate("/");
                setTimeout(() => handleScroll(e), 100);
              }}
            >
              Contact
            </span>
            <span
              className="tx-16 mp"
              onClick={(e) => {
                navigate("/");
                setTimeout(() => handleScroll(e), 100);
              }}
            >
              About
            </span>
            <Link to="/products">
              <span
                className={`tx-16 mp ln-tx ${
                  activeLink.pathname === "/products" ? "active" : ""
                }`}
              >
                Products
              </span>
            </Link>
          </div>
          <div className="tx-e header-icons-row">
            <Link to="/signup">
              <span
                className={`mr40 mp h-icons ${
                  activeLink.pathname === "/signup" ||
                  activeLink.pathname === "/login"
                    ? "active"
                    : ""
                }`}
              >
                {userIcon}
              </span>
            </Link>
            <span
              className="mr40 mp h-icons"
              onClick={() => dispatch(onOpen())}
            >
              {searchIcon}
            </span>
            <span className="mp h-icons" onClick={() => dispatch(openCart())}>
              {cartIcon}
            </span>
          </div>
        </div>
        <div className="menu-bar tx-e" onClick={handleMenu}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0H30V3.75H0V0ZM10 13.125H30V16.875H10V13.125ZM0 26.25H30V30H0V26.25Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </nav>
      {activeLink.pathname === "/" && (
        <section className="row sp-b al-c w85 ma mob-content">
          <section className="w40">
            <HeaderCarousel />
          </section>
          <section className="w50">
            <HeaderText />
          </section>
        </section>
      )}
      <img src="/header-image.png" alt="header-image" className="h-img" />
      {searchModel && (
        <section className="modal">
          <section className="modal-content w30 mb-c p10">
            <div className="tx-e mb20" onClick={handleClose}>
              {crossIcon}
            </div>
            <SearchModelContent />
          </section>
        </section>
      )}
      {cartModel && (
        <section className="modal">
          <section className="modal-content w30 mb-c p10">
            <div className="tx-e mb20" onClick={handleCartClose}>
              {crossIcon}
            </div>
            <CartModel />
          </section>
        </section>
      )}
    </header>
  );
}
