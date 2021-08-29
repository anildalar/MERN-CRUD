import React from 'react';
import { Link,NavLink } from 'react-router-dom';

export default function PostItem({post}) {
    return (
        <div className="row mt-5 mb-5 border-bottom">
            <div className="col-4">
                <img width="200" src={post.image} />
            </div>
            <div className="col-6">
                <h1>{post.title}</h1>
                <p>{post.description}</p>
            </div>
            <div className="col-2">
                <NavLink to={ 'editpost/'+post._id } className="btn btn-success me-3">Edit</NavLink>
                <Link to={`deletepost/${post._id}`} className="btn btn-danger">Delete</Link>
            </div>
            
            
        </div>
    )
}
