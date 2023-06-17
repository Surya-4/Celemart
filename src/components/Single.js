import React from 'react'

function Single(props) {

  return (
    <>
    <div className="my-3">
        <div className="card">
            <img src={props.image} alt="" />
            <p>{props.category}</p>
            <p>{props.title}</p>
            <p>&#8377; {props.price} /-</p>
        </div>
    </div>
    </>
  )
}

export default Single;