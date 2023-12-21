import React, { useState } from 'react';
import { Reminders } from './Reminders.jsx';
import { NewProj } from './NewProj.jsx';
import { Ongoing } from './Ongoing.jsx';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';

export const HomeContainer = (props) => {

    const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Container component='main'>
        <CssBaseline />
        <Typography
          variant='h2'
          align='left'
          // color='grey.700'
          sx={{
            // backgroundcolor: 'primary',
            backgroundImage: `linear-gradient(45deg, #5514B4, #FF80FF)`,
            backgroundSize: '40%',
            backgroundRepeat: 'repeat',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mt: 3,
            mb: 4,
          }}
        >
          c l a y d a y
        </Typography>
      <Reminders />
      <NewProj />
      <Ongoing />
      </Container>
    </ThemeProvider>
  );
};
