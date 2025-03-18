import { useEffect, useState } from "react";
export default function CategoryTitleBar({ onTab }) {
  const [active, setActive] = useState({
    text: "Most Selling",
    left: "0px",
    width: "0px",
  });

  useEffect(() => {
    const tab = document.querySelector(".tab-text.active");
    if (!tab) return;
    setActive({
      text: tab.textContent,
      left: "${tab.offsetLeft}px",
      width: `${tab.offsetWidth}px`,
    });
    onTab("Most Selling");
  }, []);

  function handleTab(e) {
    e.stopPropagation();
    if (e.target.tagName !== "P") return;
    setActive({
      text: e.target.textContent,
      left: `${e.target.offsetLeft}px`,
      width: `${e.target.offsetWidth}px`,
    });
    onTab(e.target.textContent);
  }

  return (
    <div className="flex-box-row sp-between align-center category-title-bar">
      <h2 className="page-title">Categories</h2>
      <div
        onClick={handleTab}
        className="w35 flex-box-row sp-between align-center relative bottom"
      >
        <p
          className={`tab-text ${
            active.text === "Most Selling" ? "active" : ""
          } mt0 mb0 pb20 pr5 pl5`}
        >
          Most Selling
        </p>
        <p
          className={`tab-text ${
            active.text === "Premium" ? "active" : ""
          } mt0 mb0 pb20 pr5 pl5`}
        >
          Premium
        </p>
        <p
          className={`tab-text ${
            active.text === "Highest Rated" ? "active" : ""
          } mt0 mb0 pb20 pr5 pl5`}
        >
          Highest Rated
        </p>
        <div
          style={{ left: active.left, width: active.width }}
          className="underline"
        ></div>
      </div>
    </div>
  );
}
