import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function Login() {

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box mt={20}>
        <Avatar>
          <i className="fa fa-user fa-1x" />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Acceder
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to={routes.LOGIN}>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to={routes.HOME}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </Box>
      <Box mt={8}>
        {/* <Copyright /> */}
      </Box>
    </Container>
  );
}
