import { useState } from "react";

export default function Login({ onUpdate }) {
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setInfo({
      ...info,
      [e.target.type]: e.target.value,
    });
  }

  async function handleLoginSubmit(e) {
    e.stopPropagation();
    e.preventDefault();
    if (!info.email || !info.password) return;
    const isFetch = await fetch(
      "https://e-commerce-gamma-one-65.vercel.app/api/app/client-login",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ email: info.email, password: info.password }),
        credentials: "include",
      }
    );
    switch (isFetch.status) {
      case 200:
        {
          const isResp = await isFetch.json();
          console.log(isResp);
          const db = indexedDB.open("client-db");
          db.addEventListener("success", (e) => {
            const database = e.target.result;
            database
              .transaction("client-user", "readwrite")
              .objectStore("client-user")
              .add({
                id: 1,
                name: isResp.name,
                email: info.email,
                signin: true,
              });
            localStorage.setItem("user", true);
            onUpdate(true);
          });
          db.addEventListener("error", (e) => {
            console.log(e);
          });
        }
        break;
      case 400:
        {
          const isResp = await isFetch.json();
          console.log(isResp);
        }
        break;
      default:
        break;
    }
  }

  return (
    <form
      onSubmit={handleLoginSubmit}
      className="flex-box-col g30"
      autoComplete="off"
    >
      <div>
        <label htmlFor="useremail" className="isBlock client-text mb10">
          Email
        </label>
        <input type="email" id="useremail" onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="userpassword" className="isBlock client-text mb10">
          Password
        </label>
        <input
          type="password"
          id="userpassword"
          onChange={handleChange}
          required
        />
      </div>
      <div className="w40">
        <button>Login</button>
      </div>
    </form>
  );
}
