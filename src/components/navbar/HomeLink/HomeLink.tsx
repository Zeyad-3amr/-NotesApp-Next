import Link from 'next/link';
import React from 'react';

const HomeLink = () => {
  return (
    <div className=" flex border-r border-slate-700  pr-2 mx-1 my-2 ">
      <Link
        href="/"
        className=" self-end shadow-sm shadow-slate-900  text-white hover:bg-slate-700 transition duration-30 ease-in-out p-2 rounded-md bg-slate-900"
      >
        Home
      </Link>
    </div>
  );
};

export default HomeLink;
