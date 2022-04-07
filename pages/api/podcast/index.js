import { connectToDatabase } from '../../../lib/mongodb';

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  if (req.method === 'GET') {
    const episodes = await db.collection('podcast').find({}).toArray();
    res.json({ podcasts: episodes });
  }
  if (req.method === 'POST') {
    const matchedPodcast = await db
      .collection('podcast')
      .findOne({ email: req.body.newPodcast.email });
    if (matchedPodcast)
      return res.json({
        message: `There is already a recommendation associated with that email: ${matchedPodcast.album}`,
      });
    const response = await db
      .collection('podcast')
      .insertOne(req.body.newPodcast);
    res.json({
      message: 'The episode was successfully added to the db',
      success: true,
    });
  }
}
