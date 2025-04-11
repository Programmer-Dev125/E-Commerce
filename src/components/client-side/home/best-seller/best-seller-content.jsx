import { useSelector } from "react-redux";
import { reviewIcons } from "../../svg/paths";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import Spinner from "../../spinner.jsx/spinner";

export default function BestSellerContent() {
  const nameRef = useRef(null);
  const products = useSelector((state) => state.products.value);
  const navigate = useNavigate();

  useEffect(() => {
    const text = nameRef.current?.querySelectorAll(".trn-17");
    text.forEach((item) => {
      if (item.innerText.length >= 15) {
        item.textContent = item.textContent.slice(0, 15) + "...";
      }
    });
  }, [products]);

  function handleNavigate(name) {
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

  return (
    <section className="rel">
      <section className="row-sc" ref={nameRef}>
        {products.length === 0 ? (
          <Spinner spin={true} />
        ) : (
          products.map((item) => {
            return (
              <div key={item.id} className="col gp-20 ml20">
                <div className="img-box">
                  <img src={item.img} alt="" />
                </div>
                <div>
                  <div className="row sp-b al-c">
                    <p title={item.name} className="mt0 mb0 tx-16 bl trn-17">
                      {item.name}
                    </p>
                    <p className="mt5 mb0 tx-14 re">{item.price}</p>
                  </div>
                  {reviewIcons}
                </div>
                <div>
                  <button onClick={() => handleNavigate(item.name)}>Buy</button>
                </div>
              </div>
            );
          })
        )}
      </section>
    </section>
  );
}
