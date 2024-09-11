import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';


const Header = () => {
  const { user } = useUser();

  return (
    <nav className='flex items-center justify-between px-6 py-4 mb-5 bg-dark-bg shadow-glow rounded-lg'>
      <div className='flex items-center'>
        <Link to='/'>
          <div className='text-lg font-bold text-lavender uppercase'>
            Buzzy
          </div>
        </Link>
      </div>
      <div className='flex items-center text-muted-gray'>
        {!user && (
          <>
            <Link
              to='/sign-in'
              className='text-lavender hover:text-neon-purple mr-4'
            >
              Sign In
            </Link>
            <Link
              to='/sign-up'
              className='text-lavender hover:text-neon-purple mr-4'
            >
              Sign Up
            </Link>
          </>
        )}
        {user && (
          <>
            <Link
              to='/profile'
              className='text-lavender hover:text-neon-purple mr-4'
            >
              Profile
            </Link>
            <button
              onClick={() => {
                // Add your sign-out logic here
              }}
              className='text-lavender hover:text-neon-purple'
            >
              Sign Out
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;