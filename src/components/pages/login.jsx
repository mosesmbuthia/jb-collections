import React, { useState } from 'react';
import { Container, Box, Typography, TextField, Button, Alert, Paper, Link as MuiLink } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     
      console.log('Logging in with:', formData);
      const { email, password } = formData;
      if (!email || !password) {
        throw new Error('Both email and password are required');
      }
      
     
      console.log('Login successful');
      navigate('/');
    } catch (err) {
      setError(err.message || 'An unexpected error occurred');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Paper elevation={2} sx={{ p: 4, backgroundColor: '#f9f9f9', borderRadius: 2, boxShadow: '0 8px 16px rgba(0,0,0,0.1)' }}>
        <Typography variant="h4" component="h1" gutterBottom color="primary.main">
          Login
        </Typography>
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email Address"
            variant="outlined"
            fullWidth
            margin="normal"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 3, py: 1.5 }}>
            Login
          </Button>
        </form>
        <Typography variant="body1" sx={{ mt: 3, textAlign: 'center' }}>
          Don't have an account? <MuiLink component={Link} to="/create-account" color="primary.main">Create Account</MuiLink>
        </Typography>
      </Paper>
    </Container>
  );
}

export default Login;
