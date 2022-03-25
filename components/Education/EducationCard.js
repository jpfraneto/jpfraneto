import React from 'react';
import Link from 'next/link';

const EducationCard = ({ ed }) => {
  return (
    <Link href={`/${ed.slug}`} passHref>
      <div>{ed.name}</div>
    </Link>
  );
};

export default EducationCard;
