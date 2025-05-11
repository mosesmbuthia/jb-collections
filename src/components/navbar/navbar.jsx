import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Badge,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
  Stack,
  Box
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';

function Navbar({ cartItemsCount = 0 }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      
      <Box sx={{ backgroundColor: '#333', color: '#fff', padding: '5px 0', fontSize: '1.2rem' }}>
        <Stack direction="row" justifyContent="center" gap={8} alignItems="center" sx={{ px: 2 }}>
          <Stack direction="row" spacing={2} alignItems="center">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
              <FacebookIcon fontSize="small" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
              <TwitterIcon fontSize="small" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
              <InstagramIcon fontSize="small" />
            </a>
          </Stack>
          <Stack direction="row" spacing={6} alignItems="center">
            <span>
              Call us on
              <PhoneIcon fontSize="small" sx={{ marginRight: 0.5, position: 'relative' }} /> +254 (719) 597-913
            </span>
            <span>Mon - Sat: 8AM - 9PM | Sun: 12PM - 10PM</span>
          </Stack>
        </Stack>
      </Box>

      
      <AppBar position="sticky" sx={{ backgroundColor: '#f9f9f9', color: '#333', boxShadow: 'none' }}>
        <Toolbar>
          <Typography 
            variant="h6" 
            component={Link} 
            to="/" 
            style={{ textDecoration: 'none', color: '#333', flexGrow: 1 }}
          >
            Johnty Best Collections
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem component={Link} to="/" onClick={handleMenuClose}>All</MenuItem>
                <MenuItem component={Link} to="/men" onClick={handleMenuClose}>Men</MenuItem>
                <MenuItem component={Link} to="/women" onClick={handleMenuClose}>Women</MenuItem>
                <MenuItem component={Link} to="/create-account" onClick={handleMenuClose}>Account</MenuItem>
                <MenuItem component={Link} to="/cart" onClick={handleMenuClose}>
                  Cart ({cartItemsCount})
                </MenuItem>
              </Menu>
            </>
          ) : (
            <>
              <Button color="inherit" component={Link} to="/">
                All
              </Button>
              <Button color="inherit" component={Link} to="/men">
                Men
              </Button>
              <Button color="inherit" component={Link} to="/women">
                Women
              </Button>
              <IconButton color="inherit" component={Link} to="/create-account">
                <PersonIcon />
              </IconButton>
              <IconButton color="inherit" component={Link} to="/cart">
                <Badge badgeContent={cartItemsCount} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
