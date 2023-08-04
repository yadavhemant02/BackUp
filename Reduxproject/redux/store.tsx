import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
//import persistReducer from "redux-persist/es/persistReducer";
//import storage from "redux-persist/lib/storage";

//let persistconfig = {
//  key: 'root',
//storage
//}

//const persist = persistReducer(persistconfig, rootReducer);

const store = configureStore({
    reducer: rootReducer
})





export default store;