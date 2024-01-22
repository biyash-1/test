import React from 'react';
import burger from './burger.jpg';

export default function Tailblocks() {
  return (
    <>
      <div className="flex justify-center bg-black ">
        <nav className="self-center w-full max-w-7xl">
          <div className="flex flex-col lg:flex-row justify-around items-center text-white">
            <h1 className="uppercase pl-5 py-4 text-lg font-sans font-bold">hero</h1>
            <ul className="hidden lg:flex items-center text-[18px] font-semibold pl-32">
              <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                <a href="#">Home</a>
              </li>
              <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                <a href="#">Contact</a>
              </li>
              <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                <a href="#">Services</a>
              </li>
              <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                <a href="#">About</a>
              </li>
              <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                <a href="#">Pricing</a>
              </li>
            </ul>
            {/* ... social media icons ... */}
          </div>
        </nav>
      </div>
      <div className="flex justify-center bg-black p-8 h-screen">
        <div className="flex flex-col justify-center max-w-7xl w-full h-screen">
          <div className="flex flex-col lg:flex-row items-center space-y-3 lg:space-y-0 lg:space-x-6 p-2">
            <div className="flex flex-col text-white md:items-start items-center justify-between space-y-3 px-8 md:w-1/2">
              <div className="text-5xl text-red-700 md:text-7xl font-bold mr-72">Get the Best Burger </div>
              <div className="text-lg uppercase md:text-3xl">Interactive Components</div>
              <div className="text-xl md:text-3xl">@tailblocks.org</div>
            </div>
            <div className="md:w-60 w-28  md:h-96 overflow-hidden rounded-xl h-screen">
              <img src={burger} className="h-auto max-w-full" alt="Burger" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
