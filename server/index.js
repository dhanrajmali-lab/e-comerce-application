import express from 'express'
const app = express();
import dotenv from "dotenv";
import useRouter from './routes/userRouter.js';
import productRouter from "./routes/productRouter.js"
import verifyToken from './middleware/jwtVerify.js';
import cors from "cors"
import cartRouter from './routes/cartRouter.js';
import path from 'path';
import { fileURLToPath } from 'url';
import revieRouter from './routes/revieRouter.js';
import orderRouter from './routes/orderRouter.js';

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.use(cors())
dotenv.config();

app.use(express.json());
app.use(express.urlencoded());


app.use('/user',useRouter)
app.use('/product',productRouter)
app.use('/cart',verifyToken,cartRouter)

app.use('/rating',verifyToken,revieRouter)

app.use('/order',verifyToken,orderRouter)

app.listen(process.env.PORT,()=>{
    console.log("server is runing")
})