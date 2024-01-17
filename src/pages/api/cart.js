const fs = require('fs');

export default async function handle(req, res, next) {
  const productId = req.body.productId;

  const { products } = await import('../../../data/products.json');
  const product = products.find((p) => p.id === productId);
  res.json(product);
}
