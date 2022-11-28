import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";
import PageDescription from "../PageDescription/PageDescription";

function SideBanner({
  title,
  description,
  primaryContent,
  secondaryContent,
  imageSrc,
  imageAlt,
}) {
  const classes = useStyles();

  return (
    <section className={classes.container}>
      <PageDescription
        title={title}
        description={description}
        primaryContent={primaryContent}
        secondaryContent={secondaryContent}
        classes={classes}
      />
      {imageSrc && (
        <img src={imageSrc} alt={imageAlt} className={classes.image} />
      )}
    </section>
  );
}

SideBanner.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  primaryContent: PropTypes.string,
  secondaryContent: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
};

export default SideBanner;

const useStyles = makeStyles((theme) => ({
  container: {},
  title: {
    lineHeight: "28px",
  },
  description: {
    lineHeight: "24px",
  },
  primaryContent: {
    lineHeight: "20px",
  },
  secondaryContent: {
    lineHeight: "20px",
  },
  image: {
    position: "fixed",
    bottom: "4rem",
    left: "28%",
    height: "12rem",
    width: "6rem",
  },
}));
