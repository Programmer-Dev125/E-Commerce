import { useState } from "react";
import ProductTable from "./product/productTable";
import AddProduct from "./product/addProduct";

export default function Product() {
  const [seeProducts, setSeeProducts] = useState(false);
  const [isAdd, setIsAdd] = useState(false);

  function handleProducts(e) {
    setSeeProducts(!seeProducts);
  }

  function handleIsAdd(e) {
    setIsAdd(true);
  }

  return (
    <section>
      <div className="flex-box-row sp-between">
        <div className="card w30">
          <div className="w90 mt20 mb20 mauto">
            <div className="flex-box-row sp-between align-center divider pb10">
              <p className="title">All Products</p>
              <div>
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                  id="all-product-icon"
                  onClick={handleProducts}
                  className={seeProducts ? "active" : ""}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.3086 7.00008L0.308591 13.3292L0.308592 0.671005L15.3086 7.00008Z"
                    fill="#D9D9D9"
                  />
                </svg>
              </div>
            </div>
            {seeProducts && (
              <div className="mt30 mb30">
                <p onClick={handleIsAdd} className="sm-text">
                  Add New Product
                </p>
                <p className="sm-text">Newest Product</p>
                <p className="sm-text">Most Bought Product</p>
                <p className="sm-text">Least Bought Product</p>
              </div>
            )}
          </div>
        </div>
        <div className="w68">
          {isAdd ? (
            <AddProduct />
          ) : (
            <>
              <div className="mb30">
                <input
                  type="text"
                  className="search-product-field"
                  placeholder="Search products"
                />
              </div>
              <ProductTable />
            </>
          )}
        </div>
      </div>
    </section>
  );
}
