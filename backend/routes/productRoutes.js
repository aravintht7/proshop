import express from 'express'
import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'
const router = express.Router()

//@desc Fetch all products
//@route  GET /api/products
//@access public
router.get('/',asyncHandler(async (req,res) => {

    const products = await Product.find({})
    res.json(products)
}))

//@desc Fetch single products
//@route  GET /api/products/:id
//@access public
router.get('/:id', asyncHandler(async(req,res) => {

    const products = await Product.findById(req.params.id)
    if(products){

        res.json(products)
    }
    else{

        res.status(404)
        throw new Error('Product not found')
    }
    res.json(products)
}))

export default router