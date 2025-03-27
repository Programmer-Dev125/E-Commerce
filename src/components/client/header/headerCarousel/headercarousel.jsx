import { useState, useMemo } from "react";

export default function HeaderCarousel({ onBuy, data }) {
  const [carouselId, setCarouselId] = useState(1);
  const isData = useMemo(() => {
    return data.filter((data) => data.id <= 3);
  }, [data]);

  function handleCarousel(e) {
    if (!e.target.classList.contains("header-carousel-circle")) return;
    const isId = parseInt(e.target.dataset.id);
    setCarouselId((prev) => (prev = isId));
  }
  return (
    <div className="w35 header-carousel-div">
      {isData.length === 0 ? (
        <div className="spinner-parent">
          <div className="spinner"></div> :
        </div>
      ) : (
        isData.map((data) => {
          return (
            carouselId === data.id && (
              <div key={data.id} className="flex-box-col g20 carousel-data">
                <img src={data.img} alt="Image text" />
                <div className="mb10">
                  <p className="mt0 mb0 client-white-title">{data.name}</p>
                  <p className="mt10 mb0 client-price-text">{data.price}</p>
                </div>
                <div className="w50">
                  <button
                    className="header-buy-btn"
                    onClick={() => onBuy(true, data.name, data.price, data.img)}
                  >
                    Buy
                  </button>
                </div>
              </div>
            )
          );
        })
      )}
      <div
        className="flex-box-row sp-between w20 mt50"
        onClick={handleCarousel}
      >
        <div
          data-id="1"
          className={`header-carousel-circle ${
            carouselId === 1 ? "active" : ""
          }`}
        ></div>
        <div
          data-id="2"
          className={`header-carousel-circle ${
            carouselId === 2 ? "active" : ""
          }`}
        ></div>
        <div
          data-id="3"
          className={`header-carousel-circle ${
            carouselId === 3 ? "active" : ""
          }`}
        ></div>
      </div>
    </div>
  );
}
