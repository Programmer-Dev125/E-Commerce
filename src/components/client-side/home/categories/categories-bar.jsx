import { useEffect, useRef, useState } from "react";

export default function CategoriesBar() {
  const tabRef = useRef(null);
  const [tab, setTab] = useState({
    text: "Most Selling",
    left: "",
    width: "",
  });

  useEffect(() => {
    const active = tabRef.current?.querySelector(".active");
    if (active) {
      setTab({
        text: "Most Selling",
        left: `${active.offsetLeft}px`,
        width: `${active.offsetWidth}px`,
      });
    }
  }, []);

  function handleTab(e) {
    if (e.target.tagName === "P") {
      setTab({
        text: e.target.textContent,
        left: `${e.target.offsetLeft}px`,
        width: `${e.target.offsetWidth}px`,
      });
    }
  }

  return (
    <section className="row sp-b al-c mob-col-768">
      <h2>Categories</h2>
      <div
        className="row sp-b al-c w40 bo-b rel tab-bar"
        ref={tabRef}
        onClick={handleTab}
      >
        <p
          className={`tex-sec mt0 mb0 mp pb20 pr15 pl15 ${
            tab.text === "Most Selling" ? "active" : ""
          }`}
        >
          Most Selling
        </p>
        <p
          className={`tex-sec mt0 mb0 mp pb20 pr15 pl15 ${
            tab.text === "Premium" ? "active" : ""
          }`}
        >
          Premium
        </p>
        <p
          className={`tex-sec mt0 mb0 mp pb20 pr15 pl15 ${
            tab.text === "Highest Rated" ? "active" : ""
          }`}
        >
          Highest Rated
        </p>
        <div
          style={{
            left: tab.left,
            width: tab.width,
          }}
          className="und"
        ></div>
      </div>
    </section>
  );
}
