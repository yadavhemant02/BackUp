const postdata=[{
    id:1,
    title:'The Fine Print of Self-Publishing',
    categories:'Faith',
    Like:"False",
    content:'The author of The Fine Print of Self-Publishing does a fine job of turning on the headlights toward common pitfalls of self-publishing. Warning lights include: how not to identify your target audience, what to avoid when selecting an editor or publisher, ...'
},
{
    id:2,
    title:'A Brief Overview On Bitcoin Exchange',
    categories:'Market',
    Like:'False',
    content:'Bitcoins are the great way if you want to exchange money or make a transaction. However, before you consider Bitcoins to make serious transactions it is wise you know them. It is of paramount importance that you make use of Bitcoins as regular wallet. In ...'
}
]

const postReducer=(state={items: postdata},action)=>{

    switch(action.type){
        case 'ADD_POST':
            console.log(state,action)

        return {
            
            items:[...state.items,action.payload]
        }
        case 'POST_INFO':
            console.log("kkkkkkkkkk"+action.payload)
            let postDetail = state.items.filter((post)=>post.id==action.payload)
            return{
                ...state,
                post:(postDetail.length>0)? postDetail[0]:{}
            }
        case 'POST_DELETE':    
            return{
                ...state,
                items:state.items.filter((data)=>data.id!=action.payload)
            }
        case 'EDIT_POST':
            console.log("p[p[p[",action.payload.id)
            const takearray = [];
           
           return{
                ...state,
                items:state.items.filter((data)=>{if(data.id==action.payload.id){

                    console.log("kkjjjaajjaaa")
                     data.id = action.payload.id;
                     data.title = action.payload.title;
                     data.content = action.payload.content;
                     data.categories = action.payload.categories
                    }
                    else{
                        console.log("kjakakskksppppppppp")
                    }
                    takearray.push(data)
                }),
                items:takearray
            } 
        
            case 'set_like':
                const takear = [];
                return{
                    ...state,
                    items:state.items.filter((data)=>{
                        if(data.id==action.payload){
                            if(data.Like=='True'){
                                data.Like = 'False'
                            }
                            else{

                                data.Like='True'
                            }
                        }
                        takear.push(data)
                    }),
                    items:takear

                }
               
        default:
            return state;  
    }

    
}

export default postReducer