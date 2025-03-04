import { useState } from "react";
import UserTable from "./user/userTable";

export default function User() {
  const [seeUsers, setSeeUsers] = useState(false);
  const [search, setSearch] = useState(false);

  function handleSeeUsers(e) {
    setSeeUsers(!seeUsers);
  }

  return (
    <section>
      <div className="flex-box-row sp-between align-start">
        <div className="card w30">
          <div className="w90 mauto mt20 mb20">
            <div className="flex-box-row sp-between align-center divider pb10">
              <p className="all-user-text">All Users</p>
              <div>
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                  id="all-user-icon"
                  onClick={handleSeeUsers}
                  className={seeUsers ? "active" : ""}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.3086 7.00008L0.308591 13.3292L0.308592 0.671005L15.3086 7.00008Z"
                    fill="#D9D9D9"
                  />
                </svg>
              </div>
            </div>
            {seeUsers && (
              <div className="user-tab mt30 mb30">
                <p>Verified Users</p>
                <p>Buyers</p>
              </div>
            )}
          </div>
        </div>
        <div className="w68">
          <div className="card mb40">
            <div className="flex-box-row sp-around align-center">
              <div className="w80">
                <input
                  type="text"
                  className="search-user-input"
                  placeholder="search as user"
                />
              </div>
              <div className="w10 text-end">
                <svg
                  width="14"
                  onClick={() => setSearch(!search)}
                  height="15"
                  className="svg-menu"
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.93986 15L0.610782 -2.76018e-07L13.2689 -1.79022e-06L6.93986 15Z"
                    fill="#D9D9D9"
                  />
                </svg>
                {search && (
                  <div className="options-field">
                    <p>Users</p>
                    <p>Email</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="card">
            <UserTable />
          </div>
        </div>
      </div>
    </section>
  );
}
