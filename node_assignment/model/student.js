const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Student =sequelize.define("Student",{
     id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
     },
     name:{
        type:Sequelize.STRING,
        allowNull:false,
     },
     rollno:{
      type:Sequelize.INTEGER,
      allowNull:false,
      primaryKey:true
     },
     Dateofbirth:{
      type:Sequelize.DATE,
      allowNull:false
     },
     score:{
      type:Sequelize.INTEGER,
      allowNull:false
     }


});

module.exports= Student;