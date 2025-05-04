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
  useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';

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
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'white', flexGrow: 1 }}>
          JB Collections
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
  );
}

export default Navbar;