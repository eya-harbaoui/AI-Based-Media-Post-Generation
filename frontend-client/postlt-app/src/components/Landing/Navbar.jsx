import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = ({ logo, menuItems, cta }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleCTAClick = () => {
    if (cta && cta.onClick) {
      cta.onClick();
    }
  };

  const handleAnchorClick = (e, anchor) => {
    e.preventDefault();
    setToggleMenu(false);

    // Get the target section
    const targetSection = document.querySelector(anchor);
    if (targetSection) {
      // Smooth scroll to the section
      targetSection.scrollIntoView({ behavior: "smooth" });

      // Update URL with the anchor
      window.history.pushState(null, "", anchor);
    }
  };

  return (
    <nav className="relative container mx-auto p-6 ">
      {/* Flex Container */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="pt-2 w-28 md:w-40">
          <img src={logo} alt="Company Logo" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden space-x-6 md:flex font-semibold">
          {menuItems.map((item) => (
            <span key={item.label}>
              {item.onClick ? (
                <button
                  type="button"
                  className="hover:text-gray-900"
                  onClick={() => {
                    item.onClick();
                    setToggleMenu(false);
                  }}
                >
                  {item.label}
                </button>
              ) : item.path.startsWith("#") ? (
                <a
                  href={item.path}
                  className="hover:text-gray-900"
                  onClick={(e) => handleAnchorClick(e, item.path)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  to={item.path}
                  className="hover:text-gray-900"
                  onClick={() => setToggleMenu(false)}
                >
                  {item.label}
                </Link>
              )}
            </span>
          ))}
        </div>

        {/* Call-to-Action Button */}
        {cta && (
          <button
            type="button"
            className="hidden md:block p-3 px-6 text-white bg-[#28AA4A] rounded-full hover:bg-green-700 transition font-semibold"
            onClick={handleCTAClick}
          >
            {cta.label}
          </button>
        )}

        {/* Mobile Menu Button */}
        <button
          onClick={() => setToggleMenu(!toggleMenu)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={toggleMenu}
        >
          {toggleMenu ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          toggleMenu ? "translate-x-0" : "translate-x-full"
        } md:hidden z-50`}
      >
        <div className="flex flex-col h-full">
          {/* Close Button */}
          <button
            onClick={() => setToggleMenu(false)}
            className="self-end p-6"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>

          {/* Menu Items - Properly Centered */}
          <div className="flex flex-col items-center justify-center flex-grow gap-6 font-semibold">
            {menuItems.map((item) => (
              <span key={item.label}>
                {item.onClick ? (
                  <button
                    type="button"
                    className="hover:text-gray-900"
                    onClick={() => {
                      item.onClick();
                      setToggleMenu(false);
                    }}
                  >
                    {item.label}
                  </button>
                ) : item.path.startsWith("#") ? (
                  <a
                    href={item.path}
                    className="hover:text-gray-900 "
                    onClick={(e) => handleAnchorClick(e, item.path)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    className="hover:text-gray-900 "
                    onClick={() => setToggleMenu(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </span>
            ))}
            {cta && (
              <button
                type="button"
                className="text-white bg-[#28AA4A] px-6 py-2 rounded-full hover:bg-green-700 transition mt-4"
                onClick={() => {
                  handleCTAClick();
                  setToggleMenu(false);
                }}
              >
                {cta.label}
              </button>
            )}
          </div>

          {/* Add empty space at bottom for balance */}
          <div className="h-16"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
