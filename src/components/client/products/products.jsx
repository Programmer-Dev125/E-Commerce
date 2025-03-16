import { useState } from "react";
import Product from "./product/product";
import ProductBar from "./productbar/productbar";
import ProductBuy from "./product/buy/productbuy";

export default function Products() {
  const [showProduct, setShowProduct] = useState(false);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");

  return (
    <>
      <div className="product-section w90 mauto flex-box-col g70">
        <ProductBar />
        <Product
          onBuy={(val, name, price) => {
            setShowProduct(val);
            setProductName(name);
            setProductPrice(price);
          }}
        />
      </div>
      {showProduct && (
        <ProductBuy
          onClose={(val) => setShowProduct(val)}
          user={productName}
          price={productPrice}
        />
      )}
    </>
  );
}
