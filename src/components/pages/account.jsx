import React from 'react';
import { Container, Box, Typography, TextField, Button, Alert, Paper, Link as MuiLink } from '@mui/material';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function CreateAccount() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password:'',
    confirmPassword: ''
  });

  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
      setError('All fields are required');
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
  //  to be replaced by the api url
    console.log('Account created:', formData);
    navigate('/login');
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Paper elevation={3} sx={{ p: 4, backgroundColor: '#f9f9f9', borderRadius: 2, boxShadow: '0 8px 16px rgba(0,0,0,0.1)' }}>
        <Typography variant="h4" component="h1" gutterBottom color="primary.main">
          Create an Account
        </Typography>
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        <form onSubmit={handleSubmit}>
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            margin="normal"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            margin="normal"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
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
          <TextField
            label="Confirm Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 3, py: 1.5 }}>
            Create Account
          </Button>
        </form>
        <Typography variant="body1" sx={{ mt: 3, textAlign: 'center' }}>
          Already have an account? <MuiLink component={Link} to="/login" color="primary.main">Log in</MuiLink>
        </Typography>
      </Paper>
    </Container>
  );
}

export default CreateAccount;
