import { useState } from "react";
import { data } from "./data";
import { reviewIcons } from "../../svg/paths";
export default function Review() {
  const [activeId, setActiveId] = useState(1);
  const activeReview = data.filter((item) => item.id === activeId);

  return (
    <section className="w40 w100-1280">
      <h2>Testimonials</h2>
      <div className="card col gp-30 p20">
        <div className="row sp-b al-c">
          <div>{reviewIcons}</div>
          <p className="tx-14 mt0 mb0 gre">August 30, 2025</p>
        </div>
        {activeReview.map((item) => {
          return (
            <div key={item.id} className="col gp-30">
              <p className="mt0 mb0 tx-16 lt-2">{item.desc}</p>
              <div className="row al-c">
                <div className="mr10">
                  <img src={item.img} alt="Image" className="img-c50" />
                </div>
                <div>
                  <p className="mt0 mb0 tx-16">{item.name}</p>
                  <p className="mt5 mb0 tx-14 gre">{item.title}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="row mt30">
        {data.map((item) => {
          return (
            <div
              className={`circle mr20 mp ${
                item.id === activeId ? "active" : ""
              }`}
              key={item.id}
              onClick={() => setActiveId(item.id)}
            ></div>
          );
        })}
      </div>
    </section>
  );
}
