import { useState } from "react";

export default function Signup({ onUpdate }) {
  const [signInfo, setSignInfo] = useState({
    username: "",
    useremail: "",
    userpassword: "",
  });

  function handleChange(e) {
    setSignInfo({
      ...signInfo,
      [e.target.id]: e.target.value,
    });
  }

  async function handleSignSubmit(e) {
    e.stopPropagation();
    e.preventDefault();
    if (!signInfo.username || !signInfo.useremail || !signInfo.userpassword)
      return;
    const isFetch = await fetch(
      "https://e-commerce-gamma-one-65.vercel.app/api/app",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-request-path": "/client-signup",
        },
        credentials: "include",
        body: JSON.stringify({
          name: signInfo.username,
          email: signInfo.useremail,
          password: signInfo.userpassword,
        }),
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
                name: signInfo.username,
                email: signInfo.useremail,
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
      case 500:
        {
          const isResp = await isFetch.json();
          console.log(isResp);
        }
        break;
      default:
        console.log("Invalid Request");
        break;
    }
  }

  return (
    <form
      onSubmit={handleSignSubmit}
      className="flex-box-col g30"
      autoComplete="off"
    >
      <div>
        <label htmlFor="username" className="isBlock client-text mb10">
          Name
        </label>
        <input type="text" id="username" onChange={handleChange} required />
      </div>
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
        <button>SignUp</button>
      </div>
    </form>
  );
}
