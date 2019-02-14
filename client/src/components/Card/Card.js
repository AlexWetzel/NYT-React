import React from 'react';
import PropTypes from "prop-types";

export default function Card(props) {
  return (
    <div className="card">
      <h5 className="card-header">{props.title}</h5>
      <div className="card-body">
        {props.content}
      </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
}
