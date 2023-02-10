//import express
const express = require('express');
//import cors
const cors = require('cors');

//import dataservices
const dataservices = require('./SERVICES/dataServices');
const { Product } = require('./SERVICES/db');

//create an application using express
const app = express();

//use json parser for server response
app.use(express.json())

//using cors specify the origin to the sever
app.use(cors({
    origin: 'http://localhost:4200'
}))

//set up port number
app.listen(3000, () => {
    console.log('listening on port number 3000');
})

//API call to get all product
app.get('/all-products', (req, res) => {
    dataservices.getProducts().then(
       
        result => {
            res.status(result.statusCode).json(result)
        }
    )
})

//API call to add  product to whsishlist

app.post('/addtowhishlist', (req, res) => {

    dataservices.addtowhishlist(req.body.id,req.body.title,req.body.price,req.body.image,req.body.description).then(
    result => {
        res.status(result.ststusCode).json(result)
    })
})



//API call to get  product to whsishlist
app.get('/getwishlist', (req, res) => {
    dataservices.getwishlist().then(
       
        result => {
            res.status(result.statusCode).json(result)
        }
    )
})



//API call to delete  product to whsishlist
app.delete('/deletewish/:id', (req, res) => {
    dataservices.deletewish(req.params.id).then(
       
        result => {
            res.status(result.statusCode).json(result)
        }
    )
})