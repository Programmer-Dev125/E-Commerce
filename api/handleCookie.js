export async function handleCookie(req, res, token) {
  const cookie = req.headers.cookie;
  if (!cookie) {
    res.writeHead(401, {
      "www-authenticate": "Bearer realm='Missing Authentication Token'",
    });
    return res.end(JSON.stringify({ error: "Login First" }));
  }
  const isToken = cookie.split("=")[1];

  try {
    token(isToken);
    return true;
  } catch (err) {
    res.writeHead(403, {
      "www-authenticate": "Bearer realm='Invalid Authentication Key'",
    });
    return res.end(JSON.stringify({ error: "Invalid Authentication Key" }));
  }
}
