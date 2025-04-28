import { Box, Button, Typography } from "@mui/material";
import bgImag from "../../assets/images/background.jpg";

const HeroSection = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        backgroundImage: `
          linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
          url(${bgImag})`
        ,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
        px: 2,
      }}
    >
      <Typography variant="h2" fontWeight="bold" mb={4}>
        Welcome to Johnty Collections
      </Typography>
      <Typography variant="h4" fontWeight="bold" color="black" mb={4}>
        Discover Your Style
      </Typography>

      <Box display="flex" gap={2}>
        <Button
          variant="contained"
          color="primary"
          sx={{ backgroundColor: "white", color: "black", "&:hover": { backgroundColor: "grey.300" } }}
        >
          Shop Men
        </Button>

        <Button
          variant="contained"
          color="primary"
          sx={{ backgroundColor: "white", color: "black", "&:hover": { backgroundColor: "grey.300" } }}
        >
          Shop Women
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
