import React from "react";
import PropTypes from "prop-types";

function Save(props) {
  return props.isSaved === true ? (
    <button type="button" className="btn btn-danger" disabled>Saved</button>
  ) : (
    <button type="button" className="btn btn-primary" onClick={props.save} >Save</button>
  )  
}

Save.propTypes = {
  isSaved: PropTypes.bool.isRequired,
  save: PropTypes.func.isRequired
}

export default Save;