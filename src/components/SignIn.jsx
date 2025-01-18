import React, { useState } from 'react';
import { Mail, Lock, LogIn, ArrowRight, X } from 'lucide-react';
import './Auth.css';
import Logo from './Logo.png';

const SignIn = ({ onClose, onSignUp, onSuccess }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign in data:', formData);
    onSuccess();
  };

  return (
    <div className="auth-container" onClick={onClose}>
      <div className="auth-card" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          <X size={24} />
        </button>
        
        <div className="auth-header">
          <img src={Logo} alt="Logo" className="auth-logo" />
          <h1>Welcome Back!</h1>
          <p>Please sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label>
              <Mail size={20} className="input-icon" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              <Lock size={20} className="input-icon" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div className="form-options">
            <label className="remember-me">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              <span>Remember me</span>
            </label>
            <a href="#forgot-password" className="forgot-password">
              Forgot Password?
            </a>
          </div>

          <button type="submit" className="auth-button">
            <LogIn size={20} />
            <span>Sign In</span>
          </button>
        </form>

        <div className="auth-footer">
          <p>Don't have an account?</p>
          <button onClick={onSignUp} className="switch-auth">
            <span>Create Account</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;