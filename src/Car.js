import React from 'react'
export default function Car(props){
    return (
    <div>
    <h1>I am {props.brand} car</h1>
    <h2>Make: {props.make}</h2>
    </div>
    )
}