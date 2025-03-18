import { useEffect, useState } from "react";
import AboutReview from "./aboutreview/aboutreview.jsx";
import BestSeller from "./bestsellers/bestseller.jsx";
import Categories from "./categories/categories.jsx";
import Contact from "./contact/contact.jsx";
import Footer from "./footer/footer.jsx";
import Header from "./header/header.jsx";
import Products from "./products/products.jsx";
import User from "./header/user/user.jsx";
import Cart from "./header/cart/cart.jsx";
import ProductBuy from "./products/product/buy/productbuy.jsx";
import SearchCard from "./header/search/searchcard.jsx";

export default function Client() {
  const [current, setCurrent] = useState(window.location.pathname);
  const [searchModal, setSearchModal] = useState(false);
  const [userModal, setUserModal] = useState(false);
  const [cartModal, setCartModal] = useState(false);
  const [productModal, setProductModal] = useState(false);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");

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
      <Header
        isCurr={current}
        onRoute={(val) => {
          window.history.pushState({}, "", val);
          window.dispatchEvent(new Event("pushState")); // Notify React about route change
          setCurrent(val);
        }}
        onUserModal={(val) => setUserModal(val)}
        onCartModal={(val) => setCartModal(val)}
        onSearchModal={(val) => setSearchModal(val)}
        onBuy={(val, name, price) => {
          setProductModal(val);
          setProductName(name);
          setProductPrice(price);
        }}
      />
      {current === "/" && (
        <>
          <BestSeller
            onBuy={(val, name, price) => {
              setProductModal(val);
              setProductName(name);
              setProductPrice(price);
            }}
          />
          <Categories />
          <AboutReview />
          <Contact />
        </>
      )}
      {current === "/products" && (
        <>
          <Products
            onBuy={(val, name, price) => {
              setProductModal(val);
              setProductName(name);
              setProductPrice(price);
            }}
          />
        </>
      )}
      {userModal && <User onUserModal={(val) => setUserModal(val)} />}
      {cartModal && (
        <Cart
          onCartModal={(val) => setCartModal(val)}
          onBuyModal={(val, title, price) => {
            setProductModal(val);
            setProductName(title);
            setProductPrice(price);
          }}
        />
      )}
      {productModal && (
        <ProductBuy
          user={productName}
          price={productPrice}
          onClose={(val) => setProductModal(val)}
        />
      )}
      {searchModal && <SearchCard onClose={(val) => setSearchModal(val)} />}
      <Footer />
    </section>
  );
}
