import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import bgImag from "../../assets/images/background.jpg";

const HeroSection = () => {
  return (
    <Box
      sx={{
        height: { xs: "80vh", sm: "90vh", md: "100vh" },
        maxWidth: "100%" ,
        backgroundImage: `
          linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
          url(${bgImag})`
        ,
        backgroundSize: "cover",
        backgroundPosition: {
          xs: "center center",     
          sm: "center top",        
          md: "center center"      
        },
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
        px: { xs: 2, sm: 3, md: 4 },
        py: { xs: 4, sm: 6, md: 8 },
        position: "relative",
        overflow: "hidden"
      }}
    >

      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          mb: { xs: 2, sm: 3, md: 4 },
          fontSize: {
            xs: '2rem',
            sm: '2.5rem',
            md: '3rem',
            lg: '3.5rem',
            xl: '4rem'
          },
          lineHeight: { xs: 1.2, sm: 1.3, md: 1.4 },
          textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
          maxWidth: '90%'
        }}
      >
        Welcome to Johnty Collections
      </Typography>


      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "white",
          mb: { xs: 3, sm: 4, md: 4 },
          fontSize: {
            xs: '1.2rem',
            sm: '1.5rem',
            md: '2rem',
            lg: '2.25rem',
            xl: '2.5rem'
          },
          lineHeight: { xs: 1.3, sm: 1.4 },
          textShadow: '1px 1px 3px rgba(0,0,0,0.7)',
          maxWidth: '80%',
          opacity: 0.95
        }}
      >
        Discover Your Style
      </Typography>


      <Box
        sx={{
          display: "flex",
          gap: { xs: 1.5, sm: 2, md: 3 },
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          maxWidth: { xs: '280px', sm: '400px', md: '500px' }
        }}
      >
        <Button
          component={Link}
          to="/men"
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "white",
            color: "black",
            fontWeight: 'bold',
            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
            px: { xs: 3, sm: 4, md: 5 },
            py: { xs: 1, sm: 1.5, md: 2 },
            minWidth: { xs: '140px', sm: '120px', md: '140px' },
            textTransform: 'none',
            borderRadius: 2,
            boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
            transition: 'all 0.3s ease',
            "&:hover": {
              backgroundColor: "grey.200",
              transform: 'translateY(-2px)',
              boxShadow: '0 6px 12px rgba(0,0,0,0.4)'
            }
          }}
        >
          Shop Men
        </Button>

        <Button
          component={Link}
          to="/women"
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "white",
            color: "black",
            fontWeight: 'bold',
            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
            px: { xs: 3, sm: 4, md: 5 },
            py: { xs: 1, sm: 1.5, md: 2 },
            minWidth: { xs: '140px', sm: '120px', md: '140px' },
            textTransform: 'none',
            borderRadius: 2,
            boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
            transition: 'all 0.3s ease',
            "&:hover": {
              backgroundColor: "grey.200",
              transform: 'translateY(-2px)',
              boxShadow: '0 6px 12px rgba(0,0,0,0.4)'
            }
          }}
        >
          Shop Women
        </Button>
      </Box>

      <Box
        sx={{
          position: 'absolute',
          bottom: { xs: 20, sm: 30, md: 40 },
          left: '50%',
          transform: 'translateX(-50%)',
          display: { xs: 'block', md: 'none' },
          animation: 'bounce 2s infinite',
          '@keyframes bounce': {
            '0%, 20%, 50%, 80%, 100%': {
              transform: 'translateX(-50%) translateY(0)',
            },
            '40%': {
              transform: 'translateX(-50%) translateY(-10px)',
            },
            '60%': {
              transform: 'translateX(-50%) translateY(-5px)',
            },
          }
        }}
      >
        <Typography
          variant="caption"
          sx={{
            color: 'white',
            opacity: 0.8,
            fontSize: '0.8rem',
            textAlign: 'center',
            display: 'block'
          }}
        >
          Scroll down ↓
        </Typography>
      </Box>
    </Box>
  );
};

export default HeroSection;