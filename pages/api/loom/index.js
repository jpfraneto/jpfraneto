const { connectToDatabase } = require('../../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
  if (req.method === 'GET') {
    let { db } = await connectToDatabase();
    const looms = await db.collection('looms').find({}).toArray();
    console.log('the looms are: ', looms);
    res.json({ looms });
  }
  if (req.method === 'POST') {
    console.log('inside the post route', req.body);
    let { db } = await connectToDatabase();
    const response = await db.collection('looms').insertOne(req.body);
    return res.json(response);
  }
}
