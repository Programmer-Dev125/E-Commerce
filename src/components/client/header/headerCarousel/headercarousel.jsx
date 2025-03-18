import { useState } from "react";
import { headerCarousel } from "../../data/data";

export default function HeaderCarousel({ onBuy }) {
  const [carouselId, setCarouselId] = useState(1);

  function handleCarousel(e) {
    if (!e.target.classList.contains("header-carousel-circle")) return;
    const isId = parseInt(e.target.dataset.id);
    setCarouselId((prev) => (prev = isId));
  }
  return (
    <div className="w35 header-carousel-div">
      {headerCarousel.map(
        (carousel) =>
          carouselId === carousel.id && (
            <div key={carousel.id} className="flex-box-col g20 carousel-data">
              <img src={carousel.img} alt="Image text" />
              <div className="mb10">
                <p className="mt0 mb0 client-white-title">{carousel.name}</p>
                <p className="mt10 mb0 client-price-text">{carousel.price}</p>
              </div>
              <div className="w50">
                <button
                  className="header-buy-btn"
                  onClick={() => onBuy(true, carousel.name, carousel.price)}
                >
                  Buy
                </button>
              </div>
            </div>
          )
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
