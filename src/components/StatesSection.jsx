import React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import StepButton from "@mui/material/StepButton"; 
import Grid from '@mui/material/Grid';

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
  
    const handleStep = (step) => () => { 
        setActiveStep(step); 
    }; 

    const goNextStep = () => {
        console.log(activeStep);
        if (activeStep === 0) {
            setActiveStep(1);
            setNextStep("Producing normally");
            setNextStepColor("green");
            setnextStepColorFont("white");
        } else if (activeStep === 1) {
            setActiveStep(2);
            setNextStep("Winding down");
            setNextStepColor("yellow");
            setnextStepColorFont("black");
        } else if (activeStep === 2) {
            setActiveStep(3);
            setNextStep("Standing Still");
            setNextStepColor("red");
            setnextStepColorFont("white");
        } else if (activeStep === 3) {
            setActiveStep(0);
            setNextStep("Starting Up");
            setNextStepColor("yellow");
            setnextStepColorFont("black");
        }
    }

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
                    onClick={(e) => goNextStep()}>Next: {nextStep}</Button>
                    </Box>
                </Grid>
            </Grid>
    );
}

export default StatesSection;
