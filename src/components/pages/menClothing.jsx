import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../contexts/ProductContext'; // Assuming you'll create this context

function MenClothing() {
  const { products } = useProducts();
  const menProducts = products.filter(product => product.category === 'men');

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4 }}>
        Men's Clothing
      </Typography>
      
      <Grid container spacing={3}>
        {menProducts.map(product => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default MenClothing;