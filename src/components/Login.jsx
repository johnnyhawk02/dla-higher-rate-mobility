import React from 'react';
import { Button, Container, Typography, Box, Paper } from '@mui/material';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const { signInWithGoogle } = useAuth();

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Typography component="h1" variant="h4" gutterBottom>
            DLA Form Assistant
          </Typography>
          <Typography variant="body1" align="center" sx={{ mb: 3 }}>
            This tool helps you complete questions 40-72 on the DLA form, focusing on getting
            higher rate care and higher rate mobility.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={signInWithGoogle}
            sx={{ mt: 2 }}
          >
            Sign in with Google
          </Button>
        </Paper>
      </Box>
    </Container>
  );
};

export default Login; 