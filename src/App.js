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
import ordersData from './assets/orders.json';


export default function Checkout() {
  const [isLogged, setIsLogged] = React.useState(false);
  const [orders, setOrders] = React.useState(ordersData);

  const logginFucntion = () => {
    setIsLogged(!isLogged);
    console.log(isLogged);
  }
  
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
          <Grid item xs={12} style={{marginTop:"50px"}}>
            <ProfileSection
            login={logginFucntion}
            isLogged={isLogged}
            />
          </Grid>
          <Grid item xs={12}>
            <StatusSection 
                title={orders[0]?.orderID}
                equipmentID={orders[0]?.equipmentID}
                description={orders[0]?.description}
                started="10/10/2021 10:00 AM"
                color='#009641'
                fontColor="white"
                isLogged={isLogged}
                 />  
          </Grid>
          <Grid item xs={12} style={{marginTop:"20px"}}>
          <OrderSection 
                title="Next Orders"
                color='#009641'
                fontColor="white"
                orders={orders}
                 />
                
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}