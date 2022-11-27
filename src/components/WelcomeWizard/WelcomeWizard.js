import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import PageDescription from "../PageDescription/PageDescription";
import { wizardPageDescription } from "../../constants/setup.constants";
import SelectIntent from "../WizardSteps/SelectIntents";
import WizardLineStepper from "../Stepper/HorizontalLineStepper";
import { wizardSteps } from "../../constants/setup.constants";

const useStyles = makeStyles((theme) => ({
  title: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  stepper: {
    bottom: "0%",
    position: "sticky",
    backgroundColor: "white",
    [theme.breakpoints.down("sm")]: {
      bottom: "5%",
    },
  },
}));

function WelcomeWizard() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    console.log("Go to next step");
    // setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div>
      <div className={classes.title}>
        <PageDescription
          title={wizardPageDescription.title}
          description={wizardPageDescription.description}
          classes={classes}
        />
      </div>
      {activeStep === 0 && <SelectIntent />}
      <div className={classes.stepper}>
        <WizardLineStepper
          activeStep={activeStep}
          wizardSteps={wizardSteps}
          handleBack={handleBack}
          handleNext={handleNext}
          handleReset={handleReset}
        />
      </div>
    </div>
  );
}

export default WelcomeWizard;
