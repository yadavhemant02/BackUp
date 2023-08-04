import React, { useState } from "react";
import Heder from "./Heder";
import { useDispatch } from "react-redux";
import { addpost } from "../redux/action"; 
import { useNavigate } from "react-router-dom";
import shortId from "shortid";
import Swal from 'sweetalert2'



const AddPost=()=>{

    const dispatch = useDispatch();

    const [postdata,setPostdata] = useState({
        title:'',
        content:'',
        categories:''
        
    })

    let name, value;
    const HandlerInput=(e)=>{
       name = e.target.name
       value = e.target.value
        setPostdata({...postdata,[name]:value})
    }

    const navigate = useNavigate()
    const senddata=()=>{
        Object.assign(postdata,{id:shortId.generate()})
        Object.assign(postdata,{Like:"False"})
        dispatch(addpost(postdata))
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your Data Add Successfully ..!',
            showConfirmButton: false,
            timer: 1500
          })
          setTimeout(()=>{

              navigate('/')
          },1000)
            console.log(postdata)
    }

    function move(){
       navigate('/')
    }
    return(
       
        <div>
          <nav class="navbar navbar-inverse">
               <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="/allpost">Back to Index</a>
                </div>
    
               </div>
            </nav>
            <button onClick={move}  className="btn btn-warning">
            <span class="glyphicon glyphicon-arrow-left"></span> Back To Index</button>
            <h1>Blog SomeThing</h1>
          <div className="hemant">
          <form>
             <div class="form-group">
                 <label for="email">Title:</label>
                     <input type="text" class="form-control" name="title"
                     placeholder="Eter your Title"
                     value={postdata.title}
                     onChange={HandlerInput} />
             </div>

             <div class="form-group">
                 <label for="email">Categories:</label>
                     <input type="text" class="form-control" name="categories"
                     placeholder="Enter your Categories"
                     value={postdata.categories}
                     onChange={HandlerInput} />
             </div>
            
             <div class="form-group">
                 <label for="pwd">Content:</label>
                    <textarea class="form-control" rows="5" name="content" 
                    placeholder="Enter your ontent .......!"
                    value={postdata.content}
                    onChange={HandlerInput}/>
             </div>
  
                 <button type="button" class="btn btn-default" onClick={senddata}>Submit</button>
             </form>

          </div>
        </div>
    )

}

export default AddPost