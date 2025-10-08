import {order, product, user} from "../model/index.js";

const addOrder=async (req,res) => {

    try {

        const {payment,address} = req.body;

        const pid=req.params.id;

        const uid=res.user.data.id;

       
        await order.create({shipingAddress:address,paymentType:payment,productId:pid,userId:uid})


        res.status(200).json({msg:"order is added"})
        
    } catch (error) {
        res.status(500).json("error",error)
    }
    
}


const addCartOrder=async (req,res) => {

    try {
       
        const {payment,address,data} = req.body;
        const uid=res.user.data.id;


            data.map(async (item)=>{
              
                const pid=parseInt(item.product.id);
                const quentity=parseInt(item.Quantity)
        
            await order.create({shipingAddress:address, paymentType:payment, quentity:quentity,productId:pid,userId:uid})

            })

        res.status(200).json({msg:"order is added"})
        
    } catch (error) {
        res.status(500).json("error",error)
    }
    
}


const getOrderdetailByUser = async(req,res)=>{

        try {
            const id =res.user.data.id;

            const data = await order.findAll({where:{userId:id},include:product})

            res.status(200).json(data)
            
        } catch (error) {
      
            res.status(500).json("error",error)
            
        }
}


const getOrderdetailById = async(req,res)=>{

        try {
            const id =req.params.id;

            console.log(id)
            const data = await order.findOne({where:{id:id},include:product})

            res.status(200).json(data)
            
        } catch (error) {
      
            res.status(500).json("error",error)
            
        }
}

const getOrderdetailByVendor = async(req,res)=>{

        try {
            const id =res.user.data.id;
 
            const data = await order.findAll({include:[{model:product,where:{addedBy:id}},{model:user}]})

            res.status(200).json(data)
            
        } catch (error) {
      
            res.status(500).json("error",error)
            
        }
}


const getOrderdetail = async(req,res)=>{

        try {

            const data = await order.findAll({include:[{model:product},{model:user}]})

            res.status(200).json(data)
            
        } catch (error) {
      
            res.status(500).json("error",error)
            
        }
}



const cancelOrder =async (req,res) => {
    
    try {

        const id=req.params.id;

        console.log(id)

        await order.destroy({where:{id:id}})

        res.status(200).json({msg:"order is cancel"})
        
    } 
    catch (error) {
     
            res.status(500).json("error",error)
        
    }
}


const updateStatus= async (req,res) => {

    try {
         const id=req.params.id;
         const {status} = req.body;
         console.log(status)
         await order.update({orderstatus:status},{where:{id:id}})

        res.status(200).json({msg:"order is update"})
        
    } catch (error) {
            res.status(500).json("error",error)
    }
    
}



export {addOrder,getOrderdetailByUser,cancelOrder,getOrderdetail,getOrderdetailByVendor,getOrderdetailById,updateStatus,addCartOrder}