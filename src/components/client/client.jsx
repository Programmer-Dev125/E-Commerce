import { useEffect } from "react";
import About from "./about/about";
import Contact from "./contact/contact";
import Content from "./content/content";
import NavBarClient from "./navbar/navbar";
import Product from "./product/product";
import Testimonial from "./testimonial/testimonial";
import { handleObserver } from "./animations/observer";
import Footer from "./footer/footer";

export default function ClientPage() {
  useEffect(() => {
    handleObserver();
  });
  return (
    <>
      <section>
        <nav className="client-navbar">
          <NavBarClient />
        </nav>
      </section>
      <section className="client-content-section flex-box-row sp-between align-center w95 mauto">
        <Content />
      </section>
      <section className="product-section w95 mauto">
        <Product />
      </section>
      <section className="testimonial-section w95 mauto">
        <Testimonial />
      </section>
      <section className="about-section">
        <div className="about-text-content w95 mauto">
          <About />
        </div>
      </section>
      <section className="contact-section">
        <div className="flex-box-row contact-mob-row sp-between align-center">
          <Contact />
        </div>
      </section>
      <section className="footer-section">
        <Footer />
      </section>
    </>
  );
}
