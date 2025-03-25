import { token } from "../jwt.js";
import { model } from "../app.js";
import { handleHeader } from "../commonheader.js";
export default async function handleLogin(req, res) {
  handleHeader(res);

  if (req.method === "OPTIONS") {
    res.writeHead(200);
    res.end();
    return;
  }

  let isBody = "";
  req.on("data", (data) => {
    isBody += data;
  });
  req.on("end", async () => {
    const isObj = JSON.parse(isBody);
    if (!Object.hasOwn(isObj, "name") || !Object.hasOwn(isObj, "password")) {
      res.writeHead(400);
      res.end(JSON.stringify({ error: "Request Body empty" }));
      return;
    }
    const hasLogin = await model.findOne({
      name: isObj.name,
      password: isObj.password,
    });
    if (!hasLogin) {
      res.writeHead(400);
      res.end(JSON.stringify({ error: "Not admin" }));
      return;
    }
    res.writeHead(200, {
      "set-cookie": `ADMINKEY=${token}; max-age=259200;`,
    });
    res.end(JSON.stringify({ success: "You've logged in" }));
  });
}
