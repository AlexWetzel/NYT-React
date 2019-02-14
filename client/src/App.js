import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import Saved from "./pages/Saved";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { connect } from "react-redux";
import { getSavedArticles } from "./js/actions/index";

class App extends Component {
  componentDidMount() {
    // Load articles after the state changes
    this.props.getSavedArticles();
  }

  render() {
    return (
      <Router>
        <div
          style={{
            minHeight: "100vh",
            position: "relative",
            overflow: "auto",
            paddingBottom: "100px"
          }}
        >
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/saved" component={Saved} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

App.propTypes = {
	getSavedArticles: PropTypes.func.isRequired
}

export default connect(
  null,
  { getSavedArticles }
)(App);
