import { useState } from "react";
import CategoriesProduct from "./categoriesproduct/categoriesproduct";
import CategoryTitleBar from "./categorytitlebar/categorytitlebar";

export default function Categories() {
  const [tab, setTab] = useState("expensive");
  return (
    <div className="category w90 mauto flex-box-col g50">
      <CategoryTitleBar onTab={(val) => setTab(val)} />
      <CategoriesProduct />
    </div>
  );
}
