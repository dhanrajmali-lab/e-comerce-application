import { DataTypes } from 'sequelize'
import  sequelize from '../config/db.js'
const user = sequelize.define('user',
    {
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        email:{
            type:DataTypes.STRING,
            unique:true,
            allowNull:false
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        },
        roles:{
            type:DataTypes.ENUM,
            values:['admin','user','vendor']
        },
        address:{
            type:DataTypes.STRING,
            allowNull:false
        },
        status:{
            type:DataTypes.ENUM,
            values:['active','pending','deactive'],
            defaultValue:'pending',
        }
    }
)


 user.sync()
 .then(()=>{
    console.log("table is created")
 })
 .catch((er)=>{
    console.log("table is not created",er)
 })

export default user;