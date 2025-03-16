import BestProducts from "./bestproducts/bestproducts";
import BestTitleBar from "./besttitlebar/besttitlebar";

export default function BestSeller() {
  return (
    <div className="flex-box-col g50">
      <BestTitleBar />
      <BestProducts />
    </div>
  );
}
