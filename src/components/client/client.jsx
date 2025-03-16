import { useEffect, useState } from "react";
import AboutReview from "./aboutreview/aboutreview.jsx";
import BestSeller from "./bestsellers/bestseller.jsx";
import Categories from "./categories/categories.jsx";
import Contact from "./contact/contact.jsx";
import Footer from "./footer/footer.jsx";
import Header from "./header/header.jsx";
import Products from "./products/products.jsx";
import Cart from "./cart/cart.jsx";
import User from "./user/user.jsx";
import Register from "./register/register.jsx";
import ProductBuy from "./products/product/buy/productbuy.jsx";
export default function Client() {
  const [current, setCurrent] = useState(window.location.pathname);
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    function handleHistory() {
      setCurrent(window.location.pathname);
    }

    window.addEventListener("popstate", handleHistory);
    window.addEventListener("pushState", handleHistory);

    return () => {
      window.removeEventListener("popstate", handleHistory);
      window.removeEventListener("pushState", handleHistory);
    };
  }, []);

  return (
    <section className="flex-box-col g130">
      {current === "/" && (
        <>
          <Header
            isCurr={current}
            onRoute={(val) => {
              window.history.pushState({}, "", val);
              window.dispatchEvent(new Event("pushState")); // Notify React about route change
              setCurrent(val);
            }}
          />
          <BestSeller />
          <Categories />
          <AboutReview />
          <Contact />
        </>
      )}
      {current === "/products" && (
        <>
          <Header
            isCurr={current}
            onRoute={(val) => {
              window.history.pushState({}, "", val);
              window.dispatchEvent(new Event("pushState")); // Notify React about route change
              setCurrent(val);
            }}
          />
          <Products />
        </>
      )}
      <Footer />
      <Cart />
      <User onModal={(val) => setIsUser(val)} />
      {isUser && <Register onClose={(val) => setIsUser(val)} />}
    </section>
  );
}
