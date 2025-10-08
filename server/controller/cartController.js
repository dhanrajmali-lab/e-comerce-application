import { Op } from "sequelize";
import {cart, product} from "../model/index.js";

const addToCart = async (req,res) => {
    try {
        const productid=req.params.id;
        const userid=res.user.data.id;
        console.log(productid)

        const c= await  cart.count({where:{[Op.and]:[{productId:productid},{userId:userid}],}})

        if(c >0)
        {
            const data= await cart.findOne({where:{[Op.and]:[{productId:productid},{userId:userid}],}})
    
            const q=data.Quantity+1;
            console.log(q)

            await cart.update({Quantity:q},{where:{[Op.and]:[{productId:productid},{userId:userid}],}})
            
            res.status(200).json({msg:" product is added to cart"})

        }
        else
        {
        await cart.create({userId:userid,productId:productid})      
            res.status(200).json({msg:" product is added to cart"})

        }


    } catch (error) {
        
        res.status(500).josn({error})
    }
}

const getAllCartItems = async (req,res) => {
    try {

        const userid=res.user.data.id;

        const data= await cart.findAll({where:{userId:userid}, include: product})        

        res.status(200).json({data})
        
    } catch (error) {
        
        res.status(500).josn({error})
    }
}

const removeToCart = async (req,res) => {
    try {
        const cartItemId=req.params.id;

        await cart.destroy({where:{id:cartItemId}})        

        res.status(200).json({msg:" product is removed to cart"})
        
    } catch (error) {
        
        res.status(500).josn({error})
    }
}



export {addToCart,removeToCart,getAllCartItems}