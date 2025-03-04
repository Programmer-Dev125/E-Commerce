export default function Content() {
  return (
    <>
      <div className="w48">
        <svg
          width="462"
          height="315"
          viewBox="0 0 462 315"
          fill="none"
          className="content-svg"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 3C408.8 -21 476.333 175.333 459 276.5L0 314.5V3Z"
            fill="#BCCCBA"
            fillOpacity="0.6"
          />
        </svg>
        <p className="content-title">Satisfaction in writing</p>
        <p className="client-text ln2 mt20">
          At Eternal Ink, we understand the significance of a great pen. It's
          not just a tool, but an extension of one's personality, a reflection
          of taste, and a means to create lasting impressions. Our curated
          collection features an array of pens that cater to diverse
          preferences, from sleek and modern designs to classic and elegant
          pieces. Each pen is carefully selected for its exceptional
          performance, durability, and aesthetic appeal, ensuring that every
          stroke writes a story of its own.
        </p>
      </div>
      <div className="w50 text-end">
        <img
          src="./assets/content-img.png"
          alt="content-photo"
          className="content-photo"
        />
      </div>
    </>
  );
}
