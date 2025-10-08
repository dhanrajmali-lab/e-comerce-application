import {userCreation,userLogin,forgotPassword,changePassword,getAllUser,getAllVendor,removeuser,getuserById,userEdit} from '../controller/userController.js'
import otpVerify from "../controller/otpController.js"
import express from 'express'
import verifyToken from '../middleware/jwtVerify.js';

const useRouter = express.Router();


useRouter.post('/create',userCreation)

useRouter.post('/forgot',forgotPassword)


useRouter.post('/login',userLogin)

useRouter.post('/otp',verifyToken,otpVerify)


useRouter.get('/userList',getAllUser);

useRouter.get('/vendorList',getAllVendor)

useRouter.get('/:id',getuserById)

useRouter.put('/:id',userEdit)


useRouter.delete('/:id',removeuser);

export default useRouter;