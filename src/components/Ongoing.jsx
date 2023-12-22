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
import { ProjectCard } from './ProjectCard.jsx';

export const Ongoing = (props) => {
  const theme = useTheme();
  //   const [currentForm, setCurrentForm] = useState('login');

  //   const toggleForm = (formName) => {
  //     setCurrentForm(formName);
  //   };
  const ongoing = [];
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
        ongoing.push(
          <ProjectCard
            nickname={proj.nickname}
            phase={proj.phase}
            date={proj.createDate}
            notes={proj.notes}
          ></ProjectCard>
        );
      });
      console.log('ongoing', ongoing);
      // console.log('ongoing 0 nickname', ongoing[0].nickname)
    })
    .catch((err) => console.log('Project submission error: ', err));

  // const projects = [];
  // ongoing.forEach((proj) => {
  //   projects.push(
  //     <ProjectCard
  //       nickname={proj.nickname}
  //       phase={proj.phase}
  //       date={proj.createDate}
  //       notes={proj.notes}
  //     />
  //   );
  // });

  // const cardMaker = (nickname, phase, notes) => (
  //   <ProjectCard
  //     nickname={nickname}
  //     phase={phase}
  //     notes={notes}
  //   />
  // );

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='l' sx={{ mt: 3 }}>
        <CssBaseline />
        <Typography
          component='h1'
          variant='h6'
          color='grey.700'
          align='left'
          sx={{ mt: 0, mb: 2 }}
        >
          ongoing projects
        </Typography>
        {ongoing}
        <Grid container spacing={3} sx={{ mt: 1 }}>
          <Grid item xs={12} lg={3}>
            <ProjectCard
              nickname='sample project'
              phase='thrown'
              date='12/15'
              notes='bmix, 1.5 lbs'
            />
          </Grid>
          <Grid item xs={12} lg={3}>
          <ProjectCard
            nickname='mug with handle'
            phase='bisqued'
            date='12/10'
            notes='bmix, 1 lb'
          />
          </Grid>
          <Grid item xs={12} lg={3}>
          <ProjectCard
            nickname='vase'
            phase='thrown'
            date='12/20'
            notes='speckled bmix, 3 lb'
          />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};
