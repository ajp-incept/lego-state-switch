import React from 'react';
import Card from '@mui/material/Card';
import { CardHeader } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

function StatusSection(props) {

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardHeader
        title={props.title}
        style={{backgroundColor:props.color,color:props.fontColor}}
        subheader={"Started : "+props.started}
      />
      <CardContent>
             <List>
                <ListItem>
                  <ListItemText
                    primary={<><b>Description:</b> Type X, Mold Y</>}
                  />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary={<><b>Status:</b> Standing still</>}
                        style={{flex: 'inherit',marginRight:'10px'}}
                    />
                    <ListItemIcon>
                        <svg height="24" width="24">
                        <circle cx="12" cy="12" r="12" fill="red" />
                        </svg>
                    </ListItemIcon>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={<><b>Started:</b> 2021-10-10 10:10:10Y</>}
                  />
                </ListItem>
            </List>
      </CardContent>
    </Card>
  );
}

export default StatusSection;
