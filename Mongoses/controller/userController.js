const mongoose = require('mongoose')
const User = require('../Model/userModel')
const jwt = require('jsonwebtoken');
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const bcrypt = require('bcryptjs')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

const jwtkey = "jonetokenkey";

const securePassword = async(pass)=>{
        const passworde = await bcrypt.hash(pass,10)
        return passworde 
}




app.post('/login',async(req,resp)=>{
    console.log("kkk")
    try {
        const result = await User.findOne({name:req.body.name});
        console.log(result)
        bcrypt.compare(req.body.password,result.password)
        .then(doMatch=>{
            console.log("llllllllllll")
            if(doMatch){
                //res.json({message:"SignIn successfull"})
                //const token = jwt.sign({_id:savedUser._id},JWT_SECRET)
                //const {_id,name,email,role} = savedUser
               //res.json({token,user:{_id,email,name,role}})
                resp.send(result)
            }else{
                return resp.status(422).json({error:"Invalid Email or Password"})
            }
        
    });
        
    } catch (error) {
        resp.status(400).send(error);
    }
})

app.get("/user", VerifyToken,async(req,resp)=>{
    try {
        const result = await User.find();
        resp.send(result)
        
    } catch (error) {
        resp.status(401).send(error)
    }
})

app.get("/",async(req,resp)=>{
    resp.send("hemnat");
})
app.post('/user', async (req, resp) => {
    console.log("hemnat bhai yar")

    const securePass = await securePassword(req.body.password)
    console.log(securePass)
    const user = User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: securePass
    })
    console.log(req.body.name)
    const userdata = await User.findOne({name:req.body.name})
    console.log(userdata)
    if(userdata){
          resp.status(401).send({result:"insert unit name"})
    }
    else{
        const result = await user.save();
        console.log(result)
        if(result){
            console.log("asaaaaaaaaaaaaaaaa")
            jwt.sign({result},jwtkey,{expiresIn:"1h"},(err,token)=>{
                if(token){
                    console.log(token)
                    resp.send({jwttoken:token})
                    
                }
                else{
    
                    console.log("kkk")
                    resp.send("good thing")
                }
            })
    
        }

        
        //console.log(result)
       // resp.status(200).send({status:"successfully inserted"})
    }
})

function VerifyToken(req ,resp, next){
   
      const token = req.headers['authorization']
      console.log(token)
      console.log('lllllll')
      if(token){
        jwt.verify(token,jwtkey,(err,valid)=>{
            if(err){
                 resp.send({massege:"not valid"})
            }
            else{
                next();
            }
        })
      }
      else{
        resp.send({massege:"add token"})
      }
   
    }     

module.exports = app;
