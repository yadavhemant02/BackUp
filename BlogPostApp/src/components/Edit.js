import React, { useState } from "react";
import Heder from "./Heder";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editPost } from "../redux/action";
import Swal from 'sweetalert2'


const Edit=()=>{
   
    
    const {  id} = useParams()

    const HookData = useSelector((state)=>{
        // return {postll:state.post}
         let postDetail = state.post.items.filter((post)=>post.id==id)
             return{
                 
                 ...state,
                 posth:(postDetail.length>0)? postDetail[0]:{}
             }
         
     })

    const [postdata,setPostdata] = useState({
        title:HookData.posth.title,
        content:HookData.posth.content,
        categories:HookData.posth.categories
    })
    
    let name, value;
    const HandlerInput=(e)=>{
       name = e.target.name
       value = e.target.value
        setPostdata({...postdata,[name]:value})
    }
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const editdata=()=>{
       
        Swal.fire({
            position: 'top-end',
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Object.assign(postdata,{id:id})
                dispatch(editPost(postdata)) 
                navigate('/') 
              Swal.fire('Saved!', '', 'success')
            } else if (result.isDenied) {
              Swal.fire('Changes are not saved', '', 'info')
            }
          })
       
        console.log(postdata)
    }
    return(
        <div>
            <Heder></Heder>
            
            
            <div>
           <Link to="/"> <button type="button" className="btn btn-warning">
          <span class="glyphicon glyphicon-arrow-left"></span> Back To Index
        </button></Link>
            </div>
            <h2>Edit your Blog Details</h2>
            <div className="hemant">
            <form>
             <div class="form-group">
                 <label for="email">Title:</label>
                     <input type="text" class="form-control" name="title"
                     value={postdata.title}
                     onChange={HandlerInput} />
             </div>

             <div class="form-group">
                 <label for="email">Title:</label>
                     <input type="text" class="form-control" name="categories"
                     value={postdata.categories}
                     onChange={HandlerInput} />
             </div>
            
             <div class="form-group">
                 <label for="pwd">Content:</label>
                    <textarea class="form-control" rows="5" name="content" 
                    value={postdata.content}
                    onChange={HandlerInput}/>
             </div>
  
                 <button type="button" class="btn btn-default" onClick={editdata}>Submit</button>
             </form>
            </div>
        </div>
    )
}


export default Edit