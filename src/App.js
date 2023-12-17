import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import StatusSection from './components/StatusSection';
import OrderSection from './components/OrderSection';
import ProfileSection from './components/ProfileSection';
import StatesSection from './components/StatesSection';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Checkout() {
  
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="primary"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            EQUIPMENT ID XXX1234
          </Typography>
          <Typography variant="h6" color="inherit">
            {new Date().toLocaleDateString()}
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} style={{marginTop:"50px"}}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <StatusSection 
                title="Current Order"
                started="10/10/2021 10:00 AM"
                color='#009641'
                fontColor="white"
                 />                
              </Grid>
              <Grid item xs={12}>
                <OrderSection 
                title="Next Orders"
                color='#009641'
                fontColor="white"
                 />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} style={{marginTop:"50px"}}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <ProfileSection 
                 />
              </Grid>
              <Grid item xs={12}>
                <StatesSection 
                title="States"
                color="secondary"
                fontColor="fontcolor"
                 />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Copyright />
      </Container>
    </React.Fragment>
  );
}