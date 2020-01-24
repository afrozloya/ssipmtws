import React from 'react'
// import './myglobal.css'
import  * as classes from './articles.module.css'


export default function Article(props){
    return (
    <div className={classes.box}>
    <div className="row">
    <div className="col-sm-8">
    <p><strong>Title: </strong>{props.title}</p>
    <p><strong>Description: </strong>{props.description}</p>
    <p className="text-muted">{props.author} ({props.publishedAt})</p>
    <a className="btn btn-sm btn-primary mb-2" href={props.url}>Read More</a>
    </div>
    <div className="col-sm-4">
        <img className="img-fluid" src={props.urlToImage} />        
    </div>
    </div>
    </div>
    )
}