import { useDispatch, useSelector } from "react-redux";
import { reviewIcons, cartIcon } from "../svg/paths";
import ProductsBar from "./products-bar";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import Spinner from "../spinner.jsx/spinner";
import { handleAddCart } from "../handle-fn/handle-add-cart";
import { onResponse, closeResponse } from "../global-state/response-slice";
import { addCart } from "../global-state/cart-slice";

export default function Products() {
  const itemRef = useRef(null);
  const products = useSelector((state) => state.products.value);
  const dispatch = useDispatch();
  const bio = useSelector((state) => state.bio);
  const navigate = useNavigate();

  useEffect(() => {
    const text = itemRef.current.querySelectorAll(".tx-16");
    text.forEach((item) => {
      if (item.innerText.length >= 15) {
        item.textContent = item.textContent.slice(0, 15) + "...";
      }
    });
  }, []);

  function handleLink(name) {
    let link = "";
    for (let i = 0; i < name.length; i++) {
      if (name[i] === " ") {
        link += "-";
        continue;
      }
      link += name[i];
    }
    navigate(`/products/${link}`);
  }

  function handleCart(id) {
    handleAddCart(id, bio).then((resp) => {
      if (resp.carts) {
        dispatch(
          onResponse({ received: true, danger: false, message: resp.message })
        );
        dispatch(addCart({ id: id }));
        setTimeout(() => dispatch(closeResponse()), 1000);
        return;
      }
      dispatch(
        onResponse({
          received: true,
          danger: true,
          message: resp.message.error ? resp.message.error : resp.message,
        })
      );
      setTimeout(() => dispatch(closeResponse()), 1000);
    });
  }

  return (
    <section className="col gp-50 w90 ma">
      <ProductsBar />
      <section className="g4 gp-15 tab-row rel" ref={itemRef}>
        {products.length === 0 ? (
          <Spinner spin={true} />
        ) : (
          products.map((product) => {
            return (
              <div key={product.id} className="col gp-15">
                <div className="category-img-box rel">
                  <img src={product.img} alt="Product Image" />
                  <div
                    className="top-right mp"
                    onClick={() => handleCart(product.id)}
                  >
                    {cartIcon}
                  </div>
                </div>
                <div>
                  <div className="row sp-b al-c">
                    <p title={product.name} className="mt0 mb0 tx-16">
                      {product.name}
                    </p>
                    <p className="mt0 mb0 tx-14 re">{product.price}</p>
                  </div>
                  {reviewIcons}
                </div>
                <div>
                  <button onClick={() => handleLink(product.name)}>Buy</button>
                </div>
              </div>
            );
          })
        )}
      </section>
    </section>
  );
}
