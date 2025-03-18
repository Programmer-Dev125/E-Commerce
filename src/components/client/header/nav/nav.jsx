import { useState } from "react";
import { menuIcon } from "../../svg/paths";

export default function Nav({ isCurr, handleRoute, handleSection }) {
  const [menuMob, setMenuMob] = useState(false);

  function handleMenu(e) {
    e.stopPropagation();
    if (e.target.tagName === "svg" || e.target.tagName === "path") {
      setMenuMob(!menuMob);
    }
  }

  return (
    <div className="w95 mauto flex-box-row sp-between align-center menu-main">
      <div className="flex-box-row sp-between align-center menu-mob">
        <p onClick={handleRoute} className="logo-block pointer">
          E.
        </p>
        <div className="wfit" onClick={handleMenu}>
          <svg
            width="25"
            height="25"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuIcon}
          </svg>
        </div>
      </div>
      <div
        className={`w60 flex-box-row sp-between align-center header-links ${
          menuMob ? "mob" : ""
        }`}
      >
        <div className="w100 flex-box-row sp-between header-link">
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
      </div>
    </div>
  );
}
