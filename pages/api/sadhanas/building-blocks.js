import { connectToDatabase } from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  let responseForSending = {
    message: '',
    success: null,
    _id: '',
  };
  switch (req.method) {
    case 'POST':
      try {
        const response = await db
          .collection('sadhanas')
          .updateOne(
            { _id: new ObjectId(req.body.id) },
            { $push: { buildingBlocks: req.body.newBuildingBlock } }
          );
        responseForSending = {
          message:
            'The sadhana was successfully updated with the new building block',
          success: true,
        };
        return res.json({ response: responseForSending });
      } catch (error) {
        responseForSending = {
          message:
            'There was an error adding the sadhanas building block to the DB',
          error,
          success: false,
        };
      }
  }
}
