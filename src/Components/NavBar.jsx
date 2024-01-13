import { useState } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className=" p-3 shadow-lg bg-white">
      <div className="container mx-auto flex flex-col lg:flex-row justify-start relative lg:justify-between">
        {/* Logo */}
        <a href="no" className="text-black font-bold flex w-fit ">
          <img
            src={"./kayuu-logo-dark.svg"}
            alt="Logo"
            className="h-6 w-auto inline-block mr-2"
          />
        </a>

        {/*  Menu for Small Screens */}
        <div className="lg:hidden absolute right-0">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`text-black focus:outline-none`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-auto h-6 mr-8 transition-transform duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Menu items for Large Screens */}
        <ul
          className={`hidden lg:flex space-x-4 m-0 lg:items-center ${
            menuOpen ? "hidden" : "block"
          }`}
        >
          <li>
            <a
              href="no"
              className="text-black no-underline hover:text-[#ffb703]" 
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="no"
              className="text-black no-underline hover:text-[#ffb703]"
            >
              Products
            </a>
          </li>
          <li>
            <a
              href="no"
              className="text-black no-underline hover:text-[#ffb703]"
            >
              Rooms
            </a>
          </li>
          <li>
            <a
              href="no"
              className="text-black no-underline hover:text-[#ffb703]"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="no"
              className="text-black no-underline hover:text-[#ffb703]"
            >
              Contact Us
            </a>
          </li>

          {/* Cart */}
          <li>
            <a
              href="no"
              className="text-[#ffb703] hover:text-gray-300 flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </a>
          </li>
        </ul>

        {/* Hamburger Menu for Small Screens */}
        <div className={`lg:hidden py-8 ${menuOpen ? "block" : "hidden"}`}>
          <ul className="text-black">
            <li>
              <a href="no" className="block py-2 hover:text-[#ffb703]">
                Home
              </a>
            </li>
            <li>
              <a href="no" className="block py-2 hover:text-[#ffb703]">
                Products
              </a>
            </li>
            <li>
              <a href="no" className="block py-2 hover:text-[#ffb703]">
                Rooms
              </a>
            </li>
            <li>
              <a href="no" className="block py-2 hover:text-[#ffb703]">
                About Us
              </a>
            </li>
            <li>
              <a href="no" className="block py-2 hover:text-[#ffb703]">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
