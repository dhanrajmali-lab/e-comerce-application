import user from "./userModel.js";
import review from "./reviewModel.js"
import product from "./productModel.js"
import order from "./orderModel.js"
import category from "./categoryModel.js"
import cart from "./cartModel.js"
import sequelize from "../config/db.js";
import otp from "./otpModel.js";

user.hasMany(product,{foreignKey:'addedBy'})
product.belongsTo(user,{foreignKey:'addedBy'})

user.hasMany(review,{foreignKey:'givenBy'})
review.belongsTo(user,{foreignKey:'givenBy'})


user.hasMany(otp)
otp.belongsTo(user)

user.hasMany(order)
order.belongsTo(user)

user.hasMany(cart)
cart.belongsTo(user)


product.hasMany(cart)
cart.belongsTo(product)

product.hasMany(review)
review.belongsTo(product)

product.hasMany(order)
order.belongsTo(product)

sequelize.sync()
export {user,product,cart,review,otp,order}