import { useEffect, useState } from "react";

export default function ModalContent() {
  const [isTab, setIsTab] = useState("Edit");

  useEffect(() => {
    (() => {
      const active = document.querySelector(".first-tab .active");
      if (active) {
        document.querySelector(
          ".tab-underline"
        ).style.width = `${active.offsetWidth}px`;
        document.querySelector(
          ".tab-underline"
        ).style.left = `${active.offsetLeft}px`;
      }
    })();
  });

  function handleTab(e) {
    if (e.target.tagName !== "P") return;
    const active = document.querySelector(".first-tab .active");
    if (active) {
      active.classList.remove("active");
    }
    e.target.classList.add("active");
    document.querySelector(
      ".tab-underline"
    ).style.width = `${e.target.offsetWidth}px`;
    document.querySelector(
      ".tab-underline"
    ).style.left = `${e.target.offsetLeft}px`;
    setIsTab(e.target.textContent);
  }

  return (
    <div className="content align-center">
      <div onClick={handleTab} className="first-tab">
        <p className="active">Edit</p>
        <p>Delete</p>
        <div className="tab-underline"></div>
      </div>
      <div className="second-tab mt40">
        {isTab === "Edit" && (
          <>
            <form className="coupon-form">
              <div>
                <label htmlFor="coupon">Coupon</label>
                <input type="text" id="coupon" name="couponCode" />
              </div>
              <div>
                <button className="coupon-save-btn">Save</button>
              </div>
            </form>
          </>
        )}
        {isTab === "Delete" && (
          <>
            <p className="del-text">
              Are you sure you want to delete the coupon?
            </p>
            <button className="coupon-del-btn">Delete</button>
          </>
        )}
      </div>
    </div>
  );
}
