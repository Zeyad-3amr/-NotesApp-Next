import React from 'react';

const Footer = () => {
  return (
    // <div className="flex justify-center items-center bg-green-500 h-11 border-t-2">
    <footer className="bg-green-600 text-white h-[calc(100vh-90vh)] flex items-center justify-center border-t-2">
      <button className=" text-slate-700 hover:text-white  rounded  mt-2 transition duration-30 ease-in-out tracking-wide">
        Logout
      </button>
      {/* </div> */}
    </footer>
  );
};

export default Footer;
