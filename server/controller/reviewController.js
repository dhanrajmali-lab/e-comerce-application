import { product, review, user } from "../model/index.js";

const addReview = async (req,res) => {
    
    try {
        
        const {rating,comment} = req.body;

        const givenby=res.user.data.id;

        const productid=req.params.id;

            console.log(productid)

        await review.create({star:rating,text:comment,givenBy:givenby,productId:productid})

        res.status(200).json({msg:"review is added"})

    } catch (error) {
        res.status(500).json({error})
    }
}


const deleteReview = async (req,res) => {
    
    try {
        const id=req.params.id;

        await review.destroy({where:{id:id}})

        res.status(200).json({msg:"review is deleted"})

    } catch (error) {
        res.status(500).json({error})
    }
}


const getReviewByProductId = async (req,res) => {
    
    try {

        const id=res.user.data.id;
        const data= await review.findAll({include: [{ model:product, where:{addedBy:id}},{model:user}],})

        console.log(data)

        res.status(200).json({data})
        
    } catch (error) {
     
        res.status(500).json({error})
        
    }
}

const getReviewByProductIdadmin = async (req,res) => {
    
    try {

        const id=res.user.data.id;
        const data= await review.findAll({include: [{ model:product,include:user},{model:user}],})

        console.log(data)

        res.status(200).json({data})
        
    } catch (error) {
     
        res.status(500).json({error})
        
    }
}


export  {addReview,deleteReview,getReviewByProductId,getReviewByProductIdadmin}