import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { connectToDatabase } from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export async function getStaticPaths() {
  const { db } = await connectToDatabase();
  const albums = await db.collection('albums').find({}).toArray();
  const paths = albums.map(album => {
    return { params: { id: album._id.toString() } };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { db } = await connectToDatabase();
  const album = await db
    .collection('albums')
    .findOne({ _id: new ObjectId(params.id) });
  return { props: { album: { ...album, _id: album._id.toString() } } };
}

export default function AlbumByIdPage({ album }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: '400px',
        margin: '20px auto',
      }}
    >
      <div
        style={{ width: '200px', height: '200px', border: 'solid black 2px' }}
      >
        <Image src={album.image} width='200px' height='200px' />
      </div>
      <p>{album.name}</p>
      <h3>{album.artist}</h3>
      <p>{album.year}</p>
      <Link href='/music'>
        <a>Go Back!</a>
      </Link>
    </div>
  );
}
