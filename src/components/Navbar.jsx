import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header bg-transparent">
      <NavLink
        to="/"
        className="w-40 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text text-3xl ">KARTHIK</p>
      </NavLink>

      {/* Navbar Links (Desktop View) */}
      <nav className="flex gap-7 font-medium lg:flex hidden">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-bold text-2xl"
              : "bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text font-bold text-2xl"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/resume"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-bold text-2xl"
              : "bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text font-bold text-2xl"
          }
        >
          Resume
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-bold text-2xl"
              : "bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text font-bold text-2xl"
          }
        >
          Contact
        </NavLink>
      </nav>

      {/* Hamburger Menu for Mobile View */}
      <div className="lg:hidden flex justify-between items-center w-full p-4">
        {/* Hamburger Button - Positioned Top Right */}
        <button
          onClick={toggleMenu}
          className="text-2xl text-blue-500 focus:outline-none absolute top-6 right-4"
        >
          ☰
        </button>

        {isMenuOpen && (
          <div className="absolute top-0 left-0 right-0 bg-transparent p-4 flex flex-col items-end mt-12"> {/* Added margin-top to create space */}
            <NavLink
              to="/about"
              onClick={() => setIsMenuOpen(false)} // Hide menu after clicking
              className="block text-blue-500 text-xl py-2" // Remove bold text in mobile view
            >
              About
            </NavLink>
            <NavLink
              to="/resume"
              onClick={() => setIsMenuOpen(false)} // Hide menu after clicking
              className="block text-blue-500 text-xl py-2" // Remove bold text in mobile view
            >
              Resume
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setIsMenuOpen(false)} // Hide menu after clicking
              className="block text-blue-500 text-xl py-2" // Remove bold text in mobile view
            >
              Contact
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
