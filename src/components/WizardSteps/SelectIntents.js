import React, { useState } from "react";
import IntentCard from "../IntentCard/IntentCard";
import { Button, makeStyles, Grid } from "@material-ui/core";
import intents from "../../constants/intents.constants.json";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  inputContainer: {
    display: "flex",
    direction: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0rem 1rem",
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

function SelectIntents({ saveWizardStepSelection }) {
  const classes = useStyles();
  const [selectedIntents, setSelectedIntents] = useState([]);

  function addToSelected(intentId) {
    const selectedIntent = intents.find((intent) => intent.id === intentId);
    setSelectedIntents((selectedIntents) => [
      ...selectedIntents,
      selectedIntent,
    ]);
  }

  function removeFromSelected(intentId) {
    setSelectedIntents((selectedIntents) =>
      selectedIntents.filter((intent) => intent.id !== intentId)
    );
  }

  function selectAll() {
    setSelectedIntents((selectedIntents) => [...intents]);
  }

  function unSelectAll() {
    setSelectedIntents((selectedIntents) => []);
  }

  console.log(selectedIntents);

  return (
    <>
      <div className={classes.inputContainer}>
        <div>
          {selectedIntents.length > 0 &&
            selectedIntents.length < intents.length && (
              <Button
                onClick={unSelectAll}
                className={classes.selectAllButton}
                variant="contained"
              >
                Unselect
              </Button>
            )}
          {selectedIntents.length === intents.length && (
            <Button
              onClick={unSelectAll}
              className={classes.selectAllButton}
              variant="contained"
            >
              Unselect All
            </Button>
          )}
          {selectedIntents.length === 0 && (
            <Button
              onClick={selectAll}
              className={classes.selectAllButton}
              variant="contained"
            >
              Select All
            </Button>
          )}
        </div>
      </div>

      <div className={classes.intentsContainer}>
        <Grid container>
          {intents.map((intent) => (
            <IntentCard
              key={intent.id}
              {...intent}
              removeFromSelected={removeFromSelected}
              addToSelected={addToSelected}
            />
          ))}
        </Grid>
      </div>
    </>
  );
}

SelectIntents.propTypes = {
  saveWizardStepSelection: PropTypes.func.isRequired,
};

export default SelectIntents;
