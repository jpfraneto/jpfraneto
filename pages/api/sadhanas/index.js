import { connectToDatabase } from '../../../lib/mongodb';

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      const { db } = await connectToDatabase();
      const sadhanas = await db.collection('sadhanas').find({}).toArray();
      console.log('INSIDE THE GET ROUTE', sadhanas);
      return res.json({ 1234: 425 });
    case 'POST':
      return console.log('INSIDE THE POST ROUTE', req.body);
  }
}
