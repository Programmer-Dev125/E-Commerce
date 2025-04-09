import AboutReview from "./about-review/about-review";
import BestSeller from "./best-seller/best-seller";
import Categories from "./categories/categories";
import Contact from "./contact/contact";

export default function Home() {
  return (
    <section className="col gp-130">
      <BestSeller />
      <Categories />
      <AboutReview />
      <Contact />
    </section>
  );
}
