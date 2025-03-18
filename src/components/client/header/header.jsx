import HeaderCarousel from "./headerCarousel/headercarousel";
import HeaderAbout from "./headerAbout/headerabout";
import { handleScroll, Route } from "./scroll";
import Nav from "./nav/nav";
import { cartWhiteIcon, userIcon, searchIcon } from "../svg/paths";

export default function Header({
  isCurr,
  onRoute,
  onUserModal,
  onCartModal,
  onSearchModal,
  onBuy,
}) {
  function handleSection(e) {
    e.stopPropagation();
    if (window.location.pathname === "/") {
      handleScroll(e);
    } else if (window.location.pathname === "/products") {
      onRoute("/");
      window.history.pushState({}, "", "/");
      setTimeout(() => handleScroll(e), 200);
    }
  }

  function handleRoute(e) {
    e.stopPropagation();
    Route(e, onRoute);
  }

  return (
    <header className="flex-box-col relative">
      <div className="w80 mauto z2 mt15 mb15">
        <div className="w12 flex-box-row align-center sp-between">
          <div
            className="header-circle pointer"
            onClick={() => {
              onUserModal(true);
              document.body.classList.add("no-scroll");
            }}
          >
            {userIcon}
          </div>
          <div
            className="header-circle pointer"
            onClick={() => {
              onCartModal(true);
              document.body.classList.add("no-scroll");
            }}
          >
            {cartWhiteIcon}
          </div>
          <div
            className="header-circle pointer search-box"
            onClick={() => {
              onSearchModal(true);
              document.body.classList.add("no-scroll");
            }}
          >
            <svg
              width="23"
              height="22"
              viewBox="0 0 23 22"
              fill="none"
              className="pointer"
              xmlns="http://www.w3.org/2000/svg"
            >
              {searchIcon}
            </svg>
          </div>
        </div>
      </div>
      <nav className="w80 mauto mb30 pt10 pb10">
        <Nav
          isCurr={isCurr}
          handleRoute={handleRoute}
          handleSection={handleSection}
        />
      </nav>
      {isCurr === "/" && (
        <section
          className="w80 flex-box-row sp-between align-center mauto mt50 mb50 header-content"
          style={{ zIndex: "2" }}
        >
          <HeaderCarousel
            onBuy={(val, name, price) => onBuy(val, name, price)}
          />
          <HeaderAbout />
        </section>
      )}
      <img
        src="/assets/client-images/header-image.png"
        className="header-image"
        alt="Header Image"
      />
    </header>
  );
}
