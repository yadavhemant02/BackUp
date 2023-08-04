import { useState } from "react";
//import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Heder from './Heder'
import './user.css'
import shortId from 'shortid'
import { useradd } from "../redux/action"; 
import { Link,useHistory,useNavigate } from "react-router-dom";

function User(){

    const dispatch = useDispatch();
    const [user,setUser] = useState({
       
        name:'',
        username:'',
        email:'',
        password:''
    });
    let name, value;
    const HandlerInput=(e)=>{
       name = e.target.name
       value = e.target.value
        setUser({...user,[name]:value})
    }
    //const onNameChange = e => setName(e.target.value)

   // const canSave = [user.name, user.username, user.email,user.password].every(Boolean)
    //console.log(canSave)
    
    const navigate = useNavigate()
   // const history = useHistory()
    const handelsubmit=(e)=>{
        Object.assign(user,{id:shortId.generate()})
        dispatch(useradd(user))
        //history.push('/allpost')
        navigate('/allpost')
        //console.log(canSave)
       console.log(user)
    }
    
    return (
           <div>
               <Heder/>
               <h1>Sign Up</h1>
               <h2>welcome to our sign up page.</h2>
             <div className="hemant">  
               <form className="form-horizontal">
               <div class="form-group">
                 <label class="control-label col-sm-2" for="email">Name:</label>
                  <div class="col-sm-10">
                     <input type="text" placeholder="enter your name" name="name"
                        value={user.name} 
                         onChange={HandlerInput} />
                   </div>
               </div>

               <div class="form-group">
                 <label class="control-label col-sm-2" for="email">Username:</label>
                  <div class="col-sm-10">
                  <input type="text" placeholder="enter your username" name="username"
                value={user.username} 
                onChange={HandlerInput} />
                   </div>
               </div>


               <div class="form-group">
                 <label class="control-label col-sm-2" for="email">Email:</label>
                  <div class="col-sm-10">
                  <input type="text" placeholder="enter your email" name="email"
                value={user.email} 
                onChange={HandlerInput} />
                   </div>
               </div>

               <div class="form-group">
                 <label class="control-label col-sm-2" for="email">password:</label>
                  <div class="col-sm-10">
                  <input type="text" placeholder="enter your password" name="password"
                value={user.password} 
                onChange={HandlerInput} />
                   </div>
               </div>
               
                
                
               <div class="form-group">
              <div class="col-sm-offset-2 col-sm-10">
              <button type="button" onClick={handelsubmit}>send</button>
                   </div>
                   </div>

                
                
               </form>
               </div>
               
              
           </div>
    );
}

export default User