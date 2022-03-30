import { connectToDatabase } from '../../../lib/mongodb';
import { connectToDatabase2 } from '../../../lib/mongodb2';

export default async function handler(req, res) {
  console.log('the request is: ', req);
  if (req.method === 'GET') {
    console.log('INSIDE THE GET ROUTE!');
  }
}
