import { useEffect, useRef, useState } from "react";
export default function ProductBar() {
  const [isTab, setIsTab] = useState({
    text: "All",
    left: "0px",
    width: "0px",
  });
  const isRef = useRef(null);

  useEffect(() => {
    const active = isRef.current.querySelector(".client-title-sec.active");
    if (active) {
      setIsTab({
        text: active.textContent,
        left: `${active.offsetLeft}px`,
        width: `${active.offsetWidth}px`,
      });
    }
  }, []);

  function handleProductTab(e) {
    e.stopPropagation();
    if (e.target.tagName !== "P") return;
    setIsTab({
      text: e.target.textContent,
      left: `${e.target.offsetLeft}px`,
      width: `${e.target.offsetWidth}px`,
    });
  }

  return (
    <div className="product-bar flex-box-row sp-between align-center">
      <h2 className="page-title wfit mt0 mb0">Products</h2>
      <div
        ref={isRef}
        onClick={handleProductTab}
        className="bottom relative flex-box-row sp-between align-center w30"
      >
        <p
          className={`client-title-sec pointer mt0 mb0 pb20 pr10 pl10 ${
            isTab.text === "All" ? "active" : ""
          }`}
        >
          All
        </p>
        <p
          className={`client-title-sec pointer mt0 mb0 pb20 pr10 pl10 ${
            isTab.text === "Most Reviews" ? "active" : ""
          }`}
        >
          Most Reviews
        </p>
        <p
          className={`client-title-sec pointer mt0 mb0 pb20 pr10 pl10 ${
            isTab.text === "Most Selling" ? "active" : ""
          }`}
        >
          Most Selling
        </p>
        <div
          style={{ left: isTab.left, width: isTab.width }}
          className="underline"
        ></div>
      </div>
    </div>
  );
}
