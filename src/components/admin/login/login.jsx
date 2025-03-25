import { useState } from "react";
import { handleDb } from "./db/db";

export default function Login({ onLogin }) {
  const [fields, setFields] = useState({
    name: "",
    password: "",
  });

  function handleChange(e) {
    setFields({
      ...fields,
      [e.target.id]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const isFetch = await fetch(
      "https://e-commerce-gamma-one-65.vercel.app/api/app/login",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ name: fields.name, password: fields.password }),
        credentials: "include",
      }
    );
    switch (isFetch.status) {
      case 200:
        {
          const isResp = await isFetch.json();
          localStorage.setItem("admin", true);
          handleDb(fields.name);
          onLogin("/add-product");
          console.log(isResp);
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
    <div className="admin-form">
      <h2 className="page-title mt20 mb30 wfit">Admin Login</h2>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <>
          <label htmlFor="name" className="isBlock mt30 mb10 client-text">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="username"
            value={fields.name}
            onChange={handleChange}
          />
        </>
        <>
          <label htmlFor="password" className="isBlock mt30 mb10 client-text">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={fields.password}
            onChange={handleChange}
          />
        </>
        <>
          <button>Login</button>
        </>
      </form>
    </div>
  );
}
