import React from 'react';

import { Container, Grid, Typography, Box, TextField, Button, Divider } from '@mui/material';

const Footer = () => {
  return (
    <footer>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={12}>
         
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>Visit Us</Typography>
            <Typography variant="subtitle1" fontWeight="bold">Physical location:</Typography>
            <Typography variant="body2">ABC Plaza, 1st Floor, Lenana Road, Nairobi</Typography>
            <Typography variant="subtitle1" fontWeight="bold" sx={{ mt: 2 }}>Opening Hours:</Typography>
            <Typography variant="body2">Mon - Sat<br/>9AM - 7PM</Typography>
            <Typography variant="body2">Sunday<br/>10AM - 6PM</Typography>
            <Typography variant="subtitle1" fontWeight="bold" sx={{ mt: 2 }}>Customer Care Number (0719597913):</Typography>
            <Typography variant="body2">(+254) 719597913</Typography>
          </Grid>

          
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>Quick Links</Typography>
            <Box component="ul" sx={{ p: 0, listStyleType: 'none' }}>
              {[ "How to Shop", "Checkout Error", "Return Policy", "Terms and Conditions", "Privacy & Policy", "Terms of Service", "Return & Refund Policy", "Sitemap"].map((link, index) => (
                <Typography key={index} variant="body2" component="li" sx={{ mb: 1 }}>{link}</Typography>
              ))}
            </Box>
          </Grid>

          
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>Join our mailing list</Typography>
            <Box component="form" sx={{ display: 'flex', alignItems: 'center' }}>
              <TextField placeholder="Email" fullWidth sx={{ mr: 1 }} />
              <Button variant="contained" color="primary">→</Button>
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ my: 4 }} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body2">&copy; {new Date().getFullYear()} Johnty Best Collections</Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
           
          </Box>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
