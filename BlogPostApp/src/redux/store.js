import {createStore, combineReducers} from 'redux'
import  userReducer  from './reducer/userReducer'
import postReducer from './reducer/postReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore } from '@reduxjs/toolkit';


const mainReducer = combineReducers({
    

        post:postReducer,
        user:userReducer
})

const commonData = {
    user:[
            {
                 name:"hemant",
                 username:"yadavhemant",
                 email:"yadav@gmail.com",
                 password:"123"         
               },
               {
                name:"yashi",
                 username:"yadavhemant",
                 email:"yadav@gmail.com",
                 password:"123" 
               }
        ]   
    
}

const store = createStore(mainReducer,composeWithDevTools())

export default store