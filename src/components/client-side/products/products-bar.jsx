import { useEffect, useRef, useState } from "react";

export default function ProductsBar() {
  const pRef = useRef(null);
  const [tab, setTab] = useState({
    text: "All",
    left: "",
    width: "",
  });
  useEffect(() => {
    const active = pRef.current.querySelector(".active");
    if (active) {
      setTab({
        text: "All",
        left: `${active.offsetLeft}px`,
        width: `${active.offsetWidth}px`,
      });
    }
  }, []);

  function handleTab(e) {
    if (e.target.tagName === "P") {
      const item = e.target;
      setTab({
        text: item.textContent,
        left: `${item.offsetLeft}px`,
        width: `${item.offsetWidth}px`,
      });
    }
  }

  return (
    <section className="row sp-b al-c mob-col-768" ref={pRef}>
      <div>
        <h2>Products</h2>
      </div>
      <div className="row sp-b al-c w40 rel bo-b tab-bar" onClick={handleTab}>
        <p
          className={`tex-sec mt0 mb0 pl15 mp pr15 pb15 ${
            tab.text === "All" ? "active" : ""
          }`}
        >
          All
        </p>
        <p
          className={`tex-sec mt0 mb0 pl15 mp pr15 pb15 ${
            tab.text === "Most Selling" ? "active" : ""
          }`}
        >
          Most Selling
        </p>
        <p
          className={`tex-sec mt0 mb0 pl15 mp pr15 pb15 ${
            tab.text === "Highest Rated" ? "active" : ""
          }`}
        >
          Highest Rated
        </p>
        <div style={{ left: tab.left, width: tab.width }} className="und"></div>
      </div>
    </section>
  );
}
