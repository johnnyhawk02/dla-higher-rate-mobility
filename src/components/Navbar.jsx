import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          DLA Form Assistant
        </Typography>
        
        {user && (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button 
              color="inherit" 
              onClick={() => navigate('/form')}
              sx={{ mr: 2 }}
            >
              Form
            </Button>
            
            <Button 
              color="inherit" 
              onClick={() => navigate('/summary')}
              sx={{ mr: 2 }}
            >
              Summary
            </Button>
            
            <Typography variant="body1" sx={{ mr: 2 }}>
              {user.displayName || user.email}
            </Typography>
            
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 