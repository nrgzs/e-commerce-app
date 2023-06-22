export default async function handle(req, res, next) {
  const {data} = req.body;
  console.log(data);
 
  res.json(data);
}
