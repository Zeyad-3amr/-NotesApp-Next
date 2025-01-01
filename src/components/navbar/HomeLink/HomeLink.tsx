import Link from 'next/link';
import React from 'react';

const HomeLink = () => {
  return (
    <Link
      href="/"
      className=" self-end pb-1  text-slate-700  hover:text-white transition duration-30 ease-in-out"
    >
      Home
    </Link>
  );
};

export default HomeLink;
