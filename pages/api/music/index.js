const { connectToDatabase } = require('../../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
  if (req.method === 'GET') {
    let { db } = await connectToDatabase();
    const albums = await db.collection('albums').find({}).toArray();
    return res.json(albums);
  }
}
