import { useState } from "react";
import { starIcon, data } from "./data";

export default function Testimonial() {
  const [testimonialId, setTestimonialId] = useState(1);
  function handleTestimonial(e) {
    e.stopPropagation();
    if (!e.target.classList.contains("review-carousel-circle")) return;
    const isId = parseInt(e.target.dataset.review);
    setTestimonialId(isId);
  }

  return (
    <div className="w40">
      <h2 className="page-title wfit mt0 mb40">Testimonial</h2>
      {data.map(
        (review) =>
          testimonialId === review.id && (
            <div key={review.id} className="review-card flex-box-col g40 p20">
              <div className="flex-box-row align-center sp-between">
                <div>{starIcon}</div>
                <p className="mt0 mb0 client-text-sec">{review.time}</p>
              </div>
              <div>
                <p className="mt0 mb0 client-title ln2 review-text">
                  I've been a fan of fountain pens for years, but the Eternal
                  Ink pen has taken my writing experience to a whole new level.
                  The warm, rich brown color is stunning, and the deep blue
                  accent adds a touch of sophistication. But what really sets
                  this pen apart is the 14K gold nib - it glides across the
                  paper with ease, producing some of the most expressive and
                  consistent lines I've ever seen. I've written countless
                  letters, journal entries, and stories with this pen, and it
                  never fails to inspire me
                </p>
              </div>
              <div className="flex-box-row align-center">
                <div className="mr20">
                  <img src={review.img} alt="Review Image" />
                </div>
                <div>
                  <p className="mt0 mb0 client-title">{review.name}</p>
                  <p className="mt5 mb0 client-text-sec">{review.title}</p>
                </div>
              </div>
            </div>
          )
      )}
      <div
        onClick={handleTestimonial}
        className="review-carousel flex-box-row sp-between align-center w20 mt50"
      >
        <div
          data-review="1"
          className={`review-carousel-circle ${
            testimonialId === 1 ? "active" : ""
          }`}
        ></div>
        <div
          data-review="2"
          className={`review-carousel-circle ${
            testimonialId === 2 ? "active" : ""
          }`}
        ></div>
        <div
          data-review="3"
          className={`review-carousel-circle ${
            testimonialId === 3 ? "active" : ""
          }`}
        ></div>
      </div>
    </div>
  );
}
