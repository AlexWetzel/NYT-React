import React, { Component } from 'react';
import ResultCard from "./../../components/ResultCard";
import Delete from "./../../components/Delete";
import { connect } from 'react-redux';
import { getSavedArticles, removeArticle } from '../../js/actions/index';

const mapStateToProps = state => {
  return { savedArticles: state.savedArticles }
}

const actionCreators = {
  getSavedArticles,
  removeArticle
}

class Saved extends Component {

	componentDidMount() {
    // Load articles after the state changes
		this.props.getSavedArticles();
  }

	render() {
		return (
			<div className="container">
			  {this.props.savedArticles.map(article => {
          return (
            <ResultCard 
              key={article.title}
              id={article._id}
              headline={article.title}
              link={article.url}
              date={article.date}
            >
              <Delete onClick={() => this.props.removeArticle(article._id)} />
            </ResultCard>
          );
        })}
      </div>
		)
	}
} 
export default connect(mapStateToProps, actionCreators)(Saved);