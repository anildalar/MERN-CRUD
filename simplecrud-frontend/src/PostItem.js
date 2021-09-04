import React from 'react';
import { Link,NavLink,useHistory } from 'react-router-dom';
import url from './urlConstant';
const axios = require('axios');
export default function PostItem({post}) {
    const history = useHistory();
    let deletePost= (id) => {
        //alert('ok'+id);
        axios.delete(url+'/deletepost/'+id).then((d)=>{
            console.log(d);
            alert('Data Deleted Successfully');
            history.go(0);
        }).catch((e)=>{
            console.log(e);
        }).finally((all)=>{
            console.log(all);
        });
    }
    return (
        <div className="row mt-5 mb-5 border-bottom">
            <div className="col-4">
                <img width="200" src={url+'/uploads/'+post.image} />
            </div>
            <div className="col-6">
                <h1>{post.title}</h1>
                <p>{post.description}</p>
            </div>
            <div className="col-2">
                <NavLink to={ 'editpost/'+post._id } className="btn btn-success me-3">Edit</NavLink>
                <button onClick={()=>{deletePost(post._id)}} className="btn btn-danger">Delete</button>
            </div>
        </div>
    )
}
