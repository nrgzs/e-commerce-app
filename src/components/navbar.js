import heart from './../../public/heart.svg';
import cart from './../../public/cart.svg';
import bars from './../../public/bars.svg';
import Image from 'next/image';
import { useRef, useState } from 'react';
import SearchBar from './searchbar';
import Link from 'next/link';

export default function Navbar() {
  const [booleanMenu, setbooleanMenu] = useState(false);

  function mobileButton() {
    setbooleanMenu((prev) => !prev);
    console.log(booleanMenu);
  }

  return (
    <div className="flex bg-slate-300 justify-between items-center gap-4 p-5 h-20">
      <div className="font-bold ">
        <h2>E-commerce App</h2>
      </div>
      <SearchBar />
      <nav>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div className="hidden md:flex items-center space-x-1">
                <a
                  href=""
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
                >
                  Services
                </a>
                <a
                  href=""
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
                >
                  About
                </a>
                <a
                  href=""
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
                >
                  Contact Us
                </a>
              </div>
            </div>

            <div className="md:hidden flex items-center">
              <button className="outline-none " onClick={mobileButton}>
                <Image
                  src={bars}
                  alt="bars icon"
                  className="w-6 h-6 text-gray-500 hover:text-blue-500"
                ></Image>
              </button>
            </div>
          </div>
        </div>

        <div
          className={
            booleanMenu ? 'absolute top-20 bg-slate-300 w-[200px]' : 'hidden'
          }
        >
          <ul className="">
            <li className="border-b-black">
              <a
                href="#services"
                className="block text-sm px-2 py-4 border-b-black border-b-2 hover:bg-blue-500 transition duration-300"
              >
                Services
              </a>
            </li>
            <li className="border-b-black">
              <a
                href="#about"
                className="block text-sm px-2 py-4 border-b-black border-b-2 hover:bg-blue-500 transition duration-300"
              >
                About
              </a>
            </li>
            <li className="border-b-black">
              <a
                href="#contact"
                className="block text-sm px-2 py-4 border-b-black border-b-2 hover:bg-blue-500 transition duration-300"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="flex p-5 justify-center content-center">
        <Image src={heart} alt="heart icon" width={37} height={37}></Image>

        <Image src={cart} alt="cart icon" width={50} height={50}></Image>
      </div>
    </div>
  );
}
