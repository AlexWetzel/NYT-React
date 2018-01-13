import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="card">
          <h5 className="card-header">Search</h5>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">Topic</label>
                <input className="form-control" id="topic" />               
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1">Start Year</label>
                <input className="form-control" id="startDate" />              
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1">End Year</label>
                <input className="form-control" id="endDate" />                
              </div>

              <button className="btn btn-primary">Search</ button>
            </form>
          </div>
        </div>

        <br />

        <div className="card">
          <h5 className="card-header">Results</h5>
          <div className="card-body">

          </div>
        </div>

        <br />

        <div className="card">
          <h5 className="card-header">Saved Articles</h5>
          <div className="card-body">

          </div>
        </div>

      </div>

    );
  }
}

export default App;
