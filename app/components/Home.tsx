import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';

// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography variant="h3">
          Kanan. Finanzas personales
        </Typography>
        <Box mt={5}>
          <Link to={routes.LOGIN}>
            <Button variant="contained" color="primary" size="large" disableElevation>
              <i className="fa fa-user-shield fa-2x" /> Acceder
            </Button>
          </Link>

          <Link to={routes.CREATE}>
            <Button color="secondary" size="large" disableElevation>
              <i className="fa fa-user-plus fa-2x" /> Nuevo
            </Button>
          </Link>
        </Box>
      </div>
      <Box mt={8}>
        {/* <Copyright /> */}
      </Box>
    </Container>
  );
}
