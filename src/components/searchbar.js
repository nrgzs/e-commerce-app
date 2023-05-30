import Image from "next/image";
import search from './../../public/search.svg';

export default function SearchBar (){
    return (
      <>
        <div className="flex">
          <input type="text" className="rounded-full hover:shadow-md active:shadow-md outline-none p-0.5" />
          <button>
            <Image src={search} alt="search icon" width={40} className="-ml-6 z-10"></Image>
          </button>
        </div>
      </>
    );
}