import { useEffect, useRef, useState } from "react";
import { searchIcon } from "./svg/path";
import SearchCard from "./search/searchcard";
import HeaderCarousel from "./headerCarousel/headercarousel";
import HeaderAbout from "./headerAbout/headerabout";
import { handleScroll } from "./scroll/scroll";

export default function Header({ isCurr, onRoute }) {
  const [toSearch, setToSearch] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search.length === 0) {
      setToSearch(false);
      document.body.classList.remove("no-scroll");
    }
  }, [search]);

  function handleChange(e) {
    setSearch((prev) => (prev = e.target.value));
    setToSearch(true);
    document.body.classList.add("no-scroll");
  }

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
    switch (e.target.textContent) {
      case "Home":
        {
          onRoute("/");
          window.history.pushState({}, "", "/");
        }
        break;
      case "Products":
        {
          onRoute("/products");
          window.history.pushState({}, "", "/products");
        }
        break;
      case "E.":
        {
          onRoute("/");
          window.history.pushState({}, "", "/");
        }
        break;
      default:
        break;
    }
  }

  return (
    <header className="flex-box-col g60">
      <nav className="w80 mauto mt30 mb30 pt10 pb10">
        <div className="w95 mauto flex-box-row sp-between align-center">
          <p onClick={handleRoute} className="logo-block pointer">
            E.
          </p>
          <div className="w70 flex-box-row sp-between align-center">
            <div className="w40 flex-box-row sp-between">
              <p
                onClick={handleRoute}
                className={`link-text mt0 mb0 wfit ${
                  isCurr === "/" ? "active" : ""
                }`}
              >
                Home
              </p>
              <p onClick={handleSection} className="link-text mt0 mb0 wfit">
                Contact
              </p>
              <p onClick={handleSection} className="link-text mt0 mb0 wfit">
                About
              </p>
              <p
                onClick={handleRoute}
                className={`link-text mt0 mb0 wfit ${
                  isCurr === "/products" ? "active" : ""
                }`}
              >
                Products
              </p>
            </div>
            <div className="w40 relative">
              <div className="w100 flex-box-row sp-between align-center bottom">
                <input
                  type="text"
                  value={search}
                  onChange={handleChange}
                  className="search-input"
                  placeholder="Search"
                />
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
              {toSearch && <SearchCard />}
            </div>
          </div>
        </div>
      </nav>
      {isCurr === "/" && (
        <section className="w80 flex-box-row sp-between align-center mauto mb50">
          <HeaderCarousel />
          <HeaderAbout />
        </section>
      )}
    </header>
  );
}
