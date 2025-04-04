export default function BestTitleBar({ onLink }) {
  return (
    <div className="w90 mauto flex-box-row sp-between align-center best-seller-bar">
      <div>
        <h2 className="mt0 mb0 page-title">Best Selling Products</h2>
      </div>
      <div className="w15 btn-mob">
        <button className="black" onClick={() => onLink("/products")}>
          View Products
        </button>
      </div>
    </div>
  );
}
