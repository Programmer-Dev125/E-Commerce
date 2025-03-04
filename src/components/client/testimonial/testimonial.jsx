import TestimonialContent from "./testimonialContent/testimonialContent";
import { useState } from "react";

export default function Testimonial() {
  function handleFieldSet(e) {
    e.stopPropagation();
    if (!e.target.classList.contains("circle")) return;

    const isId = e.target.dataset.id;
    const isActive = document
      .querySelector("fieldset")
      .querySelector(".fieldset-tab.active");
    const box = document.querySelector(".circle-box").querySelector(".active");
    if (isActive || box) {
      isActive.classList.remove("active");
      box.classList.remove("active");
    }
    const isTab = document.querySelectorAll(".fieldset-tab");
    isTab.forEach((elem) => {
      if (elem.dataset.id === isId) {
        e.target.classList.add("active");
        elem.classList.add("active");
      }
    });
  }

  return (
    <>
      <p className="section-title">Testimonials</p>
      <fieldset>
        <div data-id="1" className="fieldset-tab active">
          <legend>
            <img src="./assets/user-img.png" alt="User-img" />
            <p className="client-text-16 no-margin">
              Emily R., Writer and Journalist
            </p>
          </legend>
          <p className="client-text ln2 w95 mauto mt0 mb0">
            I've been a fan of fountain pens for years, but the Eternal Ink pen
            has taken my writing experience to a whole new level. The warm, rich
            brown color is stunning, and the deep blue accent adds a touch of
            sophistication. But what really sets this pen apart is the 14K gold
            nib - it glides across the paper with ease, producing some of the
            most expressive and consistent lines I've ever seen. I've written
            countless letters, journal entries, and stories with this pen, and
            it never fails to inspire me
          </p>
        </div>
        <div data-id="2" className="fieldset-tab">
          <legend>
            <img src="./assets/user-img.png" alt="User-img" />
            <p className="client-text-16 no-margin">
              James R., Business Consultant
            </p>
          </legend>
          <p className="client-text ln2 w95 mauto mt0 mb0">
            I’ve been searching for the perfect pen for years, and the Eternal
            Ink Pen is truly unmatched. The smooth ink flow and comfortable grip
            make writing effortless. Whether I’m journaling or signing
            documents, this pen never skips a beat. Highly recommended for
            anyone who appreciates quality craftsmanship!
          </p>
        </div>
        <div data-id="3" className="fieldset-tab">
          <legend>
            <img src="./assets/user-img.png" alt="User-img" />
            <p className="client-text-16 no-margin">
              Emily T., Calligraphy Artist
            </p>
          </legend>
          <p className="client-text ln2 w95 mauto mt0 mb0">
            I was tired of constantly replacing pens, so I decided to try the
            Eternal Ink Pen. Best decision ever! The ink lasts unbelievably
            long, and the build quality is top-notch. It feels premium in my
            hand and writes like a dream. I’ve already bought two more for my
            office!.
          </p>
        </div>
        <div
          className="flex-box-row mt40 mb20 sp-between w10 mauto circle-box"
          onClick={handleFieldSet}
        >
          <div data-id="1" className="circle active"></div>
          <div data-id="2" className="circle"></div>
          <div data-id="3" className="circle"></div>
        </div>
      </fieldset>
    </>
  );
}
