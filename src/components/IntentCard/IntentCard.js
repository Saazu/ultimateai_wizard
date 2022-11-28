import React, { useState } from "react";
import { makeStyles, Grid } from "@material-ui/core";
import PropTypes from "prop-types";
function IntentCard({
  name,
  description,
  trainingData,
  addToSelected,
  removeFromSelected,
  id,
}) {
  const classes = useStyles();
  const [selected, setSelected] = useState(false);

  function clickIntent() {
    if (selected) {
      removeFromSelected(id);
    } else {
      addToSelected(id);
    }
    setSelected((selected) => !selected);
  }

  return (
    <Grid
      role="button"
      onClick={clickIntent}
      container
      className={classes.container}
    >
      <Grid item xs={6}>
        <p className={classes.name}>Name: {name}</p>
        <p className={classes.description}>{description}</p>
      </Grid>
      <Grid item xs={6}>
        <p className={classes.name}>Examples: </p>
        <p className={classes.description}>
          {trainingData?.expressions[0].text} or{" "}
          {trainingData?.expressions[1].text}
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
  trainingData: PropTypes.object.isRequired,
};

export default IntentCard;

const useStyles = makeStyles((theme) => ({
  container: {
    boxShadow: "0px 0px 4px -1px rgba(0, 0, 0, 0.2)",
    borderRadius: "6px",
    padding: "0.2rem 1rem",
    margin: "1rem",
    "&:hover": {
      cursor: "pointer",
    },
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
    color: "#6B7B8A",
  },
}));
