import React, { useState, useEffect } from 'react';
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

  const [projectsArr, setProjectsArr] = useState([]);
  // let ongoing = [];
  // const projects = [];
  // fetch('/getProjects', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'Application/JSON',
  //   },
  //   body: JSON.stringify({ userId: props.userId }),
  // })
  //   .then((res) => res.json())
  //   .then((allProjects) => {
  //     // console.log(allProjects);
  //     // allProjects.forEach((proj) => {
  //     //   // ongoing.push(
  //     //   //   <ProjectCard
  //     //   //     nickname={proj.nickname}
  //     //   //     phase={proj.phase}
  //     //   //     date={proj.createDate}
  //     //   //     notes={proj.notes}
  //     //   //   ></ProjectCard>
  //     //   // );
  //     //   console.log(proj.nickname, proj.phase, proj.createDate, proj.notes)
  //     // });

  //     // console.log('ongoing 0 nickname', ongoing[0].nickname)
  //     // ongoing = allProjects;
  //     // console.log('ongoing', ongoing);

  //     // for (let i = 0; i < allProjects.length; i++) {
  //     //   projects.push(
  //     //     <ProjectCard
  //     //       nickname={allProjects[i].nickname}
  //     //       phase={allProjects[i].phase}
  //     //       date={allProjects[i].createDate}
  //     //       notes={allProjects[i].notes}
  //     //       key={i + 100}
  //     //     />
  //     //   );
  //     // }
  //     // console.log('projects', projects);
  //     projects = allProjects;
  //     // console.log('projects', projects);
  //   })
  //   .catch((err) => console.log('Project submission error: ', err));

  // const projects = [];
  // for (let i = 0; i < ongoing.length; i++) {
  //   projects.push(
  //     <ProjectCard
  //       nickname={proj.nickname}
  //       phase={proj.phase}
  //       date={proj.createDate}
  //       notes={proj.notes}
  //       key={i+100}
  //     ></ProjectCard>
  //   );
  // }
  // console.log('projects',projects);

  // const cardMaker = (nickname, phase, notes) => (
  //   <ProjectCard
  //     nickname={nickname}
  //     phase={phase}
  //     notes={notes}
  //   />
  // );

  const getProjects = async () => {
    try {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/JSON',
        },
        body: JSON.stringify({ userId: props.userId }),
      };
      console.log(
        'getting projects from database associated with userID: ',
        props.userId
      );
      const response = await fetch('/getProjects', requestOptions);
      const data = await response.json();
      if (!response.ok) console.log('ERROR, not 200');
      console.log('async call for data', data);
      setProjectsArr(data);
      console.log('projects', projectsArr);
    } catch (error) {
      console.log(error, 'error accessing database');
    }
  };
  useEffect(() => {
    console.log('useEffect is working!');
    getProjects();
  }, []);

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
        {/* {projects} */}

        <Grid container spacing={3} sx={{ mt: 1 }}>
          {projectsArr.map((proj, i) => (
            <Grid key={i} item xs={12} lg={3}>
              <ProjectCard
                key={i}
                nickname={proj.nickname}
                phase={proj.phase}
                date={proj.createDate}
                notes={proj.notes}
              />
            </Grid>
          ))}
          {/* <Grid item xs={12} lg={3}>
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
          </Grid> */}
        </Grid>
      </Container>
    </ThemeProvider>
  );
};
