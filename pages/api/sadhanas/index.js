import { connectToDatabase } from '../../../lib/mongodb';

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  let responseForSending = {
    message: '',
    success: null,
    _id: '',
  };
  switch (req.method) {
    case 'GET':
      const sadhanas = await db.collection('sadhanas').find({}).toArray();
      console.log('the found sadhanas are: ', sadhanas);
      return res.json(sadhanas);
    case 'POST':
      try {
        const response = await db
          .collection('sadhanas')
          .insertOne(req.body.newSadhana);
        responseForSending = {
          message: 'The sadhana was successfully added to the DB',
          success: true,
          _id: response.insertedId,
        };
        return res.json({ response: responseForSending });
      } catch (error) {
        responseForSending = {
          message: 'There was an error adding the sadhana to the DB',
          error,
          success: false,
        };
      }
  }
}
