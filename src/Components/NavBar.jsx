import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/kayuu-Logo-dark.svg";



const NavBar = ({handleClick}) => {
 

  const [menuOpen, setMenuOpen] = useState(false);

  return (<>
 
    <nav className=" p-3 px-10 shadow-lg bg-white">
      <div className="container mx-auto flex max-w-[1440px] flex-col md:flex-row justify-start relative md:justify-between ">
        <Link to={"/"} className="text-black w-fit font-bold flex ">
          <img
            src={logo}
            alt="Logo"
            className="h-6 w-auto inline-block mr-2 "
          />
        </Link>

        <div className="md:hidden absolute right-0">
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

        <ul
          className={` mx-4 mt-3 md:flex  md:m-0 md:items-center gap-3 flex-col md:flex-row ${
            menuOpen ? "" : "hidden"
          }`}
        >
          <li>
            <Link
              to={"/"}
              className="text-black no-underline hover:text-primary"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/products"}
              className="text-black no-underline hover:text-primary"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to={"/rooms"}
              className="text-black no-underline hover:text-primary"
            >
              Rooms
            </Link>
          </li>
          <li>
            <Link
              to={"/about"}
              className="text-black no-underline hover:text-primary"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to={"/contact"}
              className="text-black no-underline hover:text-primary"
            >
              Contact Us
            </Link>
          </li>
          <li className="ms-3">
          <button onClick={handleClick} className="hidden  text-primary relative hover:text-gray-300 md:flex items-center">
              <div className="absolute text-semi-black font-semibold top-[-5px] left-[-10px] bg-primary flex justify-center items-center p-0 m-0 w-5 h-5 text-[12px] rounded-2xl">
                22
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </nav>
    </>
  );
};


export default NavBar;
