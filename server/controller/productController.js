import { product } from "../model/index.js";

const addProduct =async (req,res) => {
    try {

        console.log("work")

        const multerimages = req.file.filename;
        const {name,description,price,stock,categories} =req.body;

            console.log(name)
            console.log(multerimages)
        const createdBy=res.user.data.id;
        console.log(createdBy)
        await product.create({name,description,price,stock,image:multerimages,addedBy:createdBy,categories})

        res.status(200).json({msg:"product is added"});
        
    } catch (error) {
        
        res.status(500).json({msg:error})
    }
}

const updateProduct =async (req,res) => {
    try {

        console.log("work")
        const multerimages = req.file.filename;
            
        const {name,description,price,stock,categories} =req.body;
        const createdBy=res.user.data.id;
        const id = req.params.id;
        console.log(createdBy)
        await product.update({name,description,price,stock,image:multerimages,addedBy:createdBy,categories},{where:{id:id}})

        res.status(200).json({msg:"product is updated"});
        
    } catch (error) {
        
        res.status(500).json({msg:error})
    }
}

const getAllProduct =async (req,res) => {
    try {

        const data=await product.findAll()

        res.status(200).json({data});
        
    } catch (error) {
        
        res.status(500).json({msg:error})
    }
}


const getAllProductByUser =async (req,res) => {
    try {

        const id =res.user.data.id;    
        const data=await product.findAll({where:{addedBy:id}})

        res.status(200).json({data});
        
    } catch (error) {
        
        res.status(500).json({msg:error})
    }
}

const getProductById =async (req,res) => {
    try {

        const id = req.params.id;

        const data=await product.findByPk(id)

        res.status(200).json({data});
        
    } catch (error) {
        
        res.status(500).json({msg:error})
    }
}


const deleteProduct =async (req,res) => {
    try {
        const id = req.params.id;

        await product.destroy({where:{id}})

        res.status(200).json({msg:"product is deleted"});
        
    } catch (error) {
        
        res.status(500).json({msg:error})
    }
}


export {addProduct,getAllProduct,getProductById,deleteProduct,getAllProductByUser,updateProduct}
