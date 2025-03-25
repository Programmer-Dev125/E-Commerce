export async function handleFetch(model, res) {
  const products = await model.find({}, { _id: 0, __v: 0 });
  if (!products) {
    res.writeHead(500);
    res.end(JSON.stringify({ error: "Failed to fetch data from database" }));
    return;
  }

  res.writeHead(200);
  res.end(JSON.stringify(products));
}
