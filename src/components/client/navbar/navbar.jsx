import { useState } from "react";
import SearchBox from "./search/searchbox";
import CartBox from "./cart/cartbox";
import { cartPath, searchPath } from "./svg/paths";
import AccountModal from "./account/account";
import {
  handleCartBox,
  handleSearchBox,
  handleDiv,
  handleModal,
  handleMobileMenu,
} from "./fn/navbarfn";

export default function NavBarClient() {
  const [showSearch, setShowSearch] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [accountModal, setAccountModal] = useState(false);

  return (
    <div className="w95 flex-box-row mauto sp-between align-center pt10 pb10">
      <div>
        <p className="logo-icon">Eternal Ink</p>
      </div>
      <div
        className="flex-box-row w65 right-row-in sp-between"
        onClick={handleMobileMenu}
      >
        <div className="flex-box-row w100 sp-between toAbsolute-mob">
          <div
            className="middle-menu-row w35 flex-box-row sp-between align-center"
            onClick={handleDiv}
          >
            <p className="link-text">About</p>
            <p className="link-text">Contact</p>
            <p className="link-text">Products</p>
          </div>
          <div className="w25 right-menu-row flex-box-row sp-between align-center">
            <div
              className="relative"
              onClick={(e) => handleSearchBox(e, showSearch, setShowSearch)}
            >
              <svg
                width="20"
                className={`search-icon ${showSearch ? "active" : ""}`}
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d={searchPath} fill="#ffffff" />
              </svg>
              {showSearch && (
                <div className="full-search-width">
                  <SearchBox />
                </div>
              )}
              <svg
                width="20"
                className="below-search-icon"
                height="20"
                viewBox="0 0 34 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17 0L33.4545 48.75H0.545517L17 0Z" fill="white" />
              </svg>
            </div>
            <div
              className="relative"
              onClick={(e) => handleCartBox(e, showCart, setShowCart)}
            >
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                className={`cart-icon ${showCart ? "active" : ""}`}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d={cartPath} fill="#ffffff" />
              </svg>
              {showCart && (
                <div className="full-cart-width">
                  <CartBox />
                </div>
              )}
              <svg
                width="20"
                className="below-cart-icon"
                height="20"
                viewBox="0 0 34 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17 0L33.4545 48.75H0.545517L17 0Z" fill="white" />
              </svg>
            </div>
            <div
              className="w60"
              onClick={(e) => handleModal(e, accountModal, setAccountModal)}
            >
              <button className={`sign-btn ${accountModal ? "active" : ""}`}>
                Signup/Login
              </button>
              <svg
                width="20"
                height="20"
                className={`contact-icon ${accountModal ? "active" : ""}`}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 4.44444L7.6 6L10.2 8.88889H0V11.1111H10.2L7.6 14L9 15.5556L14 10L9 4.44444ZM18 17.7778H10V20H18C19.1 20 20 19 20 17.7778V2.22222C20 1 19.1 0 18 0H10V2.22222H18V17.7778Z"
                  fill="white"
                />
              </svg>

              {accountModal && (
                <div className="account-modal">
                  <div className="account-modal-content">
                    <AccountModal />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <p className="menu-text-mobile" onClick={handleMobileMenu}>
        Menu
      </p>
    </div>
  );
}
