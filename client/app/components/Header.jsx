import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';

const Header = async ({ username }) => {
  const { userId } = auth();

  return (
    <nav className='flex items-center justify-between px-6 py-4 mb-5 bg-dark-bg shadow-glow rounded-lg'>
      <div className='flex items-center'>
        <Link href='/'>
          <div className='text-lg font-bold text-lavender uppercase'>
            Buzzy
          </div>
        </Link>
      </div>
      <div className='flex items-center text-muted-gray'>
        {!userId && (
          <>
            <Link
              href='sign-in'
              className='text-lavender hover:text-neon-purple mr-4'
            >
              Sign In
            </Link>
            <Link
              href='sign-up'
              className='text-lavender hover:text-neon-purple mr-4'
            >
              Sign Up
            </Link>
          </>
        )}
        {userId && (
          <Link href='profile' className='text-lavender hover:text-neon-purple mr-4'>
            Profile
          </Link>
        )}
        <div className='ml-auto'>
          <UserButton afterSignOutUrl='/' />
        </div>
      </div>
    </nav>
  );
};

export default Header;
