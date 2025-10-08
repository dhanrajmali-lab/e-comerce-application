import { DataTypes } from 'sequelize'
import  sequelize from '../config/db.js'
const order = sequelize.define('order',
    {

        paymentType:{
           type:DataTypes.ENUM,
           values:['card','upi','cash'],
           defaultValue:"cash"

        },
        quentity:{
            type:DataTypes.INTEGER,
            defaultValue:1,
        },
        shipingAddress:{
            type:DataTypes.STRING,
         
        },
        orderstatus:{
            type:DataTypes.ENUM,
            values:['Order Placed','pending','Processing','delivered'],
            defaultValue:"pending"
        },
    }
)

export default order