import React from "react";
import SideBanner from "../components/SideBanner/SideBanner";
import WelcomeWizard from "../components/WelcomeWizard/WelcomeWizard";
import { Grid } from "@mui/material";

function WelcomePage() {
  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <div>
            <SideBanner />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div>
            <WelcomeWizard />
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default WelcomePage;
