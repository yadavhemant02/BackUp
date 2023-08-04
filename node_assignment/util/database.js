const Sequelize = require('sequelize')
const sequelize = new Sequelize(
    "hemant","root","root",{
       dialect:"mysql",
       host:"localhost"
    }
);

sequelize.authenticate()
.then(()=>{
    console.log("connected")
})
.catch((err)=>{
    console.log(err)
});

module.exports = sequelize;