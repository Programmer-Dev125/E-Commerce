import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { reviewIcons } from "../svg/paths";

export default function BuyProduct() {
  const { id } = useParams();
  let name = "";
  for (let i = 0; i < id.length; i++) {
    if (id[i] === "-") {
      name += " ";
      continue;
    }
    name += id[i];
  }
  const products = useSelector((state) => state.products.value);
  const data = products.filter((item) => item.name === name);

  return (
    <section className="mt100">
      {data.map((item) => {
        return (
          <div key={item.id} className="row sp-b al-s w60 ma mob-wid-1280">
            <div className="buy-product-box w40">
              <img src={item.img} alt="Product Image Info" />
            </div>
            <div className="w40 col gp-40">
              <div className="col gp-40">
                <div className="row sp-b al-s">
                  <h2 className="tx-24 mt0 mb0">{item.name}</h2>
                  <p className="tx-16 mt10 mb0 re">{item.price}</p>
                </div>
                <div>
                  <p className="mt0 mb0 tx-16">Reviews</p>
                  {reviewIcons}
                </div>
              </div>
              <form onSubmit={(e) => e.preventDefault()} className="col gp-30">
                <div>
                  <label htmlFor="quantity" className="blc tx-14 mb10">
                    Quantity
                  </label>
                  <input
                    type="number"
                    placeholder="Quantity"
                    name="quantity"
                    id="quantity"
                    className="pr10"
                  />
                </div>
                <div>
                  <button>Buy</button>
                </div>
              </form>
            </div>
          </div>
        );
      })}
    </section>
  );
}
