import React, { Component } from 'react';
import ResultCard from "./../../components/ResultCard";
import Save from "./../../components/Save";
import axios from 'axios';

class Home extends Component {
  
  state = {
    topicQuery: "",
    articles: []
  };

   articleQuery = event => {
    // Query the NYT API, then update the state with the returned articles
    event.preventDefault();  
    
    
    axios.get("https://newsapi.org/v2/everything",
    {
      params: {
        'apiKey': process.env.REACT_APP_API_KEY,
        'q': this.state.topicQuery,
        'pageSize': 10
      }
    }
    ).then(response => {  
        const articles = [];    

        console.log(response);
        response.data.articles.forEach(article => {
          // Filter articles from the response, then push them to an array
          // If the result had a publish date, it is an article (as opposed to a 'topic')
            // Take desired properties from the results
          article = {
            title: article.title,
            date: article.publishedAt,
            url: article.url
          }
          articles.push(article);
        });
        this.setState({ articles: articles });
      })
      .catch(err => console.log(err));
  }


  saveArticle = article => {
  //Save the article to the database
    axios.post("/api/articles", article)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="container">
        <div className="card">
          <h5 className="card-header">Search</h5>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="topic">Topic</label>
                <input
                  name="topicQuery"
                  onChange={this.handleInputChange}
                  className="form-control"
                  id="topic"
                />               
              </div>


              <button
                onClick={ this.articleQuery }
                className="btn btn-primary"
              >Search</ button>
            </form>
          </div>
        </div>

      <br />

        <div className="card">
          <h5 className="card-header">Results</h5>
          <div className="card-body">
            {this.state.articles.map(article => {
              return (
                <ResultCard 
                  key={article.title}
                  headline={article.title}
                  link={article.url}
                  date={article.date}
                >
                  <Save onClick={() => this.saveArticle(article)} />
                </ResultCard>
              );
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Home;