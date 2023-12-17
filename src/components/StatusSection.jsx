import React from 'react';
import Card from '@mui/material/Card';
import { CardHeader } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import StatesSection from './StatesSection';

function StatusSection(props) {

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardHeader
        title={"Order: "+props.title}
        style={{backgroundColor:props.color,color:props.fontColor}}
        subheader={"Started : "+props.started}
        subheaderTypographyProps={{style:{color: 'white'}}}
      />
      <CardContent>
             <List>
                <ListItem>
                  <ListItemText
                    primary={<><b>Description:</b> {props.description}</>}
                  />
                </ListItem>
                <ListItem style={{display:"block"}}>
                    <ListItemText
                        primary={<><b>Status:</b></>}
                        style={{flex: 'inherit',marginRight:'10px'}}
                    />
                    <StatesSection 
                      title="States"
                      color="secondary"
                      fontColor="fontcolor"
                      isLogged={props.isLogged}
                      />
                </ListItem>
            </List>
      </CardContent>
    </Card>
  );
}

export default StatusSection;
