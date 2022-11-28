import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import PageDescription from "../PageDescription/PageDescription";
import { wizardPageDescription } from "../../constants/setup.constants";
import SelectIntents from "../WizardSteps/SelectIntents";
import WizardLineStepper from "../Stepper/HorizontalLineStepper";
import { wizardSteps } from "../../constants/setup.constants";
import useWizard from "../../hooks/useWizard";
import SideBanner from "../SideBanner/SideBanner";

function WelcomeWizard() {
  const classes = useStyles();
  const {
    goBack,
    goForward,
    resetWizard,
    activeStep,
    saveWizardStepSelection,
  } = useWizard();

  return (
    <div>
      <Grid container className={classes.page}>
        <Grid
          item
          xs={false}
          sm={false}
          md={5}
          className={classes.sideBannerContainer}
        >
          <SideBanner
            title={wizardPageDescription[activeStep].title}
            description={wizardPageDescription[activeStep].description}
            primaryContent={wizardPageDescription[activeStep].primaryContent}
            imageSrc="/assets/images/wizard.webp"
            imageAlt="Wizard holding a book open"
          />
        </Grid>

        <Grid item xs={12} sm={12} md={7} className={classes.wizardContainer}>
          <div className={classes.title}>
            <PageDescription
              title={wizardPageDescription[activeStep].title}
              description={wizardPageDescription[activeStep].description}
              classes={classes}
            />
          </div>
          {activeStep === 0 && (
            <SelectIntents saveWizardStepSelection={saveWizardStepSelection} />
          )}
          <div className={classes.stepper}>
            <WizardLineStepper
              activeStep={activeStep}
              wizardSteps={wizardSteps}
              handleBack={goBack}
              handleNext={goForward}
              handleReset={resetWizard}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default WelcomeWizard;

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
  sideBannerContainer: {
    backgroundColor: "pink",
    padding: "4rem",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  wizardContainer: {
    height: "100vh",
    padding: "4rem 4rem 0rem 4rem",
    overflow: "scroll",
    [theme.breakpoints.down("sm")]: {
      padding: "1rem",
      height: "100vh",
    },
  },
  page: {
    [theme.breakpoints.down("sm")]: {
      backgroundImage: "url('/assets/images/mobileBackground.webp')",
    },
  },
}));
