import React from 'react';

const NewNote = () => {
  return (
    <div className="bg-slate-600 rounded-lg shadow-lg shadow-green-700  h-[calc(80vh)] m-7 w-[calc(70vh)] self-center flex flex-col p-5 justify-between ">
      <textarea className="w-[calc(100%)] h-[calc(90%)] bg-slate-800 self-center resize-none rounded-md shadow-sm shadow-black outline-none p-4 text-lg "></textarea>

      <div className="flex self-center   ">
        <div className="self-center ml-2 flex">
          <p>Enter Title:</p>
          <input className="ml-1 outline-none px-1 text-white bg-slate-800 rounded-md mr-2"></input>
        </div>
        <div className="self-center border-l border-r-slate-900 ">
          <button className=" self-end align shadow-md ml-2 shadow-slate-900  text-white hover:bg-green-800  transition duration-30 ease-in-out p-2 rounded-md bg-green-600">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewNote;
