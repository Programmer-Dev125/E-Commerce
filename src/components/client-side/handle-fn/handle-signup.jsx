import { handleInsertDb } from "./handle-insert-db";

export async function handleSignup({ name, email, password }) {
  if (!name || !email || !password) return;
  const checkName = /^[0-9A-Za-z ]*$/.test(name);
  const checkEmail = /^[0-9A-za-z]*@gmail\.com$/.test(email);
  const checkPassword = /^[0-9A-za-z ]*$/.test(password);

  if (!checkName || !checkEmail || !checkPassword) {
    return { name: "", email: "", message: { error: "Invalid Fields" } };
  }

  name.trim();
  email.trim();
  password.trim();

  const isFetch = await fetch(
    "https://e-commerce-gamma-one-65.vercel.app/api/app",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-request-path": "/signup",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
      credentials: "include",
    }
  );
  const isResp = await isFetch.json();
  switch (isFetch.status) {
    case 200:
      handleInsertDb(name, email);
      return { name: name, email: email, message: isResp };
    case 400:
      return { message: isResp };
    case 500:
      return { message: isResp };
    default:
      return { message: "Invalid Request" };
  }
}
