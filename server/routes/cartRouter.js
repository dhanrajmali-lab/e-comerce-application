import {addToCart,removeToCart,getAllCartItems} from '../controller/cartController.js'
import express from 'express'
import userVerify from '../middleware/userVerify.js';
const cartRouter = express.Router();



cartRouter.post('/addtocart/:id',addToCart);
cartRouter.get('/cartitem',getAllCartItems)
cartRouter.delete('/remotocart/:id',removeToCart)

export default cartRouter;