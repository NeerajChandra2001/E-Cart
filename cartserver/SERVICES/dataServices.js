//import db
const { default: mongoose } = require('mongoose');
const db = require('./db');

//get all product from db
const getProducts = () => {
    return db.Product.find().then(
        (result) => {
            if (result) {
                return {
                    status: true,
                    statusCode: 200,
                    product: result
                }

            }
            else {
                return {
                    status: false,
                    statusCode: 401,
                    message: 'Product not found'
                }

            }
        }
    )
}

//get ll wishlist

const getwishlist = () => {
    return db.Whishlist.find().then(
        (result) => {
            if (result) {
                return {
                    status: true,
                    statusCode: 200,
                    product: result
                }

            }
            else {
                return {
                    status: false,
                    statusCode: 401,
                    message: 'wishlist is empty'
                }

            }
        }
    )
}

//addtowhishlist details store to db

const addtowhishlist = (id, title, price, image, description) => {
    return db.Whishlist.findOne({ id }).then( //
        (result) => {
            if (result) {
                return {
                    status: false,
                    ststusCode: 401,
                    message: 'Product already added '
                }
            }
            else {
                const newProduct = new db.Whishlist({
                    id, title, price, image, description
                })
                newProduct.save()
                return {
                    status: true,
                    ststusCode: 201,
                    message: 'Product Added succesfully'
                }
            }
        }
    )

}

//delete wishlist from db

const deletewish=(id)=> {
    return db.Whishlist.deleteOne({ id }).then(
        (result) => {
            if (result) {
                return {
                    status: true,
                    statusCode: 200,
                    product: result,
                    message:'product removed successfully'
                }

            }
            else {
                return {
                    status: false,
                    statusCode: 401,
                    message: 'wishlist is empty'
                }

            }
        }
    )
}

module.exports = {
    getProducts,
    addtowhishlist,
    getwishlist,
    deletewish
}

