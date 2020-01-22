import React from 'react'
// import './myglobal.css'
import  * as classes from './articles.module.css'


export default function Article(props){
    return (
    <div class={classes.box}>
    <div class="row">
    <div class="col-sm-8">
    <p><strong>Title: </strong>{props.title}</p>
    <p><strong>Description: </strong>{props.description}</p>
    <p class="text-muted">{props.author} ({props.publishedAt})</p>
    <a class="btn btn-sm btn-primary mb-2" href={props.url}>Read More</a>
    </div>
    <div class="col-sm-4">
        <img class="img-fluid" src={props.urlToImage} />        
    </div>
    </div>
    </div>
    )
}