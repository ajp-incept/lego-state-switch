import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import StatusSection from './components/StatusSection';
import OrderSection from './components/OrderSection';
import ProfileSection from './components/ProfileSection';
import ordersData from './assets/orders.json';


export default function Checkout() {
  const [isLogged, setIsLogged] = React.useState(false);
  const [orders, setOrders] = React.useState(ordersData);
  const [headerColor, setHeaderColor] = React.useState('#e30613');

  const logginFucntion = () => {
    setIsLogged(!isLogged);
  }
  
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="absolute"
        style={{ backgroundColor: headerColor,color:(headerColor==="yellow") ? "black" : "white" }}
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
                color='#3c3c3b'
                fontColor="white"
                isLogged={isLogged}
                setHeaderColor={setHeaderColor}
                login={logginFucntion}
                 />  
          </Grid>
          <Grid item xs={12} style={{marginTop:"20px"}}>
          <OrderSection 
                title="Next Orders"
                color='#3c3c3b'
                fontColor="white"
                orders={orders}
                 />
                
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}