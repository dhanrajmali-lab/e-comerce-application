import {addReview,deleteReview,getReviewByProductId,getReviewByProductIdadmin} from "../controller/reviewController.js"


import express from "express"


const revieRouter = express.Router()


revieRouter.post('/add/:id',addReview)

revieRouter.get('/getrating',getReviewByProductId)

revieRouter.get('/getbyadmin',getReviewByProductIdadmin)


revieRouter.delete('/:id',deleteReview)

export default revieRouter;