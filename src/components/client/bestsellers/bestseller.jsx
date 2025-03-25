import BestProducts from "./bestproducts/bestproducts";
import BestTitleBar from "./besttitlebar/besttitlebar";

export default function BestSeller({ onBuy, data, onLink }) {
  return (
    <div className="flex-box-col g50">
      <BestTitleBar onLink={(val) => onLink(val)} />
      <BestProducts
        onBuy={(val, name, price, img) => onBuy(val, name, price, img)}
        data={data}
      />
    </div>
  );
}
