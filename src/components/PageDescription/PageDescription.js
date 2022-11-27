import React from "react";
import PropTypes from "prop-types";

function PageDescription({
  title,
  description,
  primaryContent,
  secondaryContent,
  classes,
}) {
  return (
    <section>
      <h2 className={classes.title}>{title}</h2>
      <h3 className={classes.description}>{description}</h3>
      <p className={classes.primaryContent}>{primaryContent}</p>
      <p className={classes.secondaryContent}>{secondaryContent}</p>
    </section>
  );
}

PageDescription.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  primaryContent: PropTypes.string,
  secondaryContent: PropTypes.string,
  classes: PropTypes.object.isRequired,
};

export default PageDescription;
