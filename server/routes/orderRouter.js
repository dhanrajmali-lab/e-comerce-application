import {addOrder,getOrderdetailByUser,cancelOrder,getOrderdetail,getOrderdetailByVendor,getOrderdetailById,updateStatus,addCartOrder} from '../controller/orderController.js'

import express from "express"
const orderRouter = express.Router();

orderRouter.post('/cartadd',addCartOrder)

orderRouter.post('/add/:id',addOrder)

orderRouter.get('/getorderbyuser',getOrderdetailByUser)

orderRouter.get('/getorderdetail',getOrderdetail)

orderRouter.get('/getorderByVendor',getOrderdetailByVendor)

orderRouter.get('/:id',getOrderdetailById)

orderRouter.patch('/:id',updateStatus)

orderRouter.delete('/cancel/:id',cancelOrder)


export default orderRouter