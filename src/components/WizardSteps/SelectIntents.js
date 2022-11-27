import React from "react";
import IntentCard from "../IntentCard/IntentCard";
import { Button, Input, makeStyles, Grid } from "@material-ui/core";
import intents from "../../constants/intents.constants.json";

const useStyles = makeStyles((theme) => ({
  inputContainer: {
    display: "flex",
    direction: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchInputContainer: {
    width: "50%",
  },
  searchInput: {
    width: "100%",
  },
  selectAllButton: {
    height: "42px",
  },
  intentsContainer: {
    marginTop: "2rem",
  },
}));

function SelectIntent() {
  const classes = useStyles();

  function clickIntent() {
    console.log("Clicked");
  }

  return (
    <>
      <div className={classes.inputContainer}>
        <div>
          <Button className={classes.selectAllButton} variant="contained">
            Select All
          </Button>
        </div>
        <div className={classes.searchInputContainer}>
          <Input
            id="search-intent"
            label="Search intents"
            variant="outlined"
            className={classes.searchInput}
            placeholder="Search intents by name..."
          />
        </div>
      </div>

      <div className={classes.intentsContainer}>
        <Grid container>
          {intents.map((intent) => (
            <IntentCard
              key={intent.id}
              {...intent}
              onClickHandler={clickIntent}
            />
          ))}
        </Grid>
      </div>
    </>
  );
}

export default SelectIntent;
