import React from 'react'
export default function Article(props){
    return (
    <div>
    <h1>{props.title}</h1>
    <h2>Author:{props.author}</h2>
    </div>
    )
}