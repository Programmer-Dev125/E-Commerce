import { handleVerify } from "../jwt.js";
// import { handleForm } from "./form/form.js";

export function handleAddProduct(model, req, res) {
  const cookie = req.headers.cookie;
  if (!cookie) {
    res.writeHead(400);
    res.end(JSON.stringify({ error: "Request should include credentials" }));
    return;
  }
  const key = cookie.split("=")[1];
  const toVerify = handleVerify(key);
  if (!Object.hasOwn(toVerify, "data")) {
    res.writeHead(403, {
      "www-authenticate": "Bearer realm='Invalid API Key'; charset='utf-8'",
    });
    res.end(JSON.stringify({ error: "Invalid API Key" }));
    return;
  }
  let body = "";
  req.on("data", (data) => {
    body += data;
  });
  req.on("end", () => {
    res.writeHead(200);
    return res.end(JSON.stringify({ data: body }));
  });
  // handleForm(model, req, res);
}
