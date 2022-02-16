import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='text-3xl font-bold underline'>
      <Link href='/podcastintegration'>
        <a>Podcast Integration</a>
      </Link>
      <br />
      <Link href='/programminglogs'>
        <a>Programming Logs</a>
      </Link>
      <br />
      <Link href='/books'>
        <a>Books</a>
      </Link>
    </div>
  );
};

export default Navbar;
