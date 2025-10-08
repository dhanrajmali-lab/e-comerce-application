import { DataTypes } from 'sequelize'
import  sequelize from '../config/db.js'
const category = sequelize.define('category',
    {
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        }
    }
)

export default category;