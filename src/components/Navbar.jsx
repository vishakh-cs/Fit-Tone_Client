import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuRounded } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import LogoImg from '../utils/Images/Logo.png';
import { useDispatch } from 'react-redux';
import {logout} from '../redux/reducers/UserSlice'

function Navbar({currentUser}) {
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <img className="block lg:hidden h-8 w-auto" src={LogoImg} alt="Fittrack" />
                <Link to="/" className="hidden lg:block">
                  <img className="h-8 w-auto" src={LogoImg} alt="FitTone" />
                </Link>
              </div>
              <div className="hidden lg:ml-6 lg:flex lg:space-x-4">
                <Link to="/" className="text-gray-900 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Dashboard</Link>
                <Link to="/workout" className="text-gray-900 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Workouts</Link>
                <Link to="/tutorials" className="text-gray-900 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Tutorials</Link>
                <Link to="/foods" className="text-gray-900 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Foods</Link>
               
              </div>
            </div>
            <div className="flex items-center">
              <Avatar />
              <div className="text-right ml-4">
                <button onClick={() => dispatch(logout())} className="text-secondary cursor-pointer text-lg font-semibold transition duration-300 ease-in-out hover:text-primary">Logout</button>
              </div>
              <div className="flex items-center lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <MenuRounded className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={isOpen ? "block" : "hidden"}> {/* Mobile Menu */}
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-gray-900 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium">Dashboard</Link>
            <Link to="/workout" className="text-gray-900 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium">Workouts</Link>
            <Link to="/tutorials" className="text-gray-900 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium">Tutorials</Link>
            <Link to="/Foods" className="text-gray-900 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium">Foods</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
