import React from "react";

// Card that displays for each article
const ResultCard = props =>
	<div className="card">
	  <div className="card-header">
	  	<h3>{props.headline}</h3>
	  </div>
	  <div className="card-body">
	  	<span>Published on: {props.date.slice(0, 10)}</span>
	  	<div className="float-right">	    
	    	{props.children}
	    	<a href={props.link} className="btn btn-primary">Link</a>
	    </div>	    
	  </div>
	</div>;

export default ResultCard;