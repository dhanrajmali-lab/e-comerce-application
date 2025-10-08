import { DataTypes } from 'sequelize'
import  sequelize from '../config/db.js'
const otp = sequelize.define('otp',
    {
        otp_value:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        expiresAt: {
        type: DataTypes.DATE,
        allowNull: false
    }
      }
)

export default otp