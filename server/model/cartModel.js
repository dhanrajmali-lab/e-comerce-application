import { DataTypes } from 'sequelize'
import  sequelize from '../config/db.js'
const cart = sequelize.define('cart',
    {
        Quantity :{

            type:DataTypes.INTEGER,
            defaultValue: 1
        }
    }
)


export default cart;