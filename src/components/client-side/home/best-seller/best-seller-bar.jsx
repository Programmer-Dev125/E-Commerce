import { Link } from "react-router";
export default function BestSellerBar() {
  return (
    <section className="row sp-b al-c w90 ma mob-col-768">
      <h2 className="tx-24 bl">Best Selling Products</h2>
      <div>
        <Link to="/products">
          <button>Check All Products</button>
        </Link>
      </div>
    </section>
  );
}
