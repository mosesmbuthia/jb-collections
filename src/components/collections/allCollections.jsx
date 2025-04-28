import { Box, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button, IconButton, Chip } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import products from "../../data/clothesData.js";

const AllClothesPage = () => {
  return (
    <Box p={4}>
      <Typography variant="h3" mb={4} textAlign="center">
        All Collections
      </Typography>

      <Grid container spacing={4}>
        {products.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <Card
              sx={{
                position: "relative",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.03)",
                  boxShadow: 6,
                },
              }}
            >
              {/* Sale Badge */}
              {item.priceNow < item.priceBefore && (
                <Chip 
                  label="SALE" 
                  color="error"
                  size="small"
                  sx={{ 
                    position: "absolute", 
                    top: 10, 
                    left: 10, 
                    fontWeight: "bold" 
                  }}
                />
              )}

              <CardMedia
                component="img"
                height="250"
                image={item.image}
                alt={item.name}
              />

              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {item.name}
                </Typography>

                {/* Pricing Section */}
                <Box display="flex" alignItems="center" gap={1} mb={1}>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      textDecoration: "line-through", 
                      fontWeight: 300, 
                      color: "text.secondary" 
                    }}
                  >
                    Ksh {item.priceBefore}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    fontWeight="bold" 
                    color="primary"
                  >
                    Ksh {item.priceNow}
                  </Typography>
                </Box>

                <Typography variant="body2" color="textSecondary">
                  {item.description}
                </Typography>
              </CardContent>

              <CardActions sx={{ justifyContent: "space-between", px: 2, pb: 2 }}>
                <IconButton color="primary">
                  <ShoppingCartIcon />
                </IconButton>
                <Button
                  component={Link}
                  to="/checkout"
                  size="small"
                  sx={{ textTransform: "none" }}
                >
                  Buy Now
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AllClothesPage;
