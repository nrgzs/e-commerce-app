export default async function handle(req, res, next) {
  const {data} = req.body;

 
  res.json(data);
}
