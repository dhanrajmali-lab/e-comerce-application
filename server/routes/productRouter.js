import  {addProduct,getAllProduct,getProductById,deleteProduct,getAllProductByUser,updateProduct} from '../controller/productController.js'
import express from 'express'
import userVerify from '../middleware/userVerify.js';
import multfile from '../middleware/multer.js';
import verifyToken from '../middleware/jwtVerify.js';
const productRouter = express.Router();

productRouter.post('/add',multfile,verifyToken,userVerify('user'),addProduct)
productRouter.get('/get',getAllProduct)
productRouter.get('/getProductUser',verifyToken,getAllProductByUser)
productRouter.get('/:id',getProductById)
productRouter.put('/:id',multfile,verifyToken,userVerify('user'),updateProduct)
productRouter.delete('/:id',deleteProduct);

export default productRouter