export async function handleGetCart(clmodel, prmodel, req, res) {
  const user = JSON.parse(req.headers["x-current-user"]);
  if (!user) {
    res.writeHead(400);
    return res.end(JSON.stringify({ error: "Invalid user" }));
  }
  const hasUser = await clmodel.findOne({ name: user.name, email: user.email });
  if (!hasUser) {
    res.writeHead(400);
    return res.end(JSON.stringify({ error: "Invalid user" }));
  }
  const products = await prmodel.find(
    {
      name: { $in: hasUser.cart },
    },
    { _id: 0, __v: 0, price: 0, img: 0, name: 0 }
  );
  if (products.length === 0) {
    res.writeHead(200);
    return res.end(JSON.stringify([]));
  }
  res.writeHead(200);
  return res.end(JSON.stringify(products));
}
