import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './components/Home.jsx';
import About from './components/About';

function App() {
  return (
    <div className="app">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <Home />
          <About />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;