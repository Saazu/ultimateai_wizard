import React, { useState } from "react";
import IntentListCard from "../IntentListCard/IntentListCard";
import { Button, makeStyles, Grid } from "@material-ui/core";
import intents from "../../constants/intents.constants.json";
import PropTypes from "prop-types";

function SelectIntents({ stepIndex, saveWizardStepSelection }) {
  const classes = useStyles();
  const [selectedIntents, setSelectedIntents] = useState([]);

  /**
   * @param {String} intentId
   */
  function addToSelected(intentId) {
    if (selectedIntents.find((intent) => intent.id === intentId)) {
      return;
    }
    const newSelectedIntent = intents.find((intent) => intent.id === intentId);
    const newSelection = [...selectedIntents, newSelectedIntent];
    saveWizardStepSelection(stepIndex, [...newSelection]);
    setSelectedIntents((selectedIntents) => [...newSelection]);
  }

  /**
   * @param {String} intentId
   */
  function removeFromSelected(intentId) {
    const updatedIntentsSelection = selectedIntents.filter(
      (intent) => intent.id !== intentId
    );
    saveWizardStepSelection(stepIndex, [...updatedIntentsSelection]);
    setSelectedIntents((selectedIntents) => [...updatedIntentsSelection]);
  }

  function selectAll() {
    saveWizardStepSelection(stepIndex, [...intents]);
    setSelectedIntents((selectedIntents) => [...intents]);
  }

  function unSelectAll() {
    saveWizardStepSelection(stepIndex, []);
    setSelectedIntents((selectedIntents) => []);
  }

  return (
    <>
      <div className={classes.inputContainer}>
        <div>
          <Button
            onClick={unSelectAll}
            className={classes.selectionButton}
            variant="contained"
            disabled={selectedIntents.length === 0}
          >
            Unselect All
          </Button>
          <Button
            onClick={selectAll}
            className={classes.selectionButton}
            variant="contained"
            disabled={selectedIntents.length === intents.length}
          >
            Select All
          </Button>
        </div>
      </div>

      <div className={classes.intentsContainer}>
        <Grid container>
          {intents.map((intent) => (
            <IntentListCard
              key={intent.id}
              id={intent.id}
              name={intent.name}
              description={intent.description}
              examples={intent.trainingData.expressions}
              removeFromSelected={removeFromSelected}
              addToSelected={addToSelected}
              selected={Boolean(
                selectedIntents.find((i) => i.id === intent.id)
              )}
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
  selectionButton: {
    height: "42px",
    marginRight: "1rem",
    fontSize: "0.75rem",
  },
  intentsContainer: {
    marginTop: "2rem",
  },
}));
