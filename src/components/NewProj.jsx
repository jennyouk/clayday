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

export const NewProj = (props) => {
  const theme = useTheme();

  const [nickname, setNickname] = useState('');
  const [phase, setPhase] = useState('thrown');
  const [remind, setRemind] = useState(false);
  const [days, setDays] = useState(3);
  const [notes, setNotes] = useState('');

  const phases = [
    'thrown',
    'trimmed',
    'bisqued',
    'glazed',
    'fired',
    'ideation',
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    let body;
    const user = props.userId;
    if (remind) body = { nickname, phase, remind, days, notes, user };
    else body = { nickname, phase, remind, notes, user };
    console.log(body);
    fetch('/addProject', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then(() => props.toggleAdd(false))
      .catch((err) => console.log('Project submission error: ', err));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='l' sx={{ mt: 3 }}>
        <CssBaseline />
        <Link
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
          add a new project
        </Link>

        {props.showAdd ? (
          <Grid
            container
            spacing={3}
            component='form'
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <Grid item xs={12} lg={4}>
              <TextField
                fullWidth
                //   margin='normal'
                id='nickname'
                label='nickname'
                //   defaultValue="nickname"
                autoFocus
                onChange={(e) => setNickname(e.target.value)}
                //   helperText="Some important text"
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <Autocomplete
                //   margin='normal'
                fullWidth
                value={phase}
                onChange={(event, newValue) => {
                  setPhase(newValue);
                }}
                id='phase'
                options={phases}
                //   sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label='project phase' />
                )}
              />
              {/* <InputLabel id='phase'>project phase</InputLabel>
            <Select

              labelId='phase'
              id='phase'
              value={phase}
              label='phase'
              onChange={(event, newValue) => {
                setPhase(newValue);
              }}
            >
              <MenuItem value={"thrown"}>thrown</MenuItem>
              <MenuItem value={"trimmed"}>trimmed</MenuItem>
              <MenuItem value={"bisqued"}>bisqued</MenuItem>
              <MenuItem value={"glazed"}>glazed</MenuItem>
              <MenuItem value={"fired"}>fired</MenuItem>
            </Select> */}
            </Grid>
            <Grid item xs={12} lg={4}>
              {/* <div className='add-new-reminder'> */}
              <Box display='flex'>
                {/* <Checkbox
                //   type='checkbox'
                id='remind'
                name='remind'
                value={remind}
                onChange={(e) => setRemind(!remind)}
              />{' '}
              set reminder in */}

                <FormControlLabel
                  control={
                    <Checkbox
                      id='remind'
                      name='remind'
                      value={remind}
                      onChange={(e) => setRemind(!remind)}
                    />
                  }
                  label='remind me in'
                />

                <TextField
                  // fullWidth
                  //   margin='normal'
                  value={days}
                  onChange={(e) => setDays(e.target.value)}
                  id='days'
                  label='days'
                  type='number'
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Box>
              {/* </div> */}
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name='notes'
                id='notes'
                label='project notes'
                multiline
                rows={8}
                // maxRows={8}
                value={notes}
                placeholder='clay body, start weight, glaze...'
                onChange={(e) => setNotes(e.target.value)}
              />
            </Grid>
            <Button
              type='submit'
              variant='outlined'
              sx={{
                mt: 3,
                marginLeft: 'auto',
                paddingLeft: 5,
                paddingRight: 5,
              }}
            >
              submit
            </Button>

            {/* <label htmlFor='nickname'>nickname </label> */}
            {/* <input
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            type='nickname'
            placeholder='nickname'
            id='nickname'
            name='nickname'
          /> */}
            {/* <TextField
            margin='dense'
            fullWidth
            id='nickname'
            label='nickname'
            name='nickname'
            autoComplete='nickname'
            autoFocus
            onChange={(e) => setNickname(e.target.value)}
          /> */}
            {/* <label htmlFor='phase'>phase </label>
          <select
            id='phase'
            name='phase'
            onChange={(e) => setPhase(e.target.value)}
          >
            <option value='thrown'>thrown</option>
            <option value='trimmed'>trimmed</option>
            <option value='bisqued'>bisqued</option>
            <option value='glazed'>glazed</option>
            <option value='fired'>fired</option>
          </select> */}
            {/* <label htmlFor='remind'>set reminder in </label> */}
            {/* <input
              value={days}
              onChange={(e) => setDays(e.target.value)}
              type='days'
              placeholder='3'
              id='days'
              name='days'
            /> */}
            {/* <label htmlFor='days'> days </label> */}
            {/* <label htmlFor='notes'>project notes </label> */}
          </Grid>
        ) : (
          <></>
        )}
      </Container>
    </ThemeProvider>
  );
};
