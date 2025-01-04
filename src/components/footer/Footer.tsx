import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white h-[calc(10vh)] flex items-center justify-center border-t-2">
      <Link
        className=" shadow-sm  shadow-slate-900  text-white hover:bg-slate-700 transition duration-30 ease-in-out p-2 rounded-md bg-slate-900"
        href="/"
      >
        Logout
      </Link>
    </footer>
  );
};

export default Footer;
