import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function ProfileSection(props) {

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
            Please Login before continuing
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ProfileSection;
