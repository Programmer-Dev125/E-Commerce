import { useState } from "react";
import Chart from "./chart";
import ModalContent from "./modal-content";
import BestSellers from "./bestSellers";
import RecentProducts from "./recentProducts";
import RecentBuyers from "./recentBuyers";

export default function Home() {
  const [couponModal, setCouponModal] = useState(false);
  function handleModalOpen(e) {
    setCouponModal(true);
  }
  function handleModalClose(e) {
    if (
      e.target.classList.contains("coupon-save-btn") ||
      e.target.classList.contains("coupon-del-btn")
    ) {
      setCouponModal(false);
      return;
    }
    if (!e.target.classList.contains("modal")) return;
    setCouponModal(false);
  }
  return (
    <>
      <section className="flex-box-row sp-between divider pb60">
        <div className="w30">
          <div className="card">
            <div className="card-first">
              <p className="card-heading">User Visits</p>
              <Chart />
            </div>
          </div>
          <div className="card mt20">
            <div className="card-first">
              <p className="card-heading">Coupon Code</p>
              <p className="coupon-text">ahadad+2123123&6</p>
              <button className="coupon-btn" onClick={handleModalOpen}>
                Manage Coupon
              </button>
            </div>
            {couponModal && (
              <>
                <div className="modal" onClick={handleModalClose}>
                  <div className="modal-content">
                    <ModalContent />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="w65">
          <div className="card">
            <div className="w90 mauto">
              <div className="flex-box-row sp-between align-center mt30 mb30 right-card">
                <p>Top Five Selling Products</p>
                <div className="w20">
                  <button>Add Product</button>
                </div>
              </div>
              <BestSellers />
            </div>
          </div>
        </div>
      </section>
      <section className="mt70 pb60 divider">
        <RecentProducts />
      </section>
      <section className="mt70 pb60">
        <RecentBuyers />
      </section>
    </>
  );
}
