
const userdata=
    {
    name:"hemant",
    username:"yadavhemant",
    email:"yadav@gmail.com",
    password:"123"         
  }


const userReducer = (state={items: [{}]},action)=>{
   switch(action.type){
    case 'ADD_USER':
        console.log(state,action)

        return {
            
            items:[...state.items,action.payload]
        }
        default:
            return state;    
   } 
  
}

export default userReducer