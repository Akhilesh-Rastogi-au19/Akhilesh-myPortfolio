import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll"

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Portfolio" },
    { id: 4, text: "Experience" },
    { id: 5, text: "Contact" },
  ];

  return (
    <nav className="w-full shadow-md ">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 bg-white text-black shadow-md fixed top-0 left-0 right-0-z-50 ">
        
        {/* Main Navbar */}
        <div className="h-16 flex justify-between items-center">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="/photo.avif"
              className="h-12 w-12 rounded-full object-cover"
              alt="Akhilesh"
            />

            <div>
              <h1 className="font-semibold text-xl cursor-pointer">
                Akhilesh
              </h1>

              <p className="text-xs text-gray-600">
                Web Developer
              </p>
            </div>
          </div>

          {/* Desktop Navbar */}
          <ul className="hidden md:flex items-center gap-8 font-semibold">
            {navItems.map(({ id, text }) => (
              <li
                key={id}
                className="cursor-pointer hover:text-red-700 hover:scale-105 transition duration-200"
                
              >

                <Link to={text}
                smooth = {true}
                duration={500}
                offset={-70}
                activeClass="active"
                >{text}</Link>
                
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenu(!menu)}
            className="md:hidden cursor-pointer"
            aria-label="Toggle menu"
          >
            {menu ? (
              <IoCloseSharp size={28} />
            ) : (
              <AiOutlineMenu size={28} />
            )}
          </button>
        </div>

        {/* Mobile Navbar */}
        {menu && (
          <div className="md:hidden border-t bg-white">
            <ul className="flex flex-col items-center gap-5 py-5 font-semibold">
              {navItems.map(({ id, text }) => (
                <li
                  key={id}
                  onClick={() => setMenu(false)}
                  className="cursor-pointer hover:text-red-700 transition duration-200"
                >
                <Link onClick={() => setMenu(!menu)}
                to={text}
                smooth = {true}
                duration={500}
                offset={-70}
                activeClass="active"
                >{text}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

