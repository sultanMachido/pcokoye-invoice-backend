const databaseConnection = require('../database/db');
const Sequelize = require('sequelize');

module.exports = databaseConnection.dbConnect.define(
    'invoice',{
         invoiceId: {
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
         },
         orderNumber: {
             type:Sequelize.STRING,
             allowNull: false
          },
          status: {
            type:Sequelize.STRING,
            allowNull: false
         },
          price: {
             type:Sequelize.INTEGER,
             allowNull: false
          },
         partialPayment:{
            type:Sequelize.INTEGER,
            allowNull: false
        },
        item: {
            type:Sequelize.STRING,
            allowNull: false
         },
         customerName:{
            type:Sequelize.STRING,
            allowNull: false
         },
         customerEmail:{
            type:Sequelize.STRING,
            allowNull: false
         },
         customerAddress:{
            type:Sequelize.STRING,
            allowNull: false
         },
         customerPhoneNumber:{
            type:Sequelize.STRING,
            allowNull: false
         },
         createdAt: {
            type: Sequelize.DATE,
            allowNull: false
          },
          updatedAt: Sequelize.DATE
      
},{
   tableName:'invoice'
})