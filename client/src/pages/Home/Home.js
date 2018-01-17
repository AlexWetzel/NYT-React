import React, { Component } from 'react';
import ResultCard from "./../../components/ResultCard";
import Save from "./../../components/Save";
import axios from 'axios';

class Home extends Component {
  
  state = {
    topicQuery: "",
    queryStartYear: "",
    queryEndYear: "",
    articles: []
  };

  articleQuery = event => {
    event.preventDefault();    
    axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json",{
      params: {
        'api-key': "b8f0bfe73f7d4d5b975c40eb6f67b2e4",
        'q': this.state.topicQuery
        // ,
        // 'begin_date': this.state.queryStartYear + '0101',
        // 'end_date': this.state.queryEndYear + '0101'
      }
    }).then(response => {  
        const articles = [];    
        console.log(response.data.response.docs)
        response.data.response.docs.map(article => {
          if(article.pub_date) {
            article = {
              title: article.headline.main,
              date: article.pub_date,
              url: article.web_url
            }
            articles.push(article);
          }
        });
        this.setState({ articles: articles })
        console.log(this.state.articles);
      })
      .catch(err => console.log(err));

  }

  saveArticle = article => {
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

/*  Unused feature: Start date and end date search

              <div className="form-group">
                <label htmlFor="startDate">Start Year</label>
                <input
                  name="queryStartYear"
                  onChange={this.handleInputChange}
                  className="form-control"
                  id="startDate"
                />              
              </div>
              <div className="form-group">
                <label htmlFor="endDate">End Year</label>
                <input
                  name="queryEndYear"
                  onChange={this.handleInputChange}
                  className="form-control"
                  id="endDate"
                />                
              </div>
*/