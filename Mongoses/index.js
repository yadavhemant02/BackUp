const express = require("express")
const mongoose = require('mongoose')
const user = require("./controller/userController")
const app = express();
const cors = require('cors')
app.use(cors())
mongoose.connect('mongodb://localhost:27017/test');


app.use("/api",user);

app.listen(5523,function(){
    console.log("server is ready")
})  