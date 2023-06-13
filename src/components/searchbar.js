import Image from 'next/image';
import search from './../../public/search.svg';
import { useState } from 'react';

export default function SearchBar() {
  const [toggle,settoggle]=useState(false)
  return (
    <>
      <div className="flex gap-2 ">
      
        <input 
          type="text"
         className={toggle? "mt-4 w-20 h-8  rounded-full shadow-sm hover:shadow-md focus:shadow-xl focus:2xl:w-48 overflow-hidden outline-none p-0.5":'hidden '}
        />
        <div className="w-16 h-16">
          <button
            onClick={() => {
              settoggle((prev) => !prev);
            }}
            className="h-full"
          >
            <Image
              src={search}
              alt="search icon"
              width={36}
              className=""
            ></Image>
          </button>
        </div>
      </div>
    </>
  );
}
