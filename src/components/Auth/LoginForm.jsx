import  { useState } from 'react';
import axios from 'axios';

function LoginForm() {
  // Initialize state variables for form inputs and error handling
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
    
      const response = await axios.post('https://budgetdemoback6.onrender.com/api/auth/login', { email, password });
      // Handle successful login, such as redirecting to a dashboard page
      console.log(response.data);
    } catch (error) {
      // Handle login error by displaying error message
      setError(error.response.data.message);
    }
  };

  // Render the LoginForm component UI
  return (
    <div>
      <h2>Login Form</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
   
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update password state on input change
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
