import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react'; // Import Clerk components
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import SignInPage from './components/Login';
import SignUpPage from './components/SignUp';
import HomePage from './components/HomePage';
import Layout from './components/Layout';
import './index.scss';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Root Route for HomePage */}
          <Route
            path="/"
            element={
              <>
                {/* If the user is signed in, redirect them to the dashboard */}
                <SignedIn>
                  <Navigate to="/dashboard" />
                </SignedIn>
                
                {/* If the user is signed out, show the HomePage */}
                <SignedOut>
                  <HomePage />
                </SignedOut>
              </>
            }
          />

          {/* Protected Routes - Only authenticated users can access */}
          <Route
            path="/dashboard"
            element={
              <SignedIn>
                <Dashboard />
              </SignedIn>
            }
          />
          <Route
            path="/profile"
            element={
              <SignedIn>
                <Profile />
              </SignedIn>
            }
          />

          {/* Redirect non-signed-in users to the sign-in page when trying to access protected routes */}
          <Route
            path="/dashboard"
            element={
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            }
          />

          {/* Authentication Routes */}
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
