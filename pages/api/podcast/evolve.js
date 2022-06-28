import { connectToDatabase } from '../../../lib/mongodb';

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  if (req.method === 'GET') {
    try {
      const presentEpisode = await db
        .collection('podcast')
        .findOne({ status: 'present' });
      const updateMessage = await db
        .collection('podcast')
        .updateOne({ status: 'present' }, { $set: { status: 'past' } });
      const allFutureEpisodes = await db
        .collection('podcast')
        .find({ status: 'future' })
        .toArray();
      const length = allFutureEpisodes.length;
      const randomEpisode =
        allFutureEpisodes[Math.floor(length * Math.random())];
      const anotherUpdate = await db
        .collection('podcast')
        .updateOne({ _id: randomEpisode._id }, { $set: { status: 'present' } });
      res.json({ message: 'Everything went well', success: true });
    } catch (error) {
      res.json({ message: 'There was an error!' });
    }
  }
}
