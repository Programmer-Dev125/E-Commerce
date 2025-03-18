import { gitHub, linkedin, upwork } from "../svg/paths";

export default function Footer() {
  return (
    <footer>
      <div className="w90 mauto flex-box-row sp-between align-start footer-row">
        <div className="flex-box-col g40">
          <p className="mt0 mb0 client-white-title wfit">Pages</p>
          <div className="flex-box-col g20">
            <p className="client-white-text-sec mt0 mb0">Home</p>
            <p className="client-white-text-sec mt0 mb0">About</p>
            <p className="client-white-text-sec mt0 mb0">Contact</p>
            <p className="client-white-text-sec mt0 mb0">Products</p>
          </div>
        </div>
        <div className="flex-box-col g40">
          <p className="mt0 mb0 client-white-title wfit">Address</p>
          <div className="flex-box-col g20">
            <p className="client-white-text-sec mt0 mb0">
              We Live in California
            </p>
          </div>
        </div>
        <div className="flex-box-row w10 sp-between align-center footer-circle-row">
          <div className="footer-circle">{linkedin}</div>
          <div className="footer-circle">{gitHub}</div>
          <div className="footer-circle">{upwork}</div>
        </div>
      </div>
    </footer>
  );
}
