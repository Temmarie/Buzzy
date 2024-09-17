import React from 'react';
import { SignUp } from '@clerk/clerk-react';

const SignUpPage = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-center">
      <h3 className="mb-4 font-bold">Register Your Clerk App Account</h3>
      <SignUp path="/sign-up" routing="path" />
    </div>
  </div>
);

export default SignUpPage;