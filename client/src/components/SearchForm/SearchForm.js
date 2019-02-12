import React from 'react'

export default function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="topic">Topic</label>
        <input
          name="topicQuery"
          onChange={props.handleInputChange}
          className="form-control"
          id="topic"
        />               
      </div>


      <button
        onClick={props.articleQuery}
        className="btn btn-primary"
      >Search</ button>
    </form>
  )
}
