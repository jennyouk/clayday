import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import { ProjectCard } from './ProjectCard.jsx';

export const Ongoing = (props) => {
  // const theme = useTheme();

  const [projectsArr, setProjectsArr] = useState([]);

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

      <Container component='main' maxWidth='l' sx={{ mt: 3 }}>

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
            <Grid key={i} item xs={12} lg={4}>
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

  );
};
