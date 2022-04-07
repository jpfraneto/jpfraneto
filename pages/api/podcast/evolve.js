import { connectToDatabase } from '../../../lib/mongodb';

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  if (req.method === 'GET') {
    try {
      const presentEpisode = await db
        .collection('podcast')
        .findOne({ status: 'present' });
      console.log('the presentEpisode is: ', presentEpisode);
      const updateMessage = await db
        .collection('podcast')
        .updateOne({ status: 'present' }, { $set: { status: 'past' } });
      console.log('the present episode was sent to the past', updateMessage);
      const allFutureEpisodes = await db
        .collection('podcast')
        .find({ status: 'future' })
        .toArray();
      console.log('all the future episodes are: ', allFutureEpisodes);
      const length = allFutureEpisodes.length;
      const randomEpisode =
        allFutureEpisodes[Math.floor(length * Math.random())];
      console.log('the random episode is: ', randomEpisode);
      const anotherUpdate = await db
        .collection('podcast')
        .updateOne({ _id: randomEpisode._id }, { $set: { status: 'present' } });
      console.log('the episode was brought to the present! ', anotherUpdate);
      res.json({ message: 'Everything went well', success: true });
    } catch (error) {
      console.log(error);
      res.json({ message: 'There was an error!' });
    }
  }
}
