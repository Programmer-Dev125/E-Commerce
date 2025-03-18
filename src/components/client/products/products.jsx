import { useState } from "react";
import Product from "./product/product";
import ProductBar from "./productbar/productbar";

export default function Products({ onBuy }) {
  return (
    <div className="product-section w90 mauto flex-box-col g70">
      <ProductBar />
      <Product
        onBuy={(val, name, price) => {
          onBuy(val, name, price);
        }}
      />
    </div>
  );
}
