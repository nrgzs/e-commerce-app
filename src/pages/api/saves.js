
export default async function handle(req, res, next) {
  const productId = req.body.productId;
  console.log(req.body);
  const { products } = await import('../../../data/products.json');
  const product = products.find((p) => p.id === productId);
  res.json(product);
}