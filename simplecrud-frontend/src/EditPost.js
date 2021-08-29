
import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import url from './urlConstant';

const axios = require('axios');

export default function EditPost() {

    const [title, settitle] = useState([]);// [] is an Array {} is an Object [{}] Array of objects
    const [description, setdescription] = useState([]);
    const [image, setimage] = useState([]);

    //Hook

    let p = useParams();

    useEffect(()=>{ //Page Load Event
    
        axios.get(url+'/getpostbyid/'+p.post_id).then((d)=>{
            console.log(d.data);
            settitle(d.data[0].title);
            setdescription(d.data[0].description);
            setimage(d.data[0].image);
            //alert('Data Inserted Successfully');
        }).catch((e)=>{
            console.log(e);
        }).finally((all)=>{
            console.log(all);
        });
    },[]);

    function editmypost() {
        //alert("OK");
        console.log(title);
        console.log(description);
        console.log(image);

        let editdata = {
            "_id":p.post_id,
            "title": title,
            "description": description,
            "image": image
        };

        //Api Calling
        //axios.put(url[, data[, config]])
        axios.put(url+'/updatepost',editdata).then((d)=>{
           alert('Data Updated Successfully');
        }).catch((e)=>{
            console.log(e);
        }).finally((all)=>{
            console.log(all);
        });
       
    }

    return (
        <div className="container">
            <NavLink className="btn btn-success" to="/">Go TO Post List Page</NavLink>
            <div className="row">
                <div className="col-6 offset-3">
                    <h1>Edit POst component</h1>
                    {p.post_id}
                    <form>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Post Title</label>
                            <input onChange={(e) => { settitle(e.target.value); }} type="text" className="form-control" id="title" value={title} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Descritpion</label>
                            <textarea onChange={(e) => { setdescription(e.target.value) }} rows="10" cols="" className="form-control" defaultValue={description}></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="image" className="form-label">Image</label>
                            <input onChange={(e) => { setimage(e.target.value) }} type="text" className="form-control" id="image" value={image} />
                        </div>
                        <button onClick={editmypost} type="button" className="btn btn-primary">Update Post</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
