import './globals.css';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import Header from './components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Buzzy',
  description: 'Buzz buzz chat app',
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang='en'>
        <body className={`${inter.className} bg-gradient-to-b from-start to-end text-lavender`}>
          <Header />
          <main className='container mx-auto'>
            <div className='flex items-start justify-center min-h-screen'>
              <div className='mt-20 bg-dark-bg rounded-lg shadow-glow p-6'>
                {children}
              </div>
            </div>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
