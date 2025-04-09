import { Link, useNavigate } from "react-router";
import { handleScroll } from "../handle-fn/handleScroll";
export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="w100 pt30 pb30 mt100">
      <div className="w70 ma row sp-b al-c bo-b w90-600">
        <Link to="/">
          <p className="tx-16 wh mt0 mb0 pb10">Home</p>
        </Link>
        <p
          className="tx-16 wh mt0 mb0 pb10 mp"
          onClick={(e) => {
            navigate("/");
            setTimeout(() => handleScroll(e), 100);
          }}
        >
          Contact
        </p>
        <p
          className="tx-16 wh mt0 mb0 pb10 mp"
          onClick={(e) => {
            navigate("/");
            setTimeout(() => handleScroll(e), 100);
          }}
        >
          About
        </p>
        <Link to="/products">
          <p className="tx-16 wh mt0 mb0 pb10">Products</p>
        </Link>
      </div>
    </footer>
  );
}
