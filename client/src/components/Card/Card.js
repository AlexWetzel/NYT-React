import React from 'react'

export default function Card(props) {
  return (
    <div className="card">
      <h5 className="card-header">{props.title}</h5>
      <div className="card-body">
        {props.content}
      </div>
    </div>
  )
}
