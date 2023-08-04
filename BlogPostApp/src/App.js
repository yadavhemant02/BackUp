/* eslint-disable */
import './App.css';
import Userlogin from './components/User';
//import AllPost from './components/AllPost';
//import store from './redux/store';
import { connect, Connect } from 'react-redux';
import {upadtename} from './redux/store'
import { updatename } from './redux/action';
import {Route , Routes} from 'react-router-dom'
import { useState } from 'react';
import AllPost from './components/AllPost';
import AddPost from './components/AddPost';
import Viewpost from './components/Viewpost';

import Edit from './components/Edit';



function App(props) {
  console.log(props)
  const changename=()=>{
    console.log("hhhhhhhhhhhhhhhhh")
    props.changename('yadav')
  }


  const [user,setUser] = useState({
    name:'',
    email:''
});
const HandlerInput=(e)=>{
   
    setUser({...user,[e.target.name]:e.target.value})
}

 const handelsubmit=()=>{
  console.warn('lllll')
 }
  return (
    
    <div>
    
      <Routes>
      
      <Route path="/" element={<AllPost></AllPost>}></Route>
      <Route path="/addpost" element={<AddPost></AddPost>}></Route>
      <Route path="/editpost/:id" element={<Edit></Edit>}></Route>
      <Route path="/viewpost/:id" element={<Viewpost></Viewpost>}></Route>
      
      
     </Routes>
     

    </div>
  );
}


const mapStateToProps = (state)=>{
  console.log(state)
  return {
    myuser:state
  }
}

const mapDispatchProps = (dispatch)=>{
  return {
    changename:name=>{
      dispatch(updatename(name))
    }
  }
}


export default connect(mapStateToProps,mapDispatchProps)(App);
