import React, { Component } from 'react';
import axios from "axios";
import ResultCard from "./../../components/ResultCard";
import Delete from "./../../components/Delete";

class Saved extends Component {

	state = {
		articles: []
	}

	componentDidMount() {
    // Load articles after the state changes
		this.loadArticles();
  }

  loadArticles = () => {
    // Get saved articles from the database
  	axios.get("/api/articles")
      .then(res => {
      	console.log(res.data)
      	const box = res.data
      	this.setState({ articles: box })
      })
      .catch(err => console.log(err));
  };

	deleteArticle = id => {
    // Delete the selected article from the database
    axios.delete("/api/articles/" + id)
      .then(res => {
      	console.log(res)
        // Load articles on completion
      	this.loadArticles();
      })
      .catch(err => console.log(err));
  }

	render() {
		return (
			<div className="container">
			  {this.state.articles.map(article => {
          return (
            <ResultCard 
              key={article.title}
              id={article._id}
              headline={article.title}
              link={article.url}
              date={article.date}
            >
              <Delete onClick={() => this.deleteArticle(article._id)} />
            </ResultCard>
          );
        })}
      </div>
		)
	}
} 

export default Saved;