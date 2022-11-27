import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: "2rem",
  },
  instructions: {
    margin: "2rem 0rem",
  },
  buttonGroup: {
    paddingBottom: "1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "pink",
  },
}));

function getSteps(steps) {
  return steps.map((step) => step.description);
}

function HorizontalLinearStepper({
  wizardSteps,
  activeStep,
  handleNext,
  handleBack,
  handleReset,
}) {
  const classes = useStyles();
  const steps = getSteps(wizardSteps);

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <div className={classes.buttonGroup}>
        {activeStep === steps.length ? (
          <div>
            <Button className={classes.button} onClick={handleReset}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button
                className={classes.button}
                variant="contained"
                color="inherit"
                onClick={handleNext}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default HorizontalLinearStepper;
