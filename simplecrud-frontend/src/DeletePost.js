import axios from 'axios';
import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function DeletePost() {

    let p = useParams();
    useEffect(() => { //Page Load Event
        //axios.delete(url[, config])
        axios.delete('http://localhost:3000/deletepost/'+p.post_id).then((d)=>{
            alert('data Deleted Succesfully');
        }).catch((e)=>{

        }).finally((all)=>{

        });
    }, [])

    return (
        <div>
            <Link className="btn btn-success" to="/">Go to Post List Page</Link>
            <h1>Delete Post</h1>
            {p.post_id}
        </div>
    )
}
