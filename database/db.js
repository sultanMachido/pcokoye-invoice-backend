const Sequelize = require('sequelize');

const dbConnect = new Sequelize('heroku_7a099c7aa97c6dc','b1e76a35c53fd3','a0b295f2',{
    host:"us-cdbr-east-02.cleardb.com",
    dialect:"mysql",
    // operatorsAliases: false,
    port:3306,
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle:10000
    }
});

 let checkConnection = dbConnect.authenticate()
  .then(()=> console.log('connected...'))
  .catch((err)=>console.log(err));

let db ={
     dbConnect,
     checkConnection,
     Sequelize
}  



module.exports = db;
