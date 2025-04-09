import { handleInsertDb } from "./handle-insert-db";

export async function handleLogin({ email, password }) {
  if (!email || !password) return;
  email.trim();
  password.trim();
  const checkEmail = /^[0-9A-Za-z]*@gmail\.com$/.test(email);
  const checkPassword = /^[0-9A-Za-z ]*$/.test(password);
  if (!checkEmail || !checkPassword) {
    return {
      name: "",
      email: "",
      message: { error: "Invalid Fields" },
    };
  }
  const isFetch = await fetch(
    "https://e-commerce-gamma-one-65.vercel.app/api/app",
    {
      method: "POST",
      headers: {
        "x-request-path": "/login",
      },
      body: JSON.stringify({ email: email, password: password }),
      credentials: "include",
    }
  );
  const isResp = await isFetch.json();
  switch (isFetch.status) {
    case 200:
      handleInsertDb(isResp.name, email);
      return { name: isResp.name, email: email, message: isResp };
    case 400:
      return { message: isResp };
    case 500:
      return { message: isResp };
    default:
      return { message: isResp };
  }
}
