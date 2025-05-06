import React from 'react'
import {Container, Box, Typography, TextField, Button, Alert} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function createAccount() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password:'',
    confirmPassword: ''
  });
  const [error, setError] = useState();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  
    if (!formData.name || !formData.email || !formData.password) {
      setError('All fields are required');
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    
    createAccount({
      name: formData.name,
      email: formData.email
    
    });
    
    // will edit this to redirect to login page after succesfully creating an account
    navigate('/');
  };

  return (
    <Container  maxWidth="sm">
          <Box sx={{ my: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
              Create an Account
            </Typography>
            
            {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
            
            <form value="submit" onSubmit={handleSubmit}>
              <TextField
                label="Full Name"
                variant="outlined"
                fullWidth
                margin="normal"
                name="name"
                value={formData.name}
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
              
              <Button 
                type="submit" 
                variant="contained" 
                color="primary" 
                fullWidth 
                sx={{ mt: 3 }}
              >
                Create Account
              </Button>
            </form>
          </Box>
        </Container>
  )
}

export default createAccount
