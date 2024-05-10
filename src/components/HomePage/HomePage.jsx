




import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div style={styles.container}>
      <nav style={styles.navbar}>
        <div style={styles.navbarContainer}>
          <h1 style={styles.logo}>Budget App</h1>
          <button style={styles.loginButton} onClick={handleLoginClick}>Login</button>
        </div>
      </nav>

      <div style={styles.content}>
        <h2>Personal Budget Tracking App</h2>
        <p>Welcome to our Personal Budget Tracking App!</p>
        <p>This app helps you manage your finances by tracking your income, expenses, and savings.</p>
        <h3>Key Features:</h3>
        <ul>
          <li>Track your income and expenses</li>
          <li>Set budget goals and monitor your progress</li>
          <li>View detailed reports and visualizations of your spending habits</li>
          <li>Receive personalized recommendations to improve your financial health</li>
        </ul>
        <p>Get started today and take control of your finances!</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
  },
  navbar: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 0',
  },
  navbarContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  logo: {
    fontSize: '24px',
    margin: 0,
  },
  loginButton: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  content: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
  },
};

export default HomePage;
