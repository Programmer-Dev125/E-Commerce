import About from "./about/about";
import Testimonial from "./testimonial/testimonial";

export default function AboutReview() {
  return (
    <div className="w90 mauto flex-box-row sp-between align-start about-section">
      <About />
      <Testimonial />
    </div>
  );
}
