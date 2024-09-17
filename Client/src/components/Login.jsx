import React from 'react';
import { SignIn } from '@clerk/clerk-react';

const SignInPage = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-center">
      <h1 className="mb-4 text-2xl font-bold">Sign In</h1>
      <SignIn path="/sign-in" routing="path" />
    </div>
  </div>
);

export default SignInPage;