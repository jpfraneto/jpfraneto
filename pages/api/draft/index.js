import { connectToDatabase } from '../../../lib/mongodb';

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  if (req.method === 'POST') {
    try {
      const newElement = { ...req.body.publishable };
      delete newElement['dbname'];
      const response = await db
        .collection(req.body.publishable.dbname)
        .insertOne(newElement);
      console.log('the response is: ', response);
      return res.json({
        message: `The element was added to the database ${req.body.publishable.dbname}`,
        success: response.acknowledged,
        id: response.insertedId,
      });
    } catch (error) {
      return res.json({ message: 'There was an error' });
    }
  }
}
