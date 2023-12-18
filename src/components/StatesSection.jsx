import React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import StepButton from "@mui/material/StepButton"; 
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const objectSteps = [
    {
        name: 'Standing still',
        color: 'red',
        fontColor: 'white',
    },
    {
        name: 'Starting Up',
        color: 'yellow',
        fontColor: 'black',
    },
    {
        name: 'Producing normally',
        color: 'green',
        fontColor: 'white',
    },
    {
        name: 'Winding down',
        color: 'yellow',
        fontColor: 'black',
    }
]

function Circle(props) {
    return (
        <svg height="24" width="24">
        <circle cx="12" cy="12" r="12" fill={props.color} />
        </svg>
    )
}

function StatesSection(props) {
    const [activeStep, setActiveStep] = React.useState(0); 
    const [nextStep, setNextStep] = React.useState("Starting up");
    const [nextStepColor, setNextStepColor] = React.useState("yellow");
    const [nextStepColorFont, setnextStepColorFont] = React.useState("black");
    const [open, setOpen] = React.useState(false);

  
    const handleStep = (step) => () => { 
        setActiveStep(step); 
    }; 

    const goNextStep = () => {
        if (activeStep === 0) {
            setActiveStep(1);
            props.setHeaderColor(objectSteps[1].color);
            setNextStep(objectSteps[2].name);
            setNextStepColor(objectSteps[2].color);
            setnextStepColorFont(objectSteps[2].fontColor);            
        } else if (activeStep === 1) {
            setActiveStep(2);
            props.setHeaderColor(objectSteps[2].color);
            setNextStep(objectSteps[3].name);
            setNextStepColor(objectSteps[3].color);
            setnextStepColorFont(objectSteps[3].fontColor);  
        } else if (activeStep === 2) {
            setActiveStep(3);
            props.setHeaderColor(objectSteps[3].color);
            setNextStep(objectSteps[0].name);
            setNextStepColor(objectSteps[0].color);
            setnextStepColorFont(objectSteps[0].fontColor);  
        } else if (activeStep === 3) {
            setActiveStep(0);
            props.setHeaderColor(objectSteps[0].color);
            setNextStep(objectSteps[1].name);
            setNextStepColor(objectSteps[1].color);
            setnextStepColorFont(objectSteps[1].fontColor);  
        }
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleConfirm = () => {
        goNextStep();
        props.login();
        setOpen(false);
    };

    return (
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} >
                    <Box sx={{ width: "80%", margin: "auto" }}> 
                        <Stepper nonLinear activeStep={activeStep}> 
                            {objectSteps.map((obj, index) => ( 
                                <Step 
                                    style={(index === activeStep) ? {opacity:"1"}:{opacity:"0.5"}}
                                    key={obj.name}> 
                                    <StepButton
                                        disabled={!props.isLogged}
                                        icon={<><Circle color={obj.color}/></>} 
                                        color="inherit" 
                                        key={obj.name}
                                        onClick={handleStep(index)}> 
                                        {obj.name} 
                                    </StepButton> 
                                </Step> 
                            ))} 
                        </Stepper> 
                    </Box> 
                </Grid>
                <Grid item xs={12}>
                    <Box display="flex" justifyContent="center">
                    <Button 
                    variant="contained" 
                    style={{backgroundColor: nextStepColor, 
                        color: nextStepColorFont,
                        opacity: (props.isLogged) ? "1" : "0.5"}}
                    disabled={!props.isLogged}
                    onClick={(e) => handleClickOpen()}>Next: {nextStep}</Button>
                    </Box>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">{"Confirm State Change"}</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Are you sure you want to change the state?
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>No</Button>
                            <Button onClick={handleConfirm} autoFocus>Yes</Button>
                        </DialogActions>
                    </Dialog>
                </Grid>
            </Grid>
    );
}

export default StatesSection;
