import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import PostItem from './PostItem';
import url from './urlConstant';

const axios = require('axios');

export default function PostList() {
    //Lets Create Hooks Variable

    //const [state, setstate] = useState(initialState);

    const [postitems, setPostItems] = useState([]);
    //postitems is a Array of Object

    useEffect(() => {
        axios.get(url+'/getposts').then((d)=>{
            
            console.log(d.data);
            setPostItems(d.data);
        }).catch((e)=>{
            console.log(e);
        }).finally((all)=>{

        });
    }, []);

    
    //Array.map()
    let newpostitems = postitems.map((post)=>{
        return(
            <div>
                <PostItem post={post}  />
            </div>
        );
    });

    return (
        <div>
            <NavLink to="/savepost" className="btn btn-success">Add New Post</NavLink>
            <h1>PostLIst Component</h1>
            { newpostitems }
        </div>
    )
}
