import React from "react";
import PropTypes from "prop-types";

const Delete = props => (
  <button type="button" className="btn btn-warning" onClick={props.remove} >Remove</button>
);

Delete.propTypes = {
  remove: PropTypes.func.isRequired
}

export default Delete;