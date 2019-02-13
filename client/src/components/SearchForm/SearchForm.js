import React from 'react'

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

export default SearchForm