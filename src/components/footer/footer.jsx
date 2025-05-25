import React, { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { Box, Container, Grid, Typography, TextField, Button, Link } from '@mui/material';

const Footer = () => {
  const [email, setEmail] = useState('');

  const quickLinks = [
    "How to Shop", 
    "Checkout Error", 
    "Return Policy", 
    "Terms and Conditions", 
    "Privacy & Policy", 
    "Terms of Service", 
    "Return & Refund Policy", 
    "Sitemap"
  ];

  const handleEmailSubmit = () => {
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <Box sx={{ backgroundColor: 'gray.50', borderTop: '1px solid', borderColor: 'gray.200', py: 6 }}>
      <Container maxWidth="lg">
        
        <Grid container spacing={4} justifyContent="center">
          
          
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Visit Us
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box>
                <Typography variant="body2" color="textSecondary">
                  Physical location: ABC Plaza, 1st Floor, Lenana Road, Nairobi
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" color="textSecondary">
                  Opening Hours:
                  <br />
                  Mon - Sat: 9AM - 7PM
                  <br />
                  Sunday: 10AM - 6PM
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" color="textSecondary">
                  Customer Care Number: (+254) 719597913
                </Typography>
              </Box>
            </Box>
          </Grid>

          
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {quickLinks.map((link, index) => (
                <Link key={index} href="#" variant="body2" color="textSecondary" sx={{ '&:hover': { color: 'primary.main' } }}>
                  {link}
                </Link>
              ))}
            </Box>
          </Grid>

         
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Join our mailing list
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', sm: 'row', alignItems: 'center', gap: 2 }}>
              <Box sx={{ position: 'relative', width: '100%' }}>
                {/* <Mail sx={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: 'gray.400' }} /> */}
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  sx={{ paddingLeft: 3 }}
                />
              </Box>
              <Button
                variant="contained"
                color="primary"
                onClick={handleEmailSubmit}
                sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
              >
                Subscribe
                <ArrowRight sx={{ width: 20, height: 20 }} />
              </Button>
            </Box>
          </Grid>
        </Grid>

        {/* bottom footer*/}
        <Box sx={{ borderTop: '1px solid', borderColor: 'gray.200', mt: 6, pt: 4 }}>
          <Grid container justifyContent="space-between" spacing={2}>
            <Grid item xs={12} sm={6} textAlign="center" smTextAlign="left">
              <Typography variant="body2" color="textSecondary">
                &copy; {new Date().getFullYear()} Johnty Best Collections. All rights reserved.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} textAlign="center" smTextAlign="right">
              {/* social media icons here */}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
