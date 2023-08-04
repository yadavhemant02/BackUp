import React from "react";
import Heder from "./Heder";
import { connect, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
//import { postInfo } from "../redux/action";
import { useSelector} from "react-redux";
import { deletPost } from "../redux/action";
import { useNavigate } from "react-router-dom";
import { Likeaction } from "../redux/action";
import './user.css'
import Swal from 'sweetalert2'


const Viewpost=(props)=>{
    //console.log(this.props.match.params.id)

    const dispatch=useDispatch()
    const { id } = useParams()
    
   
   
    const HookData = useSelector((state)=>{
       // return {postll:state.post}
        let postDetail = state.post.items.filter((post)=>post.id==id)
            return{
                
                ...state,
                posth:(postDetail.length>0)? postDetail[0]:{}
            }
        
    })

    console.log(HookData.posth)
         
    


    console.log(props.mypost,id)
   

    const delet=()=>{
        
        Swal.fire({
            position: 'top-end',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              dispatch(deletPost(id))
              navigate('/')
              Swal.fire(
                
                'Deleted!',
                'Your Post has been deleted.',
                'success'
              )
            }
          })
         
    } 
    const navigate = useNavigate()
    const edit=()=>{
        navigate('/editpost/'+id)
    }
    let ll = "kkkk"
    ll = 'klklklklkl'
    console.log(ll)
    
    const Like=()=>{
        dispatch(Likeaction(id))
       
        if(HookData.posth.Like==1){
            console.log("jjjj like bhai")
           
           
        }
        else{
            
            console.log('ll')
        }
       
    }
    const ss = "btn btn-default btn-sm"
    return(
        <div>
            <Heder></Heder>
            
            <div className="lsd">
           <Link to="/"> <button type="button" className="btn btn-warning">
          <span class="glyphicon glyphicon-arrow-left"></span> Back To Index
        </button></Link>
            </div>
            <div className="up">
                 <div className="in">
                    <div className="row">
                       <div className="col-md-6"></div> 
                       
                   <div className="col-md-6" style={{textAlign:"center", marginTop:"7px"}}> 
                   <button type="button" onClick={Like} className={HookData.posth.Like}>
          <span className=' glyphicon glyphicon-thumbs-up'></span> like
        </button>
                   <button className="btn btn-primary" onClick={edit}>Edit</button> 
                   <button className="btn btn-warning" onClick={delet}>Delete</button></div>
                 </div>
                 </div>
                 <div className="under">
                    <p><b className="bbtitle">&nbsp;&nbsp;{HookData.posth.title}</b><br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;{HookData.posth.categories}</p>
                    
                 </div>
                 <div className="underr">
                     <b className="cc">Content&nbsp;:&nbsp;</b>
                     <div className="content">{HookData.posth.content}</div>
                 </div>

            </div>
        </div>
    )
}

const mapStateToProps=(State)=>{

    return {
        mypost:State.post
    }
}

export default connect(mapStateToProps)(Viewpost)