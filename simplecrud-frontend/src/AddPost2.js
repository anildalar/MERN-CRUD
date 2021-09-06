import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import url from './urlConstant';

const axios = require('axios');

export default function AddPost() {
    //Hooks Variables
   
    //const [variable,function] = useState(initialvalue);
    const [title, settitle] = useState('');// [] is an Array {} is an Object [{}] Array of objects
    const [description, setdescription] = useState('');
    const [image, setimage] = useState('');

    function addmypost(){
        //alert("OK");
        console.log(title);
        console.log(description);
        console.log(image);

        //Lets create a formdata object
        //let object = new ClassName();
        let formdata = new FormData();//FormData is a buit-in class in JS

        formdata.append('title',title);
        formdata.append('description',description);
        formdata.append('image',image);

        axios.post(url+'/addpost',formdata).then((d)=>{
            alert('File uploaded successfully');
        }).catch((e)=>{
            alert('Error');
        });

        /* let data = {
           "title":title,
           "description":description,
           "image":image
        };

        //Api Calling

        axios.post(url+'/addpost',data).then((d)=>{
            console.log(d);
            alert('Data Inserted Successfully');
        }).catch((e)=>{
            console.log(e);
        }).finally((all)=>{
            console.log(all);
        }); */

    }

    return (
        <div className="container">
            <Link to="/" className="btn btn-success">Go to Post list Page</Link>
            <div className="row">
                <div className="col-6 offset-3">
                    <h1>Add Post2 Component</h1>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Post Title</label>
                            <input onChange={ (e)=>{ settitle(e.target.value); } } type="text" className="form-control" id="title" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Descritpion</label>
                            <textarea onChange={ (e)=>{ setdescription(e.target.value) } } rows="10" cols="" className="form-control"></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="image" className="form-label">Image</label>
                            <input onChange={ (e)=>{ setimage(e.target.files[0]) } } type="file" className="form-control" id="image" />
                        </div>
                        <button onClick={ addmypost } type="button" className="btn btn-primary">Add Post</button>
                    </form>
                </div>
            </div>

        </div>
    )
}
