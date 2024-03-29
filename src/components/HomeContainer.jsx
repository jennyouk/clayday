import React, { useState } from 'react';
import { Reminders } from './Reminders.jsx';
import { NewProj } from './NewProj.jsx';
import { Ongoing } from './Ongoing.jsx';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';

export const HomeContainer = (props) => {
  const [showReminders, setShowReminders] = useState(true);
  const toggleReminders = (bool) => {
    setShowReminders(bool);
  };

  const [showAdd, setShowAdd] = useState(false);
  const toggleAddProj = (bool) => {
    setShowAdd(bool);
  };

  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Container component='main'>
        <Typography
          variant='h2'
          align='left'
          sx={{
            backgroundImage: `linear-gradient(70deg, #5514B4, #FF80FF)`,
            backgroundSize: '40%',
            backgroundRepeat: 'repeat',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mt: 3,
            mb: 4,
            pl: 3,
            pr: 3
          }}
        >
             c l a y d a y
        </Typography>
        {showReminders ? (
          <Reminders userId={props.userId} toggleRem={toggleReminders} />
        ) : (
          <></>
        )}
        <NewProj
          userId={props.userId}
          toggleAdd={toggleAddProj}
          showAdd={showAdd}
        />
        <Ongoing userId={props.userId} />
      </Container>
    </ThemeProvider>
  );
};
