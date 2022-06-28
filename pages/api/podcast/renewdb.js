import { connectToDatabase } from '../../../lib/mongodb';

const dummyepisodes = [
  {
    name: 'Ignacia Sanhueza',
    country: 'Chile',
    language: 'Español',
    email: 'ignacia.sanhuezac@gmail.com',
    album: 'Mammal Hands - Floa [2016]',
    thoughts: 'Wow!',
    status: 'present',
  },
  {
    name: 'Diana Vergara',
    country: 'Chile',
    language: 'Español',
    email: 'diana@gmail.com',
    album: 'Ravi Shankar - Chants of India [1997]',
    thoughts: 'Wow!',
    status: 'future',
  },
  {
    name: 'Felipe Franetovic',
    country: 'Chile',
    language: 'Español',
    email: 'ffraneto@gmail.com',
    album: 'Death - The sound of Perseverance [1998]',
    thoughts: 'Wow!',
    status: 'future',
  },
  {
    name: 'Sergio Mascareño',
    country: 'Chile',
    language: 'Español',
    email: 'sergio@gmail.com',
    album: 'Pink Floyd - The Dark Side Of The Moon [1998]',
    thoughts: 'Wow!',
    status: 'future',
  },
];

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  if (req.method === 'GET') {
    await db.collection('podcast').drop();
    const response = await db.collection('podcast').insertMany(dummyepisodes);
    res.json({ 123: 456 });
  }
}
