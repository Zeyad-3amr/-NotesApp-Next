'use client';
import React from 'react';
import SearchBar from '@/components/navbar/SearchBar/SearchBar';
import HomeLink from '@/components/navbar/HomeLink/HomeLink';
import { usePathname } from 'next/navigation';
const NavList = () => {
  const path = usePathname();
  console.log(path);
  return (
    <div className="bg-green-600 flex justify-center border-b-2  ">
      <HomeLink />

      {path == '/' ? (
        <>
          <SearchBar />
        </>
      ) : (
        <p className="self-center text-slate-900 font-mono text-xl ">Create Your Note</p>
      )}
    </div>
  );
};

export default NavList;
