import React from "react";
import SideBanner from "../../components/SideBanner/SideBanner";
import WelcomeWizard from "../../components/WelcomeWizard/WelcomeWizard";
import { Grid, makeStyles } from "@material-ui/core";
import { wizardPageDescription } from "../../constants/setup.constants";

const useStyles = makeStyles((theme) => ({
  page: {
    [theme.breakpoints.down("sm")]: {
      backgroundImage: "url('/assets/images/mobileBackground.webp')",
    },
  },
  sideBannerContainer: {
    backgroundColor: "pink",
    height: "93vh",
    padding: "4rem",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  wizardContainer: {
    height: "90vh",
    padding: "4rem 4rem 0rem 4rem",
    overflow: "scroll",
    [theme.breakpoints.down("sm")]: {
      padding: "1rem",
      height: "100vh",
    },
  },
}));

function WelcomePage() {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.page}>
        <Grid item xs={false} sm={false} md={5}>
          <div className={classes.sideBannerContainer}>
            <SideBanner
              title={wizardPageDescription.title}
              description={wizardPageDescription.description}
              primaryContent={wizardPageDescription.primaryContent}
              imageSrc="/assets/images/wizard.webp"
              imageAlt="Wizard holding a book open"
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={7}>
          <div className={classes.wizardContainer}>
            <WelcomeWizard />
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default WelcomePage;
