import React from 'react';
import PropTypes from "prop-types";

function SearchForm(props) {
  return (
    <form onSubmit={props.articleQuery}>
      <div className="form-group">
        <label htmlFor="topic">Topic</label>
        <input
          name="queryValue"
          onChange={props.handleInputChange}
          className="form-control"
          id="topic"
        />               
      </div>

      <SearchButton
        onClick={props.articleQuery}
        queryValue={props.queryValue}
      />
    </form>
  )
}

function SearchButton(props) {
  return props.queryValue === "" ? (
    <button type="button" className="btn float-right" disabled>Search</button>
  ) : (
    <button type="button" className="btn btn-primary float-right" onClick={props.onClick} >Search</button>
  )  
}

SearchForm.propTypes = {
  articleQuery: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  queryValue: PropTypes.string
}

export default SearchForm;