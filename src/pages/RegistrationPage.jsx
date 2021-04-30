import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {useDispatch, useSelector} from "react-redux";
import {setRegistrationsStep} from "../redux/actionCreators/userActions";
import FirstStepRegistration from "../components/RegistrationPageComponents/FirstStepRegistration";
import SecondStepRegistration from "../components/RegistrationPageComponents/SecondStepRegistration";
import ThirdStepRegistration from "../components/RegistrationPageComponents/ThirdStepRegistration";
import {Box} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ['Основная информация', 'Дополнительная информация', 'Еще немного дополнительной информации'];
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return <FirstStepRegistration/>;
        case 1:
            return <SecondStepRegistration />;
        case 2:
            return <ThirdStepRegistration />;
        default:
            return 'Неизвестный шаг';
    }
}

export default function HorizontalLabelPositionBelowStepper() {
    const dispatch = useDispatch();
    const classes = useStyles();
    const activeStep = useSelector(state => state.userReducer.currentRegistrationStep);
    const steps = getSteps();

    const handleNext = () => {
        //setActiveStep((prevActiveStep) => prevActiveStep + 1);
        dispatch(setRegistrationsStep(activeStep + 1))
    };

    const handleBack = () => {
        // setActiveStep((prevActiveStep) => prevActiveStep - 1);
        dispatch(setRegistrationsStep(activeStep - 1))
    };

    const handleReset = () => {
        dispatch(setRegistrationsStep(0))
        // setActiveStep(0);
    };

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>All steps completed</Typography>
                        <Button onClick={handleReset}>Reset</Button>
                    </div>
                ) : (
                    <div>
                        <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                        <Box display={"flex"} justifyContent={"center"}>
                            <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                className={classes.backButton}
                            >
                                Back
                            </Button>
                            <Button variant="contained" color="primary" onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </Box>
                    </div>
                )}
            </div>
        </div>
    );
}
