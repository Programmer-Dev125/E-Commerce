import { handleDb } from "../../app.js";
export async function handleContact(model, req, res) {
  let body = "";
  req.on("data", (data) => {
    body += data;
  });
  req.on("end", async () => {
    const isObj = JSON.parse(body);
    const testEmail = /^[0-9A-Za-z]*@gmail\.com$/.test(isObj.email);
    if (!testEmail) {
      res.writeHead(400);
      return res.end(JSON.stringify({ error: "Failed" }));
    }
    await handleDb();
    const hasEmailExists = await model.exists({ email: isObj.email });
    if (hasEmailExists !== null) {
      res.writeHead(400);
      return res.end(
        JSON.stringify({ error: "You've already sent mail using this email" })
      );
    }
    const isId = await model.estimatedDocumentCount();
    const toInsert = new model({
      id: isId + 1,
      email: isObj.email,
    });
    const isSaved = await toInsert.save();

    if (!isSaved) {
      res.writeHead(500);
      return res.end(JSON.stringify({ error: "Failed to send mail" }));
    }
    res.writeHead(200);
    return res.end(JSON.stringify({ success: "Mail Sent" }));
  });
}
