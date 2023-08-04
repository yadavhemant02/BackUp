//import asios from 'asios';

export const useradd=(user)=>{
    console.log('hhhhhhhss')
    return{
        type:'ADD_USER',
        payload:user
    }
}

export const addpost=(postdata)=>{
    console.log("jkjkjkk"+postdata)
    return{
        type:'ADD_POST',
        payload:postdata
    }
}

export const postInfo=(id)=>{
    console.log('pppppppppppppp'+id)
    return{
        type:'POST_INFO',
        payload:id
    }
}

export const deletPost=(id)=>{
    console.log("llkkllkkll"+id)
    return{
        type:'POST_DELETE',
        payload:id
    }
}

export const editPost=(data)=>{
    console.log("edit post")
    return{
        type:'EDIT_POST',
        payload:data
    }
}



export const updatename=(name)=>{
    return {
        type:'set_name',
        payload:name
    }
}

export const Likeaction=(id)=>{
    return{
        type:'set_like',
        payload:id
    }
}

export const callapi=()=>{
    
}