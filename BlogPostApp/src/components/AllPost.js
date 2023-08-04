import React from "react";
import Heder from './Heder'
import { useSelector } from "react-redux";
import './user.css'
import List from './List'
import { Link, useNavigate } from "react-router-dom";
import './user.css'


const AllPost=()=>{
    const Hh = 1
    
    function increment(Hh){
        Hh=Hh+1
        return Hh
    }
    increment(Hh) 
    console.log(increment(Hh))

    const HookData = useSelector((state)=>{
        return {
            
           mypost:state.post
        }
        
    })
    console.log(HookData.mypost.items)
    const navigate = useNavigate()
    function move(){
      navigate('/addpost')
    }

    function view(){
      
    }

   return (
      <div>
      

       <Heder></Heder>
       

       <button onClick={move}  className="btn btn-warning">New Post</button>
       <h1 >Our Blog Title</h1> 
       <h3>you can click view and check Blog details</h3>
       
      

          <div className="yashi">
            <table class="table">
    <thead>
      <tr>
        <th>S.No</th>
        <th>Title</th>
       
      </tr>
    </thead>
    <tbody >
        
    {HookData.mypost.items.map((data,index)=>(
        
      <tr >
        <td>{index+1}</td>
        <td className="textfont">{data.title}</td>
        <td><Link to={'/viewpost/'+data.id}>view</Link></td>
        
      </tr> 
      
           
    
       ))} 
    </tbody>
    </table>  
          </div>
      
    
       
      
      
      </div>
   )    
}

export default AllPost