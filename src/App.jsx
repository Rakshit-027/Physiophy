import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './components/Home.jsx';
import About from './components/About';
import Services from './components/Services.jsx';
import Contact from './components/Contact.jsx';
import Appointment from './components/Appointment.jsx';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import FAQ from './components/FAQ.jsx';

function App() {
  const [showAuth, setShowAuth] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowAuth(null);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="app">
      <Navbar 
        isLoggedIn={isLoggedIn} 
        onLogin={() => setShowAuth('signin')} 
        onLogout={handleLogout}
      />
      <AnimatePresence mode="wait">
        {showAuth ? (
          <motion.div
            key="auth"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50"
          >
            {showAuth === 'signin' ? (
              <SignIn 
                onClose={() => setShowAuth(null)}
                onSignUp={() => setShowAuth('signup')}
                onSuccess={handleLogin}
              />
            ) : (
              <SignUp 
                onClose={() => setShowAuth(null)}
                onSignIn={() => setShowAuth('signin')}
                onSuccess={handleLogin}
              />
            )}
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <Home />
            <About />
            <Services/>
            <Appointment/>
            <Contact/>
            <FAQ/>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
