import { DataTypes } from 'sequelize'
import  sequelize from '../config/db.js'
const review = sequelize.define('review',
    {
        star:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        text:{
            type:DataTypes.STRING,
            allowNull:false
        }
    }
)

export default review