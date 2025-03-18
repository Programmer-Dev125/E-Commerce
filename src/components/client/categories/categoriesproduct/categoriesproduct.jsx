import { cartIcon, starIcons } from "../../svg/paths";
import { data } from "../../data/data";

export default function CategoriesProduct() {
  return (
    <div className="get-categories">
      {data.map((cart) => (
        <div key={cart.id} className="flex-box-col w100 mb60">
          <div className="relative cart-box">
            <img src={cart.img} alt="img" className="cart-img" />
            <div className="cart-tag">{cartIcon}</div>
          </div>
          <div className="mt20">
            <div className="flex-box-row align-center sp-between">
              <p className="client-title mt0 mb5">{cart.name}</p>
              <p className="client-price-text mt0 mb0">{cart.price}</p>
            </div>
            {starIcons}
          </div>
        </div>
      ))}
    </div>
  );
}
