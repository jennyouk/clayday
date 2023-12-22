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
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';

export const ProjectCard = (props) => {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Card sx={{ minHeight: 300}} variant='outlined'>
        <CardHeader title={props.nickname} />
        {/* <CardMedia
          component='img'
          height='194'
          src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.allenwilliamsstudio.com%2Fvickis-pottery%2Fred-clay-bowl&psig=AOvVaw29r6dbYT0d7zCIqg6t8qST&ust=1703295299442000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNjfjNHzoYMDFQAAAAAdAAAAABAE'
          alt='pot'
        /> */}
        <CardContent>
          <Typography variant='body2' color='text.secondary'>
            Phase: {props.phase}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Date: {props.date}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Notes: {props.notes}
          </Typography>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
};
