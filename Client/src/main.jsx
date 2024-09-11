import React from 'react';
import { createRoot } from 'react-dom/client';
import { ClerkProvider, RedirectToSignIn } from '@clerk/clerk-react'; // Import ClerkProvider and other required components
import { dark } from '@clerk/themes'; // Import the desired Clerk theme
import './index.css'; // Global styles
import App from './App';


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  console.error('Clerk publishable key is missing. Please check your .env file.');
  throw new Error('Clerk publishable key is missing.');
}

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ClerkProvider
    publishableKey={PUBLISHABLE_KEY}
    appearance={{
      baseTheme: dark, // Apply the dark theme or any other theme you prefer
    }}
    afterSignOutUrl="/" // Redirect URL after sign-out
  >
    <App />
  </ClerkProvider>
);
