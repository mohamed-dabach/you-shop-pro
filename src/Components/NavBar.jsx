import  { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/kayuu-Logo-dark.svg';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className=" p-3 shadow-lg bg-white">
      <div className="container mx-auto flex max-w-[1440px] flex-col lg:flex-row justify-start relative lg:justify-between ">

        {/* Logo */}
        <a href="#" className="text-black w-fit font-bold flex ">
          <img src={logo} alt="Logo" className='h-6 w-auto inline-block mr-2 ' />
        </a>

        {/*  Menu for Small Screens */}
        <div className='lg:hidden absolute right-0'>
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
        <ul  className={` mx-4 mt-3  lg:m-0 lg:items-center gap-3 flex-col lg:flex-row ${menuOpen ? ' flex' : ' hidden'}`}>

          <li ><Link to={'/'} className="text-black no-underline hover:text-primary">Home</Link></li>
          <li ><Link to={'/products'} className="text-black no-underline hover:text-primary">Products</Link></li>
          <li ><Link to={'/rooms'} className="text-black no-underline hover:text-primary">Rooms</Link></li>
          <li ><Link to={'/about'} className="text-black no-underline hover:text-primary">About Us</Link></li>
          <li ><Link to={'/contact'} className="text-black no-underline hover:text-primary">Contact Us</Link></li>
         
        
          <li>
            <a href="no" className="hidden  text-primary hover:text-gray-300 lg:flex items-center">
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
          </li> </ul>
      

         {/* Hamburger Menu for Small Screens */}
         {/* <div className={`lg:hidden py-8 ${menuOpen ? 'block' : 'hidden'}`}>
          <ul className="text-black">
            <li><Link to={'/'} className="text-black no-underline hover:text-primary">Home</Link></li>
            <li><Link to={'/products'} className="text-black no-underline hover:text-primary">Products</Link></li>
            <li><Link to={'/rooms'} className="text-black no-underline hover:text-primary">Rooms</Link></li>
            <li><a href="no" className="block py-2 hover:text-primary">About Us</a></li>
            <li><a href="no" className="block py-2 hover:text-primary">Contact Us</a></li>
          </ul>
        </div> */}
      </div>
    </nav>
  );
};

export default NavBar;
