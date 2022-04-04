import { connectToDatabase } from '../../../lib/mongodb';

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  if (req.method === 'GET') {
    const episodes = await db.collection('podcast').find({}).toArray();
    res.json({ podcasts: episodes });
  }
  if (req.method === 'POST') {
    const response = await db.collection('podcast').insertOne(req.body);
    console.log(
      'the response after adding the episode to the db is: ',
      response
    );
    res.json({
      message: 'The episode was successfully added to the db',
      success: true,
    });
  }
}
