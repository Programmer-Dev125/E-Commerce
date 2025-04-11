import { useState } from "react";
import { useSelector } from "react-redux";
import Spinner from "../../../spinner.jsx/spinner";

export default function HeaderCarousel() {
  const products = useSelector((state) => state.products.value);
  const data = products.filter((item) => item.id <= 3);
  const [activeId, setActiveId] = useState(1);

  const activeName = data.find((item) => item.id === activeId);

  return (
    <>
      <div className="col gp-10 rel">
        {activeName ? (
          <>
            <img
              src={activeName.img}
              alt="Active Carousel Image"
              className="h-carousel-image"
            />
            <div>
              <h2 className="tx-24 mt0 mb0 wh">{activeName.name}</h2>
              <p className="tx-16 mt5 mb0 re">{activeName.price}</p>
              <button className="mt30 mb20 h-btn">Buy</button>
            </div>
          </>
        ) : (
          <Spinner spin={true} />
        )}
      </div>
      <div className="g3 wf gp-30 mb30">
        {data.map((item) => (
          <div
            className={`circle mp ${item.id === activeId ? "active" : ""}`}
            key={item.id}
            onClick={() => setActiveId(item.id)}
          ></div>
        ))}
      </div>
    </>
  );
}
