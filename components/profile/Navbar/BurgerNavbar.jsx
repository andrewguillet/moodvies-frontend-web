import { useRouter } from "next/router";
import { useState } from "react";

import NavLink from "../../common/NavLink";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

export default function BurgerNavbar() {
  const router = useRouter(); // Using Next.js useRouter hook for navigation

  // Function to navigate to the mood page
  function handleHome() {
    router.push(`/mood`);
  }

  const [showModalSettings, setShowModalSettings] = useState(false); // State to manage the visibility of the settings modal
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage the visibility of the burger menu

  return (
    <>
      <div className="flex items-center justify-between z-50 px-6 w-full">
        {/* Logo and home navigation */}
        <div className="flex flex-col justify-between items-center">
          <Image
            src="/home/Logo-moodvie-letter.svg"
            alt="logo-moodvie"
            className="cursor-pointer ml-10"
            width={80}
            height={80}
            onClick={() => handleHome()} // Navigate to home on click
          />
        </div>

        {/* Burger menu icon */}
        <div className="flex items-center ">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <FaTimes className="text-white size-10" />
            ) : (
              <FaBars className="text-white size-10" />
            )}
          </button>
        </div>
      </div>

      {/* Burger menu dropdown */}
      {isMenuOpen && (
        <div className="absolute flex flex-col items-center bg-gray-800 text-white w-full py-2">
          <NavLink
            href="/profile/informations"
            activeClassName="text-white p-2"
            nonActiveClassName="text-slate-500 p-2"
            onClick={() => setIsMenuOpen(false)} // Close menu on link click
          >
            Informations personnelles
          </NavLink>
          <NavLink
            href="/profile/history"
            activeClassName="text-white p-2"
            nonActiveClassName="text-slate-500 p-2"
            onClick={() => setIsMenuOpen(false)} // Close menu on link click
          >
            Historique
          </NavLink>
          <NavLink
            href="/profile/platforms"
            activeClassName="text-white p-2"
            nonActiveClassName="text-slate-500 p-2"
            onClick={() => setIsMenuOpen(false)} // Close menu on link click
          >
            Plateformes préférées
          </NavLink>
          <div className="flex justify-center mt-4"></div>
        </div>
      )}
    </>
  );
}
