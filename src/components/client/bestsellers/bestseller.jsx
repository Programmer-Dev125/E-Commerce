import BestProducts from "./bestproducts/bestproducts";
import BestTitleBar from "./besttitlebar/besttitlebar";

export default function BestSeller({ onBuy }) {
  return (
    <div className="flex-box-col g50">
      <BestTitleBar />
      <BestProducts onBuy={(val, name, price) => onBuy(val, name, price)} />
    </div>
  );
}
