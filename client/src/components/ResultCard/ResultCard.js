import React from "react";

const ResultCard = props =>
	<div className="card">
	  <div className="card-body">
	    <h2>{props.headline}</h2>
	    	{props.children}
	    <a href={props.link} className="btn btn-primary">Link</a>
	  </div>
	</div>;

export default ResultCard;