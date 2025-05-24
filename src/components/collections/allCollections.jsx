import { Box, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button, IconButton, Chip } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import products from "../../data/clothesData.js";

const AllClothesPage = () => {
  return (
    <Box 
      sx={{
        p: { xs: 2, sm: 3, md: 4 }, 
        maxWidth: '1400px',
        mx: 'auto' 
      }}
    >
      <Typography 
        variant="h3" 
        sx={{
          mb: { xs: 3, sm: 4 },
          textAlign: "center",
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }, 
          fontWeight: 'bold'
        }}
      >
        All Collections
      </Typography>

      <Grid 
        container 
        spacing={{ xs: 2, sm: 3, md: 4 }}
        justifyContent="center"
        alignItems="stretch"
      >
        {products.map((item) => (
          <Grid 
            item 
            xs={12} 
            sm={6} 
            md={4} 
            lg={3} 
            xl={2.4} 
            key={item.id}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Card
              sx={{
                position: "relative",
                height: '100%', 
                width: '100%',
                maxWidth: { xs: '350px', sm: '300px', md: '280px', lg: '260px' },
                display: 'flex',
                flexDirection: 'column',
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.03)",
                  boxShadow: 6,
                }
              }}
            >
             
              {item.priceNow < item.priceBefore && (
                <Chip 
                  label="SALE" 
                  color="error"
                  size="small"
                  sx={{ 
                    position: "absolute", 
                    top: { xs: 8, sm: 10 }, 
                    left: { xs: 8, sm: 10 }, 
                    fontWeight: "bold",
                    fontSize: { xs: '0.7rem', sm: '0.75rem' },
                    zIndex: 2
                  }}
                />
              )}

              <CardMedia
                component="img"
                sx={{
                  height: { xs: 200, sm: 220, md: 250 }, 
                  objectFit: 'cover'
                }}
                image={item.image}
                alt={item.name}
              />

              <CardContent sx={{ flexGrow: 1, p: { xs: 1.5, sm: 2 } }}>
                <Typography 
                  variant="h6" 
                  sx={{
                    fontWeight: "bold", 
                    gutterBottom: true,
                    fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                    lineHeight: 1.3,
                    mb: 1
                  }}
                >
                  {item.name}
                </Typography>

                
                <Box 
                  sx={{
                    display: "flex", 
                    alignItems: "center", 
                    gap: 1, 
                    mb: 1,
                    flexWrap: { xs: 'wrap', sm: 'nowrap' }
                  }}
                >
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      textDecoration: "line-through", 
                      fontWeight: 300, 
                      color: "text.secondary",
                      fontSize: { xs: '0.8rem', sm: '0.875rem' }
                    }}
                  >
                    Ksh {item.priceBefore}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{
                      fontWeight: "bold",
                      color: "primary.main",
                      fontSize: { xs: '0.9rem', sm: '1rem' }
                    }}
                  >
                    Ksh {item.priceNow}
                  </Typography>
                </Box>

                <Typography 
                  variant="body2" 
                  sx={{
                    color: "text.secondary",
                    fontSize: { xs: '0.8rem', sm: '0.875rem' },
                    lineHeight: 1.4,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}
                >
                  {item.description}
                </Typography>
              </CardContent>

              <CardActions 
                sx={{ 
                  justifyContent: "space-between", 
                  px: { xs: 1.5, sm: 2 }, 
                  pb: { xs: 1.5, sm: 2 },
                  pt: 0,
                  mt: 'auto' 
                }}
              >
                <IconButton 
                  color="primary"
                  sx={{
                    p: { xs: 1, sm: 1.5 },
                    '& .MuiSvgIcon-root': {
                      fontSize: { xs: '1.2rem', sm: '1.5rem' }
                    }
                  }}
                >
                  <ShoppingCartIcon />
                </IconButton>
                <Button
                  component={Link}
                  to="/checkout"
                  variant="contained"
                  size="small"
                  sx={{ 
                    textTransform: "none",
                    fontSize: { xs: '0.8rem', sm: '0.875rem' },
                    px: { xs: 2, sm: 3 },
                    py: { xs: 0.5, sm: 1 },
                    minWidth: { xs: 'auto', sm: '80px' }
                  }}
                >
                  Buy Now
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      
      {products.length === 0 && (
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            minHeight: '300px',
            flexDirection: 'column'
          }}
        >
          <Typography variant="h5" color="text.secondary" gutterBottom>
            No products available
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Check back later for new collections!
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default AllClothesPage;