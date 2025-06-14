import React from 'react';

const HomePage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Home Page 🎉</h1>
      <p style={styles.subtext}>You're successfully logged in!</p>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#fdf6ec',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Lato, sans-serif',
    padding: '2rem',
  },
  heading: {
    fontSize: '2rem',
    color: '#fc8019',
    fontWeight: '700',
    marginBottom: '1rem',
  },
  subtext: {
    fontSize: '1.1rem',
    color: '#333',
  },
};

export default HomePage;
