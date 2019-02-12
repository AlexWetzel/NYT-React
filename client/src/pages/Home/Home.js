import React, { Component } from 'react';
import ResultCard from "./../../components/ResultCard";
import Save from "./../../components/Save";
import { connect } from 'react-redux';
import { getArticles, saveArticle } from '../../js/actions/index';

const mapStateToProps = state => {
  return { articles: state.articles };
}

const actionCreators = {
  getArticles,
  saveArticle
}


class Home extends Component {
  
  state = {
    topicQuery: "",
    articles: []
  };

   articleQuery = event => {
    // Query the NYT API, then update the state with the returned articles
    event.preventDefault();

    const params = {
      'apiKey': process.env.REACT_APP_API_KEY,
      'q': this.state.topicQuery,
      'pageSize': 10
    }
    
    this.props.getArticles(params);
  }


  // saveArticle = article => {
  // //Save the article to the database
  //   this.props.saveArticle(article);
  //   // axios.post("/api/articles", article)
  //   //   .then(res => console.log(res))
  //   //   .catch(err => console.log(err));
  // }

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
            {this.props.articles.map(article => {
              return (
                <ResultCard 
                  key={article.title}
                  headline={article.title}
                  link={article.url}
                  date={article.date}
                >
                  <Save onClick={() => this.props.saveArticle(article)} />
                </ResultCard>
              );
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, actionCreators)(Home);