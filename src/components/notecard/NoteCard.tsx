'use client';
import React from 'react';
import NoteModal from '../notemodal/NoteModal';

const NoteCard = () => {
  return (
    <div className="w-[calc(20.333%-1rem)]  flex-col  p-2 align-middle  ">
      <div className="rounded-md border border-green-800 bg-slate-700 p-4 shadow-lg shadow-slate-950 ">
        <h2 className="mb-1 text-xl font-bold tracking-wider ">Title</h2>

        <div className="bg-background  rounded-md h-38 p-1 shadow-md shadow-slate-950">
          <p className=" p-1 line-clamp-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur facere
            voluptatem ipsum. Numquam officia magnam iusto exercitationem, vel expedita
            deleniti nesciunt voluptatem ipsum. Numquam officia magnam
          </p>
        </div>
        <div className="flex gap-3">
          <NoteModal />
          <button className="self-end w-1/5 bg-red-600 hover:bg-red-800  rounded p-1 mt-2 transition duration-30 ease-in-out tracking-wide  ">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
