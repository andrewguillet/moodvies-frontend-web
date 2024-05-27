import LanguageSelect from "../common/LanguageSelect";
import { useRouter } from "next/router";
import { useState } from "react";
import { Setting } from "../common/Setting";
import NavLink from "../common/NavLink";


export default function NavbarProfile() {
  const router = useRouter(); // Using Next.js useRouter hook for navigation
  const [showModalSettings, setShowModalSettings] = useState(false); // State to manage the visibility of the settings modal

  // Function to navigate to the mood page
  function handleHome() {
    router.push(`/mood`);
  }

  return (
<<<<<<< HEAD
    <>
      <div className="flex items-center justify-between z-10 px-8 w-full">
        <div className="flex flex-col justify-between items-center">
          <img
            src="/home/Logo-moodvie-letter.svg"
            alt="logo-moodvie"
            className="size-20 cursor-pointer ml-10"
            onClick={() => handleHome()}
          />
        </div>
        <div className="border-b border-slate-100 flex justify-around w-1/2 ">
          <NavLink
            href="/profile/informations"
            activeClassName="text-white p-4"
            nonActiveClassName="text-slate-500 p-4"
          >
            Personnal Informations
          </NavLink>
          <NavLink
            href="/profile/history"
            activeClassName="text-white p-4"
            nonActiveClassName="text-slate-500 p-4"
          >
            History
          </NavLink>
          <NavLink
            href="/profile/platforms"
            activeClassName="text-white p-4"
            nonActiveClassName="text-slate-500 p-4"
          >
            Preferred Platforms
          </NavLink>
        </div>
=======
>>>>>>> c1f99c5eda3e5abc7c8c6640f2770a492a45ea27

        <div className="flex items-center justify-between z-10 px-6 w-full">
          {/* Logo and home navigation */}
          <div className="flex flex-col justify-between items-center">
            <img
              src="/home/Logo-moodvie-letter.svg"
              alt="logo-moodvie"
              className="size-20 cursor-pointer ml-10"
              onClick={() => handleHome()} // Navigate to home on click
            />
          </div>
  
          {/* Navigation links */}
          <div className="md:flex border-b border-slate-100 justify-around w-1/2 ">
            <NavLink
              href="/profile/informations"
              activeClassName="text-white p-4"
              nonActiveClassName="text-slate-500 p-4"
            >
              Personal Informations
            </NavLink>
            <NavLink
              href="/profile/history"
              activeClassName="text-white p-4"
              nonActiveClassName="text-slate-500 p-4"
            >
              History
            </NavLink>
            <NavLink
              href="/profile/platforms"
              activeClassName="text-white p-4"
              nonActiveClassName="text-slate-500 p-4"
            >
              Preferred Platforms
            </NavLink>
          </div>
          {/* Language selection and settings */}
          <div className="flex gap-4">
            <div className="flex items-center">
              <LanguageSelect /> {/* Language selection dropdown */}
            </div>
            <div
              className="flex items-center cursor-pointer"
              onClick={() => setShowModalSettings(!showModalSettings)} // Toggle settings modal
            >
              <Setting /> {/* Settings icon */}
            </div>
          </div>
        </div>
  );
}
