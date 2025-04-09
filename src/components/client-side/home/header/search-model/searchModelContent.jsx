import { useEffect, useRef, useState } from "react";
import { buyIcon, cartBlueIcon } from "../../../svg/paths";
import { useDispatch, useSelector } from "react-redux";
import { onClose } from "../../../global-state/searchModel";
import { useNavigate } from "react-router";
import { addCart } from "../../../global-state/cart-slice";
import {
  onResponse,
  closeResponse,
} from "../../../global-state/response-slice";
import { handleAddCart } from "../../../handle-fn/handle-add-cart";

export default function SearchModelContent() {
  const ref = useRef(null);
  const [search, setSearch] = useState("");
  const data = useSelector((state) => state.products.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const bio = useSelector((state) => state.bio);

  const filterData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const item = ref.current?.querySelectorAll(".tx-16");
    item.forEach((item) => {
      if (item.innerText.length >= 15) {
        item.textContent = item.textContent.slice(0, 15) + "...";
      }
    });
  }, [data]);

  function handleNavigate(name) {
    let link = "";
    for (let i = 0; i < name.length; i++) {
      if (name[i] === " ") {
        link += "-";
        continue;
      }
      link += name[i];
    }
    dispatch(onClose());
    navigate(`/products/${link}`);
  }

  function handleAdd(id) {
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
    <>
      <div>
        <input
          type="text"
          placeholder="Search Products"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="col gp-15 mt20 hgt-scroll" ref={ref}>
        {filterData.map((item) => {
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
                <span className="mp" onClick={() => handleAdd(item.id)}>
                  {cartBlueIcon}
                </span>
                <span className="mp" onClick={() => handleNavigate(item.name)}>
                  {buyIcon}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
