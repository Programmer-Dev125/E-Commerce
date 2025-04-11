import { useDispatch, useSelector } from "react-redux";
import { deleteIcon, buyIcon } from "../../../svg/paths";
import { useEffect, useRef } from "react";
import { handleRemoveCart } from "../../../handle-fn/handle-remove-cart";
import { removeCart } from "../../../global-state/cart-slice";
import { onSpin } from "../../../global-state/spinner-slice";
import {
  onResponse,
  closeResponse,
} from "../../../global-state/response-slice";
import { closeCart } from "../../../global-state/cartModel";
import { useNavigate } from "react-router";

export default function CartModel() {
  const ref = useRef(null);
  const products = useSelector((state) => state.products.value);
  const carts = useSelector((state) => state.carts.value);
  const bio = useSelector((state) => state.bio);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let cartProducts = [];
  for (let i = 0; i < products.length; i++) {
    for (let j = 0; j < carts.length; j++) {
      if (products[i].id === carts[j].id) {
        cartProducts.push(products[i]);
      }
    }
  }

  useEffect(() => {
    const item = ref.current?.querySelectorAll(".tx-16");
    item.forEach((item) => {
      if (item.innerText.length >= 15) {
        item.textContent = item.textContent.slice(0, 15) + "...";
      }
    });
  }, [carts]);

  function handleDelete(id, name) {
    dispatch(onSpin());
    handleRemoveCart(id, name, bio).then((resp) => {
      dispatch(removeCart(id));
      dispatch(onSpin());
      dispatch(
        onResponse({
          received: true,
          danger: resp.success ? false : true,
          message: resp.success ? resp.success : resp.error,
        })
      );
      setTimeout(() => dispatch(closeResponse()), 1000);
    });
  }

  function handleNavigate(name) {
    let link = "";
    for (let i = 0; i < name.length; i++) {
      if (name[i] === " ") {
        link += "-";
        continue;
      }
      link += name[i];
    }
    dispatch(closeCart());
    navigate(`/products/${link}`);
  }

  return (
    <div className="col gp-15 mt20 cart-scroll" ref={ref}>
      {cartProducts.length === 0 ? (
        <div className="user-info">
          <h2 className="mt0 mb0 tx-24">No Products inside the cart</h2>
        </div>
      ) : (
        cartProducts.map((item) => {
          return (
            <div key={item.id} className="row sp-b al-c bo-b pb15 la-child">
              <div className="row al-c">
                <div className="circle-bg p10 mr20">
                  <img src={item.img} alt="product image" className="img-40" />
                </div>
                <div>
                  <p title={item.name} className="mt0 mb0 tx-16">
                    {item.name}
                  </p>
                  <p className="mt5 mb0 tx-14 re">{item.price}</p>
                </div>
              </div>
              <div className="g2 gp-10 al-c">
                <span
                  className="mp"
                  onClick={() => handleDelete(item.id, item.name)}
                >
                  {deleteIcon}
                </span>
                <span className="mp" onClick={() => handleNavigate(item.name)}>
                  {buyIcon}
                </span>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
