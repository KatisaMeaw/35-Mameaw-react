import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='flex justify-end bg-yellow-200 text-orange-500 gap-5 p-4'>
        <Link to="/">
          <span className="text-lg rounded-2xl font-semibold hover:text-orange-600 transition duration-300">Home</span>
        </Link>
        <Link to="Owner">
          <span className="text-lg rounded-2xl font-semibold hover:text-orange-600 transition duration-300">Owner</span>
        </Link>
    </nav>
  )
}

export default Navbar;