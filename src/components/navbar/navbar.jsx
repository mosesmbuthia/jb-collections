import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const navLinks = ['ALL', 'MEN', 'WOMEN'];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, fontWeight: 'bold' }}>
        JOHNTY BEST COLLECTIONS
      </Typography>
      <List>
        {navLinks.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>

          {/* Left: Logo */}
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            JOHNTY BEST COLLECTIONS
          </Typography>

          {/* Center: Links (Desktop) */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
            {navLinks.map((link) => (
              <Button key={link} color="inherit">
                {link}
              </Button>
            ))}
          </Box>

          {/* Right: Icons */}
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <IconButton color="inherit" sx={{ display: { xs: 'none', md: 'flex' } }}>
              <AccountCircleIcon />
            </IconButton>
            <IconButton color="inherit" sx={{ display: { xs: 'none', md: 'flex' } }}>
              <ShoppingCartIcon />
            </IconButton>

            {/* Hamburger Menu (Mobile) */}
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Box>

        </Toolbar>
      </AppBar>

      {/* Drawer for mobile menu */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
