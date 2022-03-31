import { connectToDatabase } from '../../../lib/mongodb';
import { connectToDatabase2 } from '../../../lib/mongodb2';

// THIS WAS FOR UPDATING THE CREATIVES WORKSHOP SADHANA FROM THE DB
// export default async function handler(req, res) {
//   if (req.method === 'GET') {
//     try {
//       const { db2 } = await connectToDatabase2();
//       const dailies = await db2.collection('dailies').find({}).toArray();
//       const { db } = await connectToDatabase();
//       const response = await db
//         .collection('sadhanas')
//         .updateOne(
//           { slug: 'creatives-workshop-dailes' },
//           { $set: { buildingBlocks: dailies } }
//         );
//       // console.log('the response from the server is: ', response);
//       res.json({ message: 'YIIIIIAJU!!' });
//     } catch (error) {
//       console.log('There was a fucking error!', error);
//     }
//   }
// }

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      console.log('the elements of this sadhana are: ', req.body.elements);
      const { db } = await connectToDatabase();
      const response = await db
        .collection('sadhanas')
        .updateOne(
          { slug: 'tosf-season1-last-sprint' },
          { $set: { buildingBlocks: req.body.elements } }
        );
      res.json({ message: 'YIIIIIAJU!!' });
    } catch (error) {
      console.log('There was a fucking error!', error);
    }
  }
}
