import { useEffect, useState } from "react";
import Footer from "./footer/footer.jsx";
import Home from "./home/home.jsx";
import User from "./users/user.jsx";
import Product from "./products/product.jsx";
import Order from "./orders/order.jsx";

export default function Nav({ isError }) {
  const [isCurr, setIsCurr] = useState(window.location.pathname || "/admin");

  useEffect(() => {
    if (isError) return;
    function handleHistory() {
      setIsCurr(window.location.pathname || "/");
    }
    (() => {
      const active = document
        .querySelector(".nav .flex-box-row")
        .querySelector(".active");

      if (window.location.pathname !== active.dataset.route) {
        active.classList.remove("active");
        const isElem = document.querySelector(
          `.nav .flex-box-row p[data-route='${window.location.pathname}']`
        );
        if (isElem) {
          isElem.classList.add("active");
          document.querySelector(
            ".underline"
          ).style.width = `${isElem.offsetWidth}px`;
          document.querySelector(
            ".underline"
          ).style.left = `${isElem.offsetLeft}px`;
        }
      } else {
        document.querySelector(
          ".underline"
        ).style.width = `${active.offsetWidth}px`;
        document.querySelector(
          ".underline"
        ).style.left = `${active.offsetLeft}px`;
      }
    })();

    window.addEventListener("popstate", handleHistory);
  });

  function handleRoute(e) {
    if (e.target.tagName !== "P") return;
    const route = e.target.dataset.route;
    const active = document
      .querySelector(".nav .flex-box-row")
      .querySelector(".active");
    if (active) {
      active.classList.remove("active");
    }
    e.target.classList.add("active");
    document.querySelector(
      ".underline"
    ).style.left = `${e.target.offsetLeft}px`;
    document.querySelector(
      ".underline"
    ).style.width = `${e.target.offsetWidth}px`;
    setIsCurr(route);
    window.history.pushState({}, "", route);
  }

  return (
    <>
      {isError ? (
        ""
      ) : (
        <section className="nav flex-box-row sp-between align-center">
          <div className="nav-first">
            <h2 className="logo-text">Eternal Ink</h2>
          </div>
          <div
            className="flex-box-row sp-between nav-second"
            onClick={handleRoute}
          >
            <p data-route="/admin" className="active">
              Overview
            </p>
            <p data-route="/admin/users">Users</p>
            <p data-route="/admin/products">Products</p>
            <p data-route="/admin/orders">Orders</p>
            <div className="underline"></div>
          </div>
        </section>
      )}
      <section className="page-content mt70 pb30">
        {isCurr === "/admin" && <Home />}
        {isCurr === "/admin/users" && <User />}
        {isCurr === "/admin/products" && <Product />}
        {isCurr === "/admin/orders" && <Order />}
      </section>
      <Footer />
    </>
  );
}
