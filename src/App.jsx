import { Routes, Route } from "react-router";
import ErrorPage from "./components/404Page/error";
import Home from "./components/client-side/home/home";
import Header from "./components/client-side/home/header/header";
import Products from "./components/client-side/products/products";
import Singup from "./components/client-side/account/signup/signup";
import Footer from "./components/client-side/footer/footer";
import Login from "./components/client-side/account/login/login";
import BuyProduct from "./components/client-side/buy-product/buy-product";
import { setProducts } from "./components/client-side/global-state/product-slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { handleProducts } from "./components/client-side/handle-fn/handle-products";
import { setBio } from "./components/client-side/global-state/bio-slice";
import { handleGetCart } from "./components/client-side/handle-fn/handle-get-cart";
import Spinner from "./components/client-side/spinner.jsx/spinner";
import Response from "./components/client-side/response/response";
import { setCart } from "./components/client-side/global-state/cart-slice";

export default function App() {
  const bio = useSelector((state) => state.bio);
  const spin = useSelector((state) => state.spin.value);
  const info = useSelector((state) => state.response);
  const fire = useDispatch();

  useEffect(() => {
    handleProducts().then((x) => fire(setProducts(x)));
  }, []);

  useEffect(() => {
    if (!bio.name || !bio.email) return;
    handleGetCart(bio).then((carts) => fire(setCart(carts)));
  }, [bio]);

  useEffect(() => {
    const db = indexedDB.open("user");
    db.addEventListener("upgradeneeded", (e) => {
      const database = e.target.result;
      database.createObjectStore("user", { keyPath: "id" });
    });
    db.addEventListener("success", (ev) => {
      const database = ev.target.result;
      const transaction = database
        .transaction("user")
        .objectStore("user")
        .get(1);
      transaction.addEventListener("success", (eve) => {
        const isResult = eve.target.result;
        if (!isResult) {
          return fire(
            setBio({
              name: "",
              email: "",
            })
          );
        }
        return fire(
          setBio({
            name: isResult.name,
            email: isResult.email,
          })
        );
      });
    });
  }, []);

  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/signup" element={<Singup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products/:id" element={<BuyProduct />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />
      <Spinner />
      <Spinner spin={spin} />
      <Response
        received={info.received}
        danger={info.danger}
        message={info.message}
      />
    </>
  );
}
