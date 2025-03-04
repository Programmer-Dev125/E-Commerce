import { useState } from "react";
import OrderTable from "./order/orderTable";

export default function Order() {
  const [seeOrders, setSeeOrders] = useState(false);

  function handleOrders(e) {
    setSeeOrders(!seeOrders);
  }

  return (
    <section className="flex-box-row sp-between align-start">
      <div className="card w25">
        <div className="mt20 mb20 w90 mauto">
          <div className="flex-box-row sp-between align-center divider pb10">
            <p className="title">All Orders</p>
            <div>
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                id="all-order-icon"
                onClick={handleOrders}
                className={seeOrders ? "active" : ""}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.3086 7.00008L0.308591 13.3292L0.308592 0.671005L15.3086 7.00008Z"
                  fill="#D9D9D9"
                />
              </svg>
            </div>
          </div>
          {seeOrders && (
            <div className="mt30">
              <p className="sm-text">Pending</p>
              <p className="sm-text">Completed</p>
              <p className="sm-text">Canceled Orders</p>
            </div>
          )}
        </div>
      </div>
      <div className="w73">
        <div className="mb30">
          <input
            type="text"
            placeholder="Search Orders"
            className="order-field"
          />
        </div>
        <div>
          <OrderTable />
        </div>
      </div>
    </section>
  );
}
