import { clientToken } from "../../jwt.js";
export async function handleClientLogin(model, req, res) {
  let body = "";
  req.on("data", (data) => {
    body += data;
  });
  req.on("end", () => {
    const isObj = JSON.parse(body);
    if (!Object.hasOwn(isObj, "email") || !Object.hasOwn(isObj, "password")) {
      res.writeHead(400);
      return res.end(JSON.stringify({ error: "Missing Request Body" }));
    }
    const { email, password } = isObj;
    const testEmail = /^[0-9A-Za-z]*@gmail\.com$/.test(email);
    const testPassword = /^[0-9A-Za-z]*$/.test(password);
    if (!testEmail || !testPassword) {
      res.writeHead(400);
      return res.end(JSON.stringify({ error: "Invalid Request Body" }));
    }
    (async () => {
      const hasExists = await model.findOne({
        email: email,
        password: password,
      });
      if (hasExists === null) {
        res.writeHead(400);
        return res.end(JSON.stringify({ error: "user doesn't exist" }));
      }

      res.writeHead(200, {
        "set-cookie": `_client-key=${clientToken}; max-age=259200`,
      });
      return res.end(
        JSON.stringify({ success: "The user exist", name: hasExists.name })
      );
    })();
  });
}
