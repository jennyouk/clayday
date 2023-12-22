import React, { useState } from 'react';
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
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

export const Reminders = (props) => {
  const theme = useTheme();

  const alert = [];
  fetch('/getProjects', {
    method: 'POST',
    headers: {
      'Content-Type': 'Application/JSON',
    },
    body: JSON.stringify({ userId: props.userId }),
  })
    .then((res) => res.json())
    .then((allProjects) => {
      console.log(allProjects);
      allProjects.forEach((proj) => {
        alert.push(
          proj.nickname
        );
      });
      console.log('ongoing', ongoing);
      // console.log('ongoing 0 nickname', ongoing[0].nickname)
    })
    .catch((err) => console.log('Project submission error: ', err));

  return (
    <ThemeProvider theme={theme}>
      <Container component='main'>
        <CssBaseline />
        <Alert severity='error' onClose={(e) => {props.toggleRem(false)}}>
          <AlertTitle>Reminders:</AlertTitle>
          The following projects need attention: <strong>check it out</strong>
        </Alert>
      </Container>
    </ThemeProvider>
  );
};
