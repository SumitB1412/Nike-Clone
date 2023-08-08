import React, { useState } from "react";
import {BsChevronDown,BsChevronUp} from "react-icons/bs";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="px-4 py-2 rounded-md focus:outline-none focus:shadow-outline flex items-center"
        onClick={toggleDropdown}
      >
        Sort By {isOpen ? <BsChevronUp/> : <BsChevronDown/>}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg">
          <a href="/" className="block px-4 py-2 text-gray-800">
            Option 1
          </a>
          <a href="/" className="block px-4 py-2 text-gray-800">
            Option 2
          </a>
          <a href="/" className="block px-4 py-2 text-gray-800">
            Option 3
          </a>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
