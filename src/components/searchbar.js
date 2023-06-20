import Image from 'next/image';
import search from './../../public/search.svg';
import { useRef, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';


export default function SearchBar() {
  const [toggle, settoggle] = useState(false);
const [searchQuery,setSearchQuery] = useState('')
const router = useRouter()

  
 async function handleSearch(e) {
    e.preventDefault();
   try {
     const res = await axios.get('api/srch', {
       params: { srchTxt: searchQuery },
     });
     const result = res.data;

     router.push(`/search?srchTxt=${searchQuery}`)
   } catch (error) {
    console.log(error);
   } 
   

   
  }
  return (
    <>
      <div className="flex gap-2 ">
        <form onSubmit={handleSearch}>
          <input
            value={searchQuery}
            onChange={(e)=>{setSearchQuery(e.target.value)}}
            type="text"
            placeholder='search...'
            className={
              toggle
                ? 'mt-4 w-20 h-8  rounded-full shadow-sm hover:shadow-md focus:shadow-xl focus:2xl:w-48 overflow-hidden outline-none p-0.5'
                : ''
            }
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
        </form>
      </div>
    </>
  );
}
