import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

function ProfileSection(props) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => { 
    setOpen(true)
  }; 
  const handleClose = () => { 
    setOpen(false)
  }; 
  const loginAndClose = () => {
    props.login()
    setOpen(false)
  }

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        {!props.isLogged &&
        <Typography variant="h5" component="div">
            Please Login to change status{"    "}
            <Button variant="contained" color="primary" onClick={(e) => handleOpen()}>
              Login with card
            </Button>
        </Typography>
        }
        {props.isLogged &&
        <Typography variant="h5" component="div">
            Welcome Bob Frank
        </Typography>
        }
      </CardContent>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
          width: 400, 
          bgcolor: 'background.paper', 
          border: '2px solid #000', 
          boxShadow: 24, 
          p: 4, 
        }}>
          <Typography variant="h6" component="div">
            Present your card
          </Typography>
          <Button variant="contained" color="primary" onClick={() => loginAndClose()}>
            Card
          </Button>
        </Box>
      </Modal>
    </Card>
  );
}

export default ProfileSection;
