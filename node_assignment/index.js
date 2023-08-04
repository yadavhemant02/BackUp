const sequelize = require("./util/database");
const student = require("./model/student")
const express= require('express');
const { result } = require("lodash");
const { render } = require("ejs");
const { Session } = require("inspector");
const localStorage = require("localStorage");
const app = express()
const session = require('express-session');

app.use(session({
    secret: 'Iamkey',
    resave: false,
    saveUninitialized: true,
  }))
app.use(express.json())
app.use(express.urlencoded())

//jwt auth

const jwt = require('jsonwebtoken');
//app.use('*',cors());

const _securty="sfhdgeri39rufnjd83j3bed7geh3ns";
const _userlist = [{id:1,email:"yadavhemant9719@gmail.com",password:"hemant9719",name:"teacher",
dob:"2000-12-12"}]


app.post("/login",(req,resp)=>{
    app.set("nn","hhheee")
    const{email,password} = req.body;
    const userDetails = _userlist.find(i=>i.email===email&&i.password===password);
    if(userDetails){
        console.log("love")
        const plyload = {id:userDetails.id};
        var token = jwt.sign(plyload,_securty);
       // resp.redirect('/allstudentdata')
       console.log(userDetails.name)
       // localStorage.setItem("user",userDetails.name);
       req.session.user=userDetails.name;
    
        resp.redirect("/allstudentdata");
    }
    else{
        resp.send({status:"faild"})
    }
    

})




app.use(session({
    secret:"iamkey",
    resave:false,
    saveUninitialized:true
}))



app.post("/add",(req,resp)=>{
sequelize.sync()
.then((result)=>{

        const data = req.body;

        return student.create({name:data.name,rollno:data.rollno,Dateofbirth:data.date,score:data.score})
        
        console.log(result)
    })
    .then(stu=>{
        console.log("created",stu)
        resp.redirect('allstudentdata')
    })
    .catch((err)=>{
        console.log(err)
        resp.send("error: please check your details!")
    })
})


app.get("/data",async(req,resp)=>{
    
        const dd = await student.findAll();
        resp.send(dd)
        console.log(dd)
        resp,render('allstudentdata')
    });


app.delete("/delet",async(req,resp)=>{
    const ss= await student.destroy({
        where: {
          id: 1
        }
    })
    resp.send(ss);
})    

var sess;
app.post("/one",async(req,resp)=>{
    
    const data = req.body;
    console.log(data);
    
    const mascots = await student.findAll({
        where:{
            rollno:data.rollno,
            name:data.name
        }
    })
       
         //resp.send(aa)
        console.log(mascots) 
        //const sess= app.use(Session({name:mascots.name}))
       // localStorage.setItem('lastname','Smith');
      // const sessionID = req.session.mascots[0].name;
     
       sess = req.session;
       console.log(sess)

        if(mascots.length!=0){
           resp.render('studentdata',{sess,name:req.session.user,mascots:mascots})
        }
        else{
            resp.send("error: please check your details!")
        }
   
})

app.set('view engine','ejs');
app.get('/',(req,resp)=>{
    resp.render('index')
})

app.get('/studentlogin',(req,resp)=>{
    resp.render('studentlogin')
})


app.get('/allstudentdata',async(req,resp)=>{
    //console.log(name)
    //const bb = localStorage.getItem("user")
    //console.log(bb)
    if(!req.session.user){
       resp.redirect('/teacherlogin')
    }
    //location.reload();
    
    const mascots = await student.findAll();
    const len = mascots.length
    resp.render('allstudentdata',{name:req.session.user,len,mascots:mascots})
})

app.get('/bb/:id/docs',async(req,resp)=>{
    var id = req.params.id;
    const ss= await student.destroy({
        where: {
          id: id
        }
    })
    resp.redirect('/allstudentdata');
    console.log(id);
})

app.get('/bb/:id/edit',async(req,resp)=>{
    var id=req.params.id;
    const mascots = await student.findAll({
        where:{
            id:id
        }
    })
    console.log(mascots)
    if(mascots!=null){
        resp.render('editstudent',{name:req.session.user,mascots:mascots})
    }
})

app.get('/addstudent',(req,resp)=>{
    resp.render('addstudent',{name:req.session.user})
})



app.get('/editstudent',(req,resp)=>{
    resp.render('editstudent')

})

app.post('/update/:id/data',async(req,resp)=>{
    var id = req.params.id
   

    const data = req.body;
    console.log(id+data.name)
    const product ={
        name:data.name,
        rollno:data.rollno,
        Dateofbirth:data.date,
        score:data.score
    }
    console.log(product)
    const dd = await student.update(product
    ,{where:{
           id:id
        }  
    }).then(()=>{
       resp.redirect('/allstudentdata')
    }).catch(error=>{
        resp.send(error)
        resp.send(error)
    })

})    


app.get('/logout',(req,resp)=>{
    //const aa = delete req.session;
    //localStorage.removeItem("user")
    console.log(req.session.user)
    req.session.destroy(function(err) {
        if(err){

            resp.redirect("/");

        }
        else{
            resp.redirect("/teacherlogin")
        }
      })
   
   
})

app.get('/teacherlogin',(req,resp)=>{
    resp.render('teacherlogin')
})




app.listen(4300)