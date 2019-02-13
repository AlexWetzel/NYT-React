import React from "react";

function Save(props) {
  console.log(props.isSaved)
  return props.isSaved === true ? (
    <button type="button" className="btn btn-danger" onClick={props.onClick}  disabled>Saved</button>
  ) : (
    <button type="button" className="btn btn-primary" onClick={props.onClick} >Save</button>
  )  
}
export default Save;