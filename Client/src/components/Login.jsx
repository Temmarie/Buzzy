import React from 'react';
import { SignIn } from '@clerk/clerk-react';

const SignInPage = () => (
  <div className="signin-container">
    <h1>Sign In</h1>
    <SignIn path="/sign-in" routing="path" />
  </div>
);

export default SignInPage;