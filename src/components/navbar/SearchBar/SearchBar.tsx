'use client';

import React, { ChangeEvent } from 'react';
import HomeLink from '../HomeLink/HomeLink';

const SearchBar = () => {
  const handleTitleInput = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    console.log(event.target.value);
  };

  return (
    <>
      <div className="flex justify-center py-2 border-b-2 border-b-white ">
        <div className="border-r border-slate-700 pr-2 mx-1 flex">
          <HomeLink />
        </div>

        <div className="w-full max-w-sm min-w-[200px] relative pl-2 mt-">
          <label className="block mb-2 text-pretty text-slate-700 ">Search Note 📓</label>

          <div className="relative">
            <input
              type="email"
              className="w-full bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pr-3 pl-10 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Enter Note Title"
              onChange={handleTitleInput}
            />
            <button
              className="absolute left-1 top-1 rounded bg-slate-800 p-1.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default SearchBar;