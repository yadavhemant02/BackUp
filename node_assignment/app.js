const express = require('express');
//const sequelize= require('./util/database')
const app = express();
app.set('view engine','ejs');
app.listen(4300)



app.use(express.json())

module.exports=app;


