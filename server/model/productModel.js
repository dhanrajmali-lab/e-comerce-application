import { DataTypes } from 'sequelize'
import  sequelize from '../config/db.js'
const product = sequelize.define('product',
    {
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        image:{
            type:DataTypes.JSON,
            allowNull:false
        },
        description:{
            type:DataTypes.STRING,
            allowNull:false
        },
        price:{
            type:DataTypes.STRING,
            allowNull:false
        },
        stock:{
            type:DataTypes.STRING,
            allowNull:false
        },
        categories:{
            type:DataTypes.STRING,
            allowNull:false
        }
    }
)


export default product