import { useDispatch, useSelector } from "react-redux";
import { cartIcon, reviewIcons } from "../../svg/paths";
import { useEffect, useRef } from "react";
import { handleAddCart } from "../../handle-fn/handle-add-cart";
import Spinner from "../../spinner.jsx/spinner";
import { onResponse, closeResponse } from "../../global-state/response-slice";
import { addCart } from "../../global-state/cart-slice";

export default function CategoriesContent() {
  const isRef = useRef(null);
  const products = useSelector((state) => state.products.value);
  const bio = useSelector((state) => state.bio);
  const dispatch = useDispatch();

  useEffect(() => {
    const item = isRef.current?.querySelectorAll(".tx-16");
    item.forEach((item) => {
      if (item.innerText.length >= 15) {
        item.textContent = item.textContent.slice(0, 15) + "...";
      }
    });
  }, [isRef]);

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
    <section className="g4 gp-15 tab-row rel" ref={isRef}>
      {products.length === 0 ? (
        <Spinner />
      ) : (
        products.map((item) => {
          return (
            <div key={item.id} className="col gp-15">
              <div className="category-img-box rel">
                <img src={item.img} alt="Product Image" />
                <div
                  className="top-right mp"
                  onClick={() => handleCart(item.id)}
                >
                  {cartIcon}
                </div>
              </div>
              <div>
                <div className="row sp-b al-c">
                  <p className="mt0 mb0 tx-16">{item.name}</p>
                  <p className="mt0 mb0 tx-14 re">{item.price}</p>
                </div>
                {reviewIcons}
              </div>
            </div>
          );
        })
      )}
    </section>
  );
}
