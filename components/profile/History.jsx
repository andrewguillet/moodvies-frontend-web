import React from "react";
import MoodCarousel from "./MoodCarousel";
import NavbarProfile from "./NavbarProfile";
import CollectionCarousel from "./CollectionCarousel";

function History() {
  return (
    <div className="w-screen h-screen bg-radial-gradient flex flex-col justify-around items-center">
      <div className="fixed top-7 h-[25%] w-full">
        <NavbarProfile />
        <div className="w-full flex flex-col items-center mt-10 md:flex-row md:justify-between md:items-end">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 to-fuchsia-900 text-5xl mb-4 md:mb-0 md:pl-20">
            Hello Louis
          </h1>
          <p className="text-white flex items-end pb-1 text-lg md:text-l md:pr-32 lg:text-xl">
            <span className="text-[#A759AD] mr-1">156h</span>de Moodage
          </p>
        </div>
      </div>

      <div className="w-full flex justify-center mt-60">
        <MoodCarousel />
      </div>
      <div className="w-[90%] md:w-[80%] h-[5%] flex justify-between border-b">
        <h2 className="text-white text-lg md:text-xl mb-3 ">Collection</h2>
        <h3 className="text-slate-300 text-sm md:text-l font-thin mb-3">last watched</h3>
      </div>
      <CollectionCarousel />
    </div>
  );
}

export default History

