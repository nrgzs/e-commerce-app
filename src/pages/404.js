// pages/404.js
import React from 'react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-[85vh]">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-500">404 - Not Found</h1>
        <p className="text-gray-600 mt-4">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link
          className="border-2 border-black p-2 m-4 block hover:bg-teal-700 hover:text-slate-50 font-bold text-teal-700"
          href={'/'}
        >
          Return back
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
