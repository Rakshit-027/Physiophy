import React, { useState } from 'react';
import { User, Mail, Lock, Phone, UserPlus, ArrowRight, X } from 'lucide-react';
import './Auth.css';
import Logo from './Logo.png';

const SignUp = ({ onClose, onSignIn, onSuccess }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
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
    console.log('Sign up data:', formData);
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
          <h1>Create Account</h1>
          <p>Join us to start your healing journey</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label>
              <User size={20} className="input-icon" />
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </label>
          </div>

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
              <Phone size={20} className="input-icon" />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
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

          <div className="form-group">
            <label>
              <Lock size={20} className="input-icon" />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div className="form-options">
            <label className="remember-me">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                required
              />
              <span>I agree to the Terms & Conditions</span>
            </label>
          </div>

          <button type="submit" className="auth-button">
            <UserPlus size={20} />
            <span>Create Account</span>
          </button>
        </form>

        <div className="auth-footer">
          <p>Already have an account?</p>
          <button onClick={onSignIn} className="switch-auth">
            <span>Sign In</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;