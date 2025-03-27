import { useEffect, useState, useRef } from "react";
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
  const [products, setProducts] = useState([]);
  const [searchModal, setSearchModal] = useState(false);
  const [userModal, setUserModal] = useState(false);
  const [cartModal, setCartModal] = useState(false);
  const [productModal, setProductModal] = useState(false);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImg, setProductImg] = useState("");

  useEffect(() => {
    function handleHistory() {
      setCurrent(window.location.pathname);
    }
    window.addEventListener("popstate", handleHistory);
    const db = indexedDB.open("client-db");
    db.addEventListener("upgradeneeded", (e) => {
      const database = e.target.result;
      database.createObjectStore("client-user", {
        keyPath: "id",
        autoIncrement: true,
      });
    });
    let isResp = [];
    (async () => {
      const isFetch = await fetch(
        "https://e-commerce-gamma-one-65.vercel.app/api/app",
        {
          headers: {
            "content-type": "application/json",
            "x-request-path": "/products",
          },
        }
      );
      switch (isFetch.status) {
        case 200:
          {
            isResp = await isFetch.json();
            for (let i = 0; i < isResp.length; i++) {
              isResp[i].img = URL.createObjectURL(
                new Blob([new Uint8Array(isResp[i].img.data)], {
                  type: "image/png",
                })
              );
            }
            setProducts(isResp);
          }
          break;
        case 500:
          {
            isResp = await isFetch.json();
            console.log(isResp);
          }
          break;
        default:
          console.log("invalid request");
          break;
      }
    })();

    return () => {
      if (isResp.length > 0) {
        for (let i = 0; i < isResp.length; i++) {
          URL.revokeObjectURL(isResp[i].img);
        }
      }
    };
  }, []);

  return (
    <section className="flex-box-col g130">
      <Header
        isCurr={current}
        onRoute={(val) => {
          window.history.pushState({}, "", val);
          window.dispatchEvent(new Event("popstate")); // Notify React about route change
          setCurrent(val);
        }}
        onUserModal={(val) => setUserModal(val)}
        onCartModal={(val) => setCartModal(val)}
        onSearchModal={(val) => setSearchModal(val)}
        onBuy={(val, name, price, img) => {
          setProductModal(val);
          setProductName(name);
          setProductPrice(price);
          setProductImg(img);
        }}
        data={products}
      />
      {current === "/" && (
        <>
          <BestSeller
            onBuy={(val, name, price, img) => {
              setProductModal(val);
              setProductName(name);
              setProductPrice(price);
              setProductImg(img);
            }}
            data={products}
            onLink={(val) => {
              window.history.pushState({}, "", val);
              setCurrent(val);
            }}
          />
          <Categories data={products} />
          <AboutReview />
          <Contact />
        </>
      )}
      {current === "/products" && (
        <>
          <Products
            onBuy={(val, name, price, img) => {
              setProductModal(val);
              setProductName(name);
              setProductPrice(price);
              setProductImg(img);
            }}
            data={products}
          />
        </>
      )}
      {userModal && <User onUserModal={(val) => setUserModal(val)} />}
      {cartModal && (
        <Cart
          onCartModal={(val) => setCartModal(val)}
          onBuyModal={(val, title, price, img) => {
            setProductModal(val);
            setProductName(title);
            setProductPrice(price);
            setProductImg(img);
          }}
        />
      )}
      {productModal && (
        <ProductBuy
          user={productName}
          price={productPrice}
          img={productImg}
          onClose={(val) => setProductModal(val)}
        />
      )}
      {searchModal && (
        <SearchCard onClose={(val) => setSearchModal(val)} data={products} />
      )}
      <Footer />
    </section>
  );
}
