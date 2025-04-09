import { clientToken } from "../../jwt.js";
export async function handleClientSign(model, req, res) {
  let body = "";
  req.on("data", (data) => {
    body += data;
  });
  req.on("end", async () => {
    const isObj = JSON.parse(body);
    if (
      !Object.hasOwn(isObj, "name") ||
      !Object.hasOwn(isObj, "email") ||
      !Object.hasOwn(isObj, "password")
    ) {
      res.writeHead(400);
      return res.end(JSON.stringify({ error: "Missing Request Body" }));
    }
    const { name, email, password } = isObj;
    const testName = /^[0-9A-Za-z ]*$/.test(name);
    const testEmail = /^[0-9A-Za-z]*@gmail\.com$/.test(email);
    const testPassword = /^[0-9A-Za-z]*$/.test(password);
    if (!testName || !testEmail || !testPassword) {
      res.writeHead(400);
      return res.end(JSON.stringify({ error: "Invalid Request Body" }));
    }
    const hasExists = await model.exists({
      $or: [
        { name: { $regex: new RegExp(`^${name.trim()}`, "i") } },
        { email: { $regex: new RegExp(`^${email}`, "i") } },
      ],
    });

    if (hasExists !== null) {
      res.writeHead(400);
      return res.end(JSON.stringify({ error: "name or email already exists" }));
    }
    const isId = await model.estimatedDocumentCount();
    const toInsert = new model({
      id: isId ? isId + 1 : 1,
      name: name.trim(),
      email: email,
      password: password,
      date: new Date(),
    });
    const isSaved = await toInsert.save();
    if (!isSaved) {
      res.writeHead(500);
      return res.end(JSON.stringify({ error: "Server failed to create user" }));
    }

    res.writeHead(200, {
      "set-cookie": `_client-key=${clientToken}; max-age=259200`,
    });
    return res.end(JSON.stringify({ success: "user created" }));
  });
}
