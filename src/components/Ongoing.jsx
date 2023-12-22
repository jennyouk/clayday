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
import Autocomplete from '@mui/material/Autocomplete';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormGroup from '@mui/material/FormGroup';

export const Ongoing = (props) => {
  const theme = useTheme();
  //   const [currentForm, setCurrentForm] = useState('login');

  //   const toggleForm = (formName) => {
  //     setCurrentForm(formName);
  //   };
  // const ongoing = [];
  // fetch('/getProjects', {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'Application/JSON',
  //   },
  //   body: JSON.stringify({userId: props.userId}),
  // })
  //   .then((res) => res.json())
  //   .then((projects) => {
  //     console.log(projects)
  //   })
  //   .catch((err) => console.log('Project submission error: ', err));

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='l' sx={{ mt: 3 }}>
        <CssBaseline />
        <Typography
          // className='add-project'
          style={{ cursor: 'pointer' }}
          underline='hover'
          onClick={() => props.toggleAdd(!props.showAdd)}
          component='h1'
          variant='h6'
          color='grey.700'
          align='left'
          cursor='pointer'
        >
          ongoing projects
        </Typography>
      </Container>
    </ThemeProvider>
  );
};
