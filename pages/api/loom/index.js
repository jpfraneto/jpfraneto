export default function handler(req, res) {
  if (req.method === 'POST') {
    console.log('INSIDE THE POST ROUTE!');
    console.log(req.body);
    //ADD VIDEO TO DB
    return res.json({ 123: 456 });
  }
}
