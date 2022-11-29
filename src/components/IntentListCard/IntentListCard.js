import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import PropTypes from "prop-types";
function IntentCard({
  id,
  name,
  description,
  examples,
  addToSelected,
  removeFromSelected,
  selected,
}) {
  const classes = useStyles();

  function clickIntent() {
    if (selected) {
      removeFromSelected(id);
    } else {
      addToSelected(id);
    }
  }

  return (
    <Grid
      role="button"
      onClick={clickIntent}
      container
      className={
        selected ? classes.selectedContainer : classes.unSelectedcontainer
      }
    >
      <Grid item xs={6}>
        <p className={classes.name}>Name: {name}</p>
        <p className={classes.description}>{description}</p>
      </Grid>
      <Grid item xs={6}>
        <p className={classes.name}>Examples: </p>
        <p className={classes.description}>
          {examples[0].text} or {examples[1].text}
        </p>
      </Grid>
    </Grid>
  );
}

IntentCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  addToSelected: PropTypes.func.isRequired,
  removeFromSelected: PropTypes.func.isRequired,
  examples: PropTypes.array.isRequired,
};

export default IntentCard;

const useStyles = makeStyles((theme) => ({
  unSelectedcontainer: {
    boxShadow: "0px 0px 4px -1px rgba(0, 0, 0, 0.2)",
    borderRadius: "6px",
    padding: "0.2rem 1rem",
    margin: "1rem",
    "&:hover": {
      cursor: "pointer",
    },
  },
  selectedContainer: {
    boxShadow: "0px 0px 4px -1px rgba(0, 0, 0, 0.2)",
    borderRadius: "6px",
    padding: "0.2rem 1rem",
    margin: "1rem",
    "&:hover": {
      cursor: "pointer",
    },
    backgroundColor: "#E8E8E8",
  },
  name: {
    padding: "0rem 1rem",
    fontSize: "14px",
    fontWeight: 700,
  },
  description: {
    padding: "0rem 1rem",
    fontSize: "12px",
    fontWeight: 400,
    color: "#667685",
  },
}));
