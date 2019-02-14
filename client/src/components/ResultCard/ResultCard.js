import React from "react";
import PropTypes from "prop-types";

// Card that displays for each article
function ResultCard(props) {
	return (
		<div className="card mt-3">
			<div className="card-header">
				<h3>{props.headline}</h3>
			</div>
			<div className="card-body">
				<p>
					{`${props.description} `}					
					<a href={props.link} target="_blank"><i>Read More</i></a>
				</p>
				<span>Published on: {props.date.slice(0, 10)}</span>
				
				<div className="float-right">	    
					{props.children}
				</div>	    
			</div>
		</div>
	)
}

ResultCard.propTypes = {
	headline: PropTypes.string,
	description: PropTypes.string,
	link: PropTypes.string,
	date: PropTypes.string,
	children: PropTypes.element.isRequired
}

export default ResultCard;