import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import {notFound, errorHandler} from './middleware/middleware.js'

const app = express()
dotenv.config()
connectDB()

app.use('/api/products', productRoutes)
app.use(notFound)
app.use(errorHandler)
app.get('/',(req,res) => {

    res.send('API is running....')
})



app.get('/api/products',(req,res) => {

    res.json(products);
})

app.get('/api/products/:id',(req,res) => {
    const product = products.find(p => p._id === req.params.id)
    res.json(product)
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, 
    console.log(`Server running in ${process.env.ENVI} mode on port ${PORT}`.yellow.bold)
    )
