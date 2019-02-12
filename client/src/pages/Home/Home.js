import React, { Component } from 'react';
import ResultCard from "./../../components/ResultCard";
import Save from "./../../components/Save";
import Card from "./../../components/Card";
import SearchForm from "./../../components/SearchForm";
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
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.articleQuery = this.articleQuery.bind(this);
  }
  
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

        <Card
          title="Search"
          content={
            <SearchForm
              handleInputChange={e => this.handleInputChange(e)}
              articleQuery={e => this.articleQuery(e)}            
            />
          }
        />

      <br />

        <Card 
          title="Search Results"
          content={this.props.articles.map(article => {
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
        />
      </div>
    )
  }
}

export default connect(mapStateToProps, actionCreators)(Home);