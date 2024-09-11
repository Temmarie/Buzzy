import React from 'react';
import { SignUp } from '@clerk/clerk-react';

const SignUpPage = () => (
  <div className="signup-container">
    <h1>Register Your Account</h1>
    <SignUp path="/sign-up" routing="path" />
  </div>
);

export default SignUpPage;