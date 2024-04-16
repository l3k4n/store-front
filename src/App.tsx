import React, { useState } from 'react';
import logo from './assets/logo.svg'; // Assuming you named the CSS file Login.css
import './App.css';

interface LoginFormState {
  username: string;
  password: string;
}

function Login() {
  const [formData, setFormData] = useState<LoginFormState>({
    username: '',
    password: '',
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Basic Validation (Optional)
    if (formData.username === '' || formData.password === '') {
      alert('Please fill in all fields');
      return;
    }

    console.log('Username:', formData.username);
    console.log('Password:', formData.password); // Remove in production
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='container'> {/* New container element */}
        <div className='logo1'> {/* Image element */}
          <img src={logo} alt="Company Logo" />
        </div>
        <div> {/* Text section container */}
          <div className='Login-text1'>
            Log in to your account
          </div>
          <div className='Login-text2'>
            Welcome back! Please enter your details.
          </div>
        </div>
        <div className='input-section'> {/* Form elements container */}
          <div className='username'>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
            />
          </div>
          <div className='password'>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>
        </div>
      </div>
      <button className='btn' type="submit">Login</button>
    </form>
  );
}

export default Login;
