import { useEffect, useRef, useState } from "react";
import Login from "./login/login";
import Signup from "./signup/signup";

export default function User({ onUserModal, bio, update }) {
  const [hasUser, setHasUser] = useState({
    bool: false,
    user: "",
    email: "",
  });
  const [isLogin, setIsLogin] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [line, setLine] = useState({
    text: "Sign up",
    left: "",
    width: "",
  });
  const isRef = useRef(null);

  function handleClose(e) {
    e.stopPropagation();
    if (e.target.classList.contains("user-modal")) {
      onUserModal(false);
      document.body.classList.remove("no-scroll");
    }
  }
  useEffect(() => {
    if (!isRef.current) return;
    const active = isRef.current.querySelector(".user-text.active");
    if (active) {
      setLine({
        text: "Sign up",
        left: `${active.offsetLeft}px`,
        width: `${active.offsetWidth}px`,
      });
    }
  }, []);

  useEffect(() => {
    const db = indexedDB.open("client-db");
    db.addEventListener("success", (e) => {
      const database = e.target.result;
      const hasUser = database
        .transaction("client-user")
        .objectStore("client-user")
        .get(1);
      hasUser.addEventListener("success", (ev) => {
        const data = ev.target.result;
        if (!data) return;
        if (localStorage.getItem("user")) {
          setHasUser({
            user: data.name,
            email: data.email,
            bool: true,
          });
          bio({
            name: data.name,
            email: data.email,
          });
        }
      });
    });
  }, [isUpdate]);

  function handleTab(e) {
    e.stopPropagation();
    if (e.target.tagName !== "P") return;
    setLine({
      text: e.target.textContent,
      left: `${e.target.offsetLeft}px`,
      width: `${e.target.offsetWidth}px`,
    });
    e.target.textContent === "Sign up" ? setIsLogin(false) : setIsLogin(true);
  }
  return (
    <div className="user-modal" onClick={handleClose} ref={isRef}>
      <div className="user-modal-content">
        {hasUser.bool ? (
          <div>
            <h2 className="mt0 mb0 page-title wfit">Welcome! {hasUser.user}</h2>
            <p className="mt5 mb0 client-text-sec">{hasUser.email}</p>
          </div>
        ) : (
          <>
            <div
              className="relative flex-box-row align-center sp-around bottom mb40"
              onClick={handleTab}
            >
              <p
                className={`mb0 mt0 user-text pointer pb15 pl10 pr10 ${
                  line.text === "Sign up" ? "active" : ""
                }`}
              >
                Sign up
              </p>
              <p
                className={`mb0 mt0 user-text pointer pb15 pl10 pr10 ${
                  line.text === "Login" ? "active" : ""
                }`}
              >
                Login
              </p>
              <div
                className="user-underline"
                style={{ width: line.width, left: line.left }}
              ></div>
            </div>
            {isLogin ? (
              <Login onUpdate={(val) => setIsUpdate(val)} update={update} />
            ) : (
              <Signup onUpdate={(val) => setIsUpdate(val)} update={update} />
            )}
          </>
        )}
      </div>
    </div>
  );
}
